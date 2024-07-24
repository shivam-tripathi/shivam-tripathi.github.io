import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx({
    remarkPlugins: [remarkGfm, remarkMath],
    // @ts-ignore
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  }), react()],
  build: {
    outDir: '..',
    copyPublicDir: true,
  }
});
