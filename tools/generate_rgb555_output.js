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

function toRgb565From16_RGB555(pixels16) {
  const n = pixels16.length;
  const out = new Uint16Array(n);
  for (let i = 0; i < n; i++) {
    const p = pixels16[i] & 0xFFFF;
    // Treat as RGB555 (R: bits 10-14, G: 5-9, B:0-4)
    const r5 = (p >> 10) & 0x1F;
    const g5 = (p >> 5) & 0x1F;
    const b5 = (p >> 0) & 0x1F;
    const g6 = (g5 << 1) | (g5 >> 4);
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

function formatUint16HexArray(arr, perLine = 10, indent = '    ') {
  return Array.from(arr)
    .map(v => `0x${v.toString(16).padStart(4, '0')}`)
    .reduce((acc, val, idx) => {
      acc += val;
      if (idx !== arr.length - 1) acc += ', ';
      if (idx % perLine === perLine - 1 && idx !== arr.length - 1) acc += `\n${indent}`;
      return acc;
    }, '');
}

function formatUint8HexArray(arr, perLine = 16, indent = '    ') {
  return Array.from(arr)
    .map(v => `0x${v.toString(16).padStart(2, '0')}`)
    .reduce((acc, val, idx) => {
      acc += val;
      if (idx !== arr.length - 1) acc += ', ';
      if (idx % perLine === perLine - 1 && idx !== arr.length - 1) acc += `\n${indent}`;
      return acc;
    }, '');
}

function buildHeader(images, colorTableLen) {
  const externIndexDecls = images.map(img => `extern const uint8_t ${img.symbolName}_pixel_index[];`).join('\n');
  return `#ifndef __YM_UI_H__\n#define __YM_UI_H__\n\n#include <stdint.h>\n\n#define COLOR_TABLE_LEN   (${colorTableLen}U)\n\nextern const uint16_t color_table[];\n\n${externIndexDecls}\n/* 有多个索引文件在后面添加 */\n\n#endif\n`;
}

function buildSource(images, colorTable) {
  const colorTableStr = formatUint16HexArray(colorTable, 10, '    ');
  const imageBlocks = images.map(img => {
    const arrStr = formatUint8HexArray(img.pixelIndexPacked, 16, '    ');
    return `/* ${img.fileBaseName}.bmp pixel index (前4字节=宽高，小端，16进制)：宽=${img.width} 高=${img.height} */\nconst uint8_t ${img.symbolName}_pixel_index[] = {\n    ${arrStr}\n};\n`;
  }).join('\n');
  return `/*\n * BMP 转 RGB565（RGB555 解释）生成\n */\n\n#include "Ym_Ui.h"\n\n/* RGB565 颜色表（存储所有唯一颜色值） */\nconst uint16_t color_table[] = {\n    ${colorTableStr}\n};\n\n${imageBlocks}`;
}

function sanitize(name){
  let s = String(name || '').replace(/\.bmp$/i, '');
  s = s.replace(/[^a-zA-Z0-9_]/g, '_');
  if (/^[0-9]/.test(s)) s = '_' + s;
  if (!s) s = 'bmp';
  return s;
}

(function main(){
  const p = '/Users/admin/Pictures/bmp/battery_B.bmp';
  const outDir = path.join(__dirname, '..', 'output');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const bmp = readBmp(p);
  if (bmp.bitsPerPixel !== 16) { console.error('unexpected bpp', bmp.bitsPerPixel); process.exit(1); }
  const rgb565 = toRgb565From16_RGB555(bmp.data);
  const { table: colorTable } = genColorTable(rgb565);
  const images = [];
  const { table: ct } = genColorTable(rgb565);
  const colorMap = new Map(); ct.forEach((v,i) => colorMap.set(v,i));
  const indexArray = new Uint8Array(rgb565.length);
  for (let i=0;i<rgb565.length;i++){ indexArray[i] = colorMap.get(rgb565[i]); }
  const packed = new Uint8Array(4 + indexArray.length);
  packed[0] = bmp.width & 0xFF; packed[1] = (bmp.width>>8)&0xFF; packed[2] = bmp.height & 0xFF; packed[3] = (bmp.height>>8)&0xFF; packed.set(indexArray,4);
  images.push({ fileBaseName: path.basename(p).replace(/\.bmp$/i,''), symbolName: sanitize(path.basename(p).replace(/\.bmp$/i,'')), width: bmp.width, height: bmp.height, pixelIndexPacked: packed });

  const hCont = buildHeader(images, colorTable.length);
  const cCont = buildSource(images, colorTable);
  fs.writeFileSync(path.join(outDir, 'Ym_Ui.h'), hCont);
  fs.writeFileSync(path.join(outDir, 'Ym_ui.c'), cCont);
  console.log('Wrote:', path.join(outDir, 'Ym_Ui.h'), path.join(outDir, 'Ym_ui.c'));
})();
