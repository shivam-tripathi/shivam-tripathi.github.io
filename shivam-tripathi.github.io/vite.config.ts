import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx({
    remarkPlugins: [remarkGfm],
    // @ts-ignore
    rehypePlugins: [rehypeHighlight],
  }), react()],
  build: {
    outDir: '..',
    copyPublicDir: true,
  }
});
