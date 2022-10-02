import { reset } from "https://deno.land/std@0.118.0/fmt/colors.ts";
import { Application, Router, send } from "oak";
import React from "react";
import * as ReactDOMServer from "reactDOMServer";
import App from "./app.tsx";
import Landing from "./landing.tsx";
import pages from "./pages.tsx";
import Pages from "./pages.tsx";

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

router.get("/assets/:path+", async (ctx) => {
  await send(ctx, ctx.params.path || "", {
    root: `${cwd}/assets`,
  });
});

const urls: string[] = [];
const tree: Record<string, any> = {};

for (const Page of Pages) {
  console.log(`http://localhost:8000/articles/${Page.url}`);
  const url = `/articles/${Page.url}`;
  router.get(url, (context) => {
    // @ts-ignore: runtime
    context.response.body = template(Page.component);
  });
  urls.push(url);
  const node = Page.url.split('/').reduce((acc, key) => {
    acc[key] = acc[key] ?? {};
    return acc[key];
  }, tree);
  node.url = Page.url;
  node.name = Page.url.split('/').slice(-1)[0].split('-').map(e => `${e[0].toUpperCase()}${e.slice(1)}`).join(' ');
}

const listBuilder = (node: Record<string, any>, key: string, prefix: string) => {
  const { url, name, ...rest } = node;
  const loc = url ? `${prefix}/${url}` : undefined;
  return <>
    <a href={loc}>{name ?? key}</a>
    <ul>
      {Object.keys(rest).map(key => listBuilder(rest[key], key, prefix)).map(e => <li>{e}</li>)}
    </ul>
  </>
}

const list = listBuilder(tree, 'root', 'articles');

router.get(
  "/",
  (context) => {
    context.response.body = template(() => (
      <Landing pages={urls} list={list} />
    ));
  }
);

const enc = new TextEncoder();

router.get("/_build", async (context) => {
  const raw = template(() => (
    <Landing pages={urls} />
  ));
  const { success } = await Deno.run({ cmd: ['node', './scripts/compile.js'] }).status();
  if (!success) {
    context.response.status = 500;
    context.response.body = "error";
    return;
  }
  await Deno.writeFile("./index.html", enc.encode(raw));
  const articles = [];
  for (const Page of Pages) {
    // @ts-ignore: runtime
    const article = template(Page.component);
    const paths = Page.url.split('/');
    if (paths.length > 1) {
      await Deno.mkdir(`./articles/${paths.slice(0, paths.length-1).join('/')}`, { recursive: true });
    }
    const html = `./articles/${Page.url}.html`;
    articles.push(Deno.writeFile(html, enc.encode(article), { create: true }));
  }
  await Promise.allSettled(articles).then(console.log);
  await Deno.writeFile('./sitemap.xml', enc.encode(urls.join('\n')));
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
