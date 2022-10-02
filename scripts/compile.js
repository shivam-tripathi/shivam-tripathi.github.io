// deno-lint-ignore-file

import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight';
import fs from 'node:fs/promises';

const imported = [];
const exported = [];

async function build(dir = './mdx') {
  const exportedNames = [];
  for (const file of await fs.readdir(dir)) {
    console.log("processing", { dir, file });
    if (file.indexOf('.mdx') === -1) {
      const loc = `${dir}/${file}`.replace('./mdx', './blog');
      console.log('creating', loc);
      await fs.mkdir(loc, { recursive: true });
      await build(`${dir}/${file}`);
      continue;
    }
    const content = await fs.readFile(`${dir}/${file}`);
    const { value } = await compile(content, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight]
    });

    const name = file.replace('.mdx', '').split(/\s+/).map(v => v.toLowerCase());
    const target = `${dir.replace('./mdx', './blog')}/${name.join('-')}.jsx`;
    await fs.writeFile(target, value.replace("react/jsx-runtime", "https://esm.sh/react@17.0.2/jsx-runtime?deno"));

    const exportedName = name.reduce((acc, sub) => acc + sub[0].toUpperCase() + sub.slice(1), '');
    exported.push(`{ url: '${target.replace('./blog/', '').replace('.jsx', '')}', component: ${exportedName} }`);
    imported.push(`import ${exportedName} from ".${target}"`)
  }
}

build()
  .then(async () => {
    await fs.writeFile('./src/pages.tsx', `
    \r${imported.join(';\n')}
    \rexport default [\n\t${exported.join(',\n\t')}\n];
    `);
  })
  .catch(console.error);
