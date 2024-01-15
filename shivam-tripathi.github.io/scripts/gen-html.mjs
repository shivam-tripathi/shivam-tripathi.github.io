import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
import path from 'path';

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" rel="stylesheet" type="text/css" href="/public/global.css" />
    <link rel="icon" type="image/x-icon" href="/public/favicon.ico">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
    />
    <title>संक्षिप्त</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

fs.readFileSync(path.join(__dirname, '../src/routes.tsx'), 'utf-8')
  .toString()
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
