import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine the base URL based on deployment target
// For GitHub Pages personal site: https://username.github.io
// For GitHub Pages project: https://username.github.io/repo-name
// Update the homepage in package.json accordingly
const base = process.env.VITE_BASE_URL || '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    target: ['es2022'],
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown-vendor': ['react-markdown', 'remark-gfm', 'remark-math'],
          'highlight-vendor': ['rehype-highlight', 'rehype-katex']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  // Support for importing raw text files
  assetsInclude: ['**/*.mdx', '**/*.md']
})

