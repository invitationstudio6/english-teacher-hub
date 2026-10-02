import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');
const excluded = new Set(['.git', 'node_modules', 'dist']);

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (excluded.has(entry.name)) continue;
  fs.cpSync(path.join(root, entry.name), path.join(output, entry.name), { recursive: true });
}

if (!fs.existsSync(path.join(output, 'index.html'))) {
  throw new Error('Static build is missing index.html');
}
console.log(`Static site built in ${path.relative(root, output)}`);
