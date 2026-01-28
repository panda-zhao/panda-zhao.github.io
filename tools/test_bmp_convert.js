const fs = require('fs');
const path = require('path');

function readBmp(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.readUInt16LE(0) !== 0x4D42) throw new Error('not BMP');
  const pixelOffset = buf.readUInt32LE(10);
  const headerSize = buf.readUInt32LE(14);
  const width = buf.readUInt32LE(18);
  const heightRaw = buf.readInt32LE(22);
  const bitsPerPixel = buf.readUInt16LE(28);
  const compression = buf.readUInt32LE(30);
  const height = Math.abs(heightRaw);
  const rowSize = Math.floor((bitsPerPixel * width + 31) / 32) * 4;
  let masks = null;
  if (compression === 3) {
    const maskOffset = 14 + headerSize;
    if (maskOffset + 12 <= buf.length) {
      const rMask = buf.readUInt32LE(maskOffset);
      const gMask = buf.readUInt32LE(maskOffset + 4);
      const bMask = buf.readUInt32LE(maskOffset + 8);
      masks = { rMask, gMask, bMask };
    }
  }

  if (bitsPerPixel === 16) {
    const pixelCount = width * height;
    const data = new Uint16Array(pixelCount);
    let idx = 0;
    const startY = heightRaw < 0 ? 0 : height - 1;
    const endY = heightRaw < 0 ? height - 1 : 0;
    const stepY = heightRaw < 0 ? 1 : -1;
    for (let y = startY; y !== endY + stepY; y += stepY) {
      for (let x = 0; x < width; x++) {
        const offset = pixelOffset + y * rowSize + x * 2;
        data[idx++] = buf.readUInt16LE(offset);
      }
    }
    return { width, height, bitsPerPixel, compression, masks, data };
  } else if (bitsPerPixel === 24 || bitsPerPixel === 32) {
    const pixelCount = width * height;
    const data = Buffer.alloc(pixelCount * 3);
    let idx = 0;
    const pixelBytes = bitsPerPixel / 8;
    const startY = heightRaw < 0 ? 0 : height - 1;
    const endY = heightRaw < 0 ? height - 1 : 0;
    const stepY = heightRaw < 0 ? 1 : -1;
    for (let y = startY; y !== endY + stepY; y += stepY) {
      for (let x = 0; x < width; x++) {
        const offset = pixelOffset + y * rowSize + x * pixelBytes;
        const b = buf.readUInt8(offset);
        const g = buf.readUInt8(offset + 1);
        const r = buf.readUInt8(offset + 2);
        data[idx++] = r;
        data[idx++] = g;
        data[idx++] = b;
      }
    }
    return { width, height, bitsPerPixel, compression, masks, data };
  } else {
    throw new Error('unsupported bpp ' + bitsPerPixel);
  }
}

function toRgb565From16(pixels16, candidate) {
  const n = pixels16.length;
  const out = new Uint16Array(n);
  const as555 = candidate.as555;
  const asBgr = candidate.asBgr;
  for (let i = 0; i < n; i++) {
    const p = pixels16[i] & 0xFFFF;
    let r5, g6, b5, g5;
    if (asBgr) {
      if (as555) {
        b5 = (p >> 10) & 0x1F;
        g5 = (p >> 5) & 0x1F;
        r5 = (p >> 0) & 0x1F;
        g6 = (g5 << 1) | (g5 >> 4);
      } else {
        b5 = (p >> 11) & 0x1F;
        g6 = (p >> 5) & 0x3F;
        r5 = (p >> 0) & 0x1F;
      }
      out[i] = (r5 << 11) | (g6 << 5) | b5;
    } else {
      if (as555) {
        r5 = (p >> 10) & 0x1F;
        g5 = (p >> 5) & 0x1F;
        b5 = (p >> 0) & 0x1F;
        g6 = (g5 << 1) | (g5 >> 4);
        out[i] = (r5 << 11) | (g6 << 5) | b5;
      } else {
        out[i] = p;
      }
    }
  }
  return out;
}

function toRgb565From24(data24) {
  const n = data24.length / 3;
  const out = new Uint16Array(n);
  for (let i = 0; i < n; i++) {
    const r = data24[i * 3];
    const g = data24[i * 3 + 1];
    const b = data24[i * 3 + 2];
    const r5 = (r >> 3) & 0x1F;
    const g6 = (g >> 2) & 0x3F;
    const b5 = (b >> 3) & 0x1F;
    out[i] = (r5 << 11) | (g6 << 5) | b5;
  }
  return out;
}

function genColorTable(arr) {
  const map = new Map();
  const table = [];
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    if (!map.has(c)) {
      map.set(c, table.length);
      table.push(c);
    }
  }
  return { table: Uint16Array.from(table), map };
}

function summary(table) {
  const arr = Array.from(table).slice(0, 20).map(v => '0x' + v.toString(16).padStart(4, '0'));
  return `${table.length} colors; first: ${arr.join(', ')}`;
}

(async function main(){
  try {
    const p = '/Users/admin/Pictures/bmp/battery_B.bmp';
    console.log('Reading', p);
    const bmp = readBmp(p);
    console.log('W x H:', bmp.width, 'x', bmp.height, 'bpp:', bmp.bitsPerPixel, 'compression:', bmp.compression);
    if (bmp.bitsPerPixel === 16) {
      const candidates = [
        { name: 'RGB565', as555: false, asBgr: false },
        { name: 'BGR565', as555: false, asBgr: true },
        { name: 'RGB555', as555: true, asBgr: false },
        { name: 'BGR555', as555: true, asBgr: true }
      ];
      for (const c of candidates) {
        const arr = toRgb565From16(bmp.data, c);
        const { table } = genColorTable(arr);
        console.log(c.name, summary(table));
      }
      if (bmp.compression === 3 && bmp.masks) {
        console.log('BITFIELDS masks:', bmp.masks);
        // compute using masks
        const { rMask, gMask, bMask } = bmp.masks;
        const maskInfo = (mask) => {
          let m = mask >>> 0; let shift = 0; while (m && (m & 1) === 0) { m >>>= 1; shift++; } let bits = 0; while (m && (m & 1) === 1) { m >>>= 1; bits++; } return { shift, bits };
        };
        const rI = maskInfo(rMask), gI = maskInfo(gMask), bI = maskInfo(bMask);
        const rMax = (1 << rI.bits) - 1 || 1; const gMax = (1 << gI.bits) - 1 || 1; const bMax = (1 << bI.bits) - 1 || 1;
        const n = bmp.data.length; const out = new Uint16Array(n);
        for (let i=0;i<n;i++){ const p = bmp.data[i]&0xFFFF; const rRaw = (p & rMask) >>> rI.shift; const gRaw = (p & gMask) >>> gI.shift; const bRaw = (p & bMask) >>> bI.shift; const r5 = Math.round(rRaw*31/rMax)&0x1F; const g6 = Math.round(gRaw*63/gMax)&0x3F; const b5 = Math.round(bRaw*31/bMax)&0x1F; out[i] = (r5<<11)|(g6<<5)|b5; }
        const { table } = genColorTable(out);
        console.log('BITFIELDS-converted', summary(table));
      }
    } else if (bmp.bitsPerPixel === 24 || bmp.bitsPerPixel === 32) {
      const arr = toRgb565From24(bmp.data);
      const { table } = genColorTable(arr);
      console.log('24/32->565', summary(table));
    }
  } catch (err) {
    console.error('ERR', err.message);
  }
})();
