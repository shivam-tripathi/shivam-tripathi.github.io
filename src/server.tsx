import { reset } from "https://deno.land/std@0.118.0/fmt/colors.ts";
import { Application, Router, send } from "oak";
import React from "react";
import * as ReactDOMServer from "reactDOMServer";
import About from "./about.tsx";
import App from "./app.tsx";
import Landing from "./landing.tsx";
import Pages from "./pages.tsx";
import { kebabToHumanCase, urlLeaf } from "./utils.ts";

const app = new Application();
const port = 8000;

const raw = await Deno.readTextFile("./assets/template.html");
const template = (Article: React.ComponentType) =>
  raw
    .trim()
    .replace(
      "$BODY",
      `<body>${ReactDOMServer.renderToString(<App Article={Article} />)}</body>`
    );

const router = new Router();
const cwd = Deno.cwd();
// const domain = 'http://localhost:8000'
const domain = 'https://shivam-tripathi.github.io'

router.get("/assets/:path+", async (ctx) => {
  await send(ctx, ctx.params.path || "", {
    root: `${cwd}/assets`,
  });
});

for (const Page of Pages) {
  console.log(`GET http://localhost:8000/articles/${Page.url}`);
  const url = `/articles/${Page.url}`;
  router.get(url, (context) => {
    // @ts-ignore: runtime
    context.response.body = template(Page.component);
  });
}

const listBuilder = (node: Record<string, any>, key: string, prefix: string) => {
  const { url, name, ...rest } = node;
  const loc = url ? `${prefix}/${url}` : undefined;
  return <>
    <a href={loc}>{name ?? kebabToHumanCase(key)}</a>
    <ul>
      {Object.keys(rest).map(key => listBuilder(rest[key], key, prefix)).map(e => <li>{e}</li>)}
    </ul>
  </>
}

const directory = () => {
  const urls = [];
  const tree: Record<string, any> = {};
  for (const Page of Pages) {
    console.log(`http://localhost:8000/articles/${Page.url}`);
    const url = `/articles/${Page.url}`;
    urls.push(url);
    const node = Page.url.split('/').reduce((acc, key) => {
      acc[key] = acc[key] ?? {};
      return acc[key];
    }, tree);
    node.url = Page.url;
    node.name = kebabToHumanCase(urlLeaf(Page.url));
  }
  return { list: listBuilder(tree, 'root', 'articles'), urls };
}


const { list, urls } = directory();

router.get(
  "/",
  (context) => {
    context.response.body = template(() => (
      <Landing pages={urls} list={list} />
    ));
  }
);

router.get("/about", (context) => {
  context.response.body = template(() => <About />);
});

const enc = new TextEncoder();

router.get("/_build", async (context) => {
  // Compile again
  const { success } = await Deno.run({ cmd: ['node', './scripts/compile.js'] }).status();
  if (!success) {
    context.response.status = 500;
    context.response.body = "error";
    return;
  }

  // recompute lists
  const { list, urls } = directory();
  const raw = template(() => (
    <Landing pages={urls} list={list} />
  ));

  await Deno.writeFile("./index.html", enc.encode(raw));
  urls.unshift(domain);


  const writeHTMLPromises = [];

  const about = template(() => <About />);
  writeHTMLPromises.push(Deno.writeFile('./about.html', enc.encode(about)));

  for (const Page of Pages) {
    // @ts-ignore: runtime
    const article = template(Page.component);
    const paths = Page.url.split('/');
    if (paths.length > 1) {
      await Deno.mkdir(`./articles/${paths.slice(0, paths.length - 1).join('/')}`, { recursive: true });
    }
    const html = `./articles/${Page.url}.html`;
    writeHTMLPromises.push(Deno.writeFile(html, enc.encode(article), { create: true }));
  }

  await Promise.all(writeHTMLPromises);

  // sitemap
  await Deno.writeFile('./sitemap.xml', enc.encode(
    `<?xml version="1.0" encoding="UTF-8"?>
    \r<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    \r${urls.map(url => `<url><loc>${domain}${url}</loc></url>`).join('\n')}
    \r</urlset>
    `
  ));

  context.response.body = "ok";
});

router.get("/(.*)", (context) => {
  context.response.status = 404;
  context.response.body = "404 | Page not Found";
});

app.addEventListener("error", (err) => {
  console.error(err);
  Deno.exit(1);
});

app.use(router.routes());

app.use(router.allowedMethods());

console.log(`server is running on port: ${port}`);

await app.listen({ hostname: 'localhost', port });
