const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = ['B.js','C.js','P0.js','P1.js','P2.js','P3.js','U.js'];

const results = []; // {code, count, file}

files.forEach(file => {
  const full = path.join(dir, file);
  if (!fs.existsSync(full)) return;
  const content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');
  let currentCode = null;
  let inArray = false;
  // counts per code in this file
  const counts = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const codeMatch = line.match(/"(P[0-9A-Z]{4}|[BCU][0-9A-Z]{0,4})":\s*\[/);
    if (codeMatch) {
      currentCode = codeMatch[1];
      inArray = true;
      counts[currentCode] = 0;
      continue;
    }
    if (inArray && line.trim().startsWith('],')) {
      // end of current array
      currentCode = null;
      inArray = false;
      continue;
    }
    if (currentCode && line.includes('"scope":')) {
      counts[currentCode]++;
    }
  }

  Object.entries(counts).forEach(([code, count]) => {
    results.push({ code, count, file });
  });
});

if (results.length === 0) {
  console.log('未找到任何故障码');
  process.exit(0);
}

// 合并同一故障码（若不同文件有相同code，合并子项数并记录文件列表）
const merged = {};
results.forEach(r => {
  if (!merged[r.code]) merged[r.code] = { code: r.code, count: 0, files: {} };
  merged[r.code].count += r.count;
  merged[r.code].files[r.file] = (merged[r.code].files[r.file] || 0) + r.count;
});

const arr = Object.values(merged).sort((a,b) => b.count - a.count);

console.log('Top 50 故障码(按子项数量排序)：');
console.log('='.repeat(80));
arr.slice(0,50).forEach((it, idx) => {
  const fileParts = Object.entries(it.files).map(([f,c]) => `${f}:${c}`).join(', ');
  console.log(`${String(idx+1).padStart(2)}. ${it.code} — ${it.count} 个子项  [${fileParts}]`);
});
console.log('='.repeat(80));
const maxCount = arr[0].count;
const maxItems = arr.filter(r => r.count === maxCount);
console.log(`\n最多子项的故障码（${maxCount} 个子项）：`);
maxItems.forEach(it => {
  const fileParts = Object.entries(it.files).map(([f,c]) => `${f}:${c}`).join(', ');
  console.log(`- ${it.code}  来源: ${fileParts}`);
});
console.log(`\n共统计到 ${arr.length} 个不同故障码`);
