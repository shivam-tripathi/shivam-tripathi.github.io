import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf-8');

fs.readFileSync(path.join(__dirname, '../src/routes.tsx'), 'utf-8')
  .split('\n')
  .filter(line => line.includes('path: \''))
  .map(line => line.trim().split('\'').slice(1, -1)[0])
  .map(inner => {
    const targetDirname = inner.split('/').filter(token => token).slice(0, -1).join('/');
    const targetFilename = inner.split('/').filter(token => token).slice(-1)[0]?.replace('/', '');
    const dirPath = path.join(__dirname, `../../blog/${targetDirname}`);
    console.log({ file: targetFilename, inner, dirPath });
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(`${dirPath}/${targetFilename ?? 'index'}.html`, html);
  });
