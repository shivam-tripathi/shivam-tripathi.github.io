# React Markdown Blog

A modern, responsive blog built with **React 18**, **Vite**, and **Markdown** with syntax highlighting and math support. Deploy instantly to GitHub Pages.

## ✨ Features

- 🚀 **React 18 + Vite** - Fast development and optimized builds
- 📝 **Markdown Support** - Write posts in clean Markdown syntax
- 🎨 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 💻 **Syntax Highlighting** - Beautiful code blocks with Highlight.js
- 🧮 **Math Support** - Render LaTeX equations with KaTeX
- 🎯 **React Router** - Smooth client-side navigation
- 📦 **Minimal Dependencies** - Fast, lightweight, and easy to maintain
- 🚀 **GitHub Pages Ready** - Deploy in minutes
- 📱 **Mobile Menu** - Smooth hamburger menu for mobile
- ⚡ **Icons** - Lucide React icons included

## 📦 Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Markdown** - Markdown to JSX converter
- **Remark** - Markdown processor with plugins
  - `remark-gfm` - GitHub Flavored Markdown
  - `remark-math` - Math support
- **Rehype** - HTML processor with plugins
  - `rehype-highlight` - Syntax highlighting
  - `rehype-katex` - Render math
- **Highlight.js** - Code syntax highlighting
- **KaTeX** - Math equation renderer
- **Lucide React** - Icon library
- **Mermaid** - Diagram rendering (included, ready to use)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` (Vite will open automatically)

### 3. Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## 📝 Writing Blog Posts

### Add a New Blog Post

1. **Edit `/src/data/blogs.js`**

```javascript
export const blogPosts = [
  // ... existing posts
  {
    id: 'my-new-post',
    title: 'My New Post Title',
    excerpt: 'Short description for the homepage',
    date: '2025-11-15',
    author: 'Your Name',
    category: 'Category Name',
    image: '📝', // Emoji or icon
    content: `# My New Post

Your markdown content here...

## Sections

More content with **bold**, *italic*, and \`code\`.

### Code Example

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Math

Inline: $x = y + z$

Display:
$$E = mc^2$$
`
  }
]
```

### Markdown Features You Can Use

#### Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
`inline code`
```

#### Code Blocks
```markdown
\`\`\`javascript
const name = "value";
\`\`\`
```

Supports: javascript, python, html, css, json, bash, sql, and more!

#### Lists
```markdown
- Bullet point 1
- Bullet point 2
  - Nested item

1. Numbered item
2. Another item
```

#### Quotes
```markdown
> This is a blockquote
>
> Can span multiple lines
```

#### Tables
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

#### Math
```markdown
Inline: $x = y + z$

Display:
$$E = mc^2$$
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$
```

#### Links and Images
```markdown
[Link text](https://example.com)

![Alt text](https://example.com/image.jpg)
```

## 🎨 Customization

### Change Colors

Edit `/src/index.css` at the top:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... other colors */
}
```

Popular color schemes:
- **Blue**: `#3B82F6` and `#1F2937`
- **Red**: `#EF4444` and `#991B1B`
- **Green**: `#10B981` and `#047857`
- **Orange**: `#F97316` and `#EA580C`

### Update Site Info

1. **Blog Title** - Edit `src/App.jsx` and Navbar component
2. **About Section** - Edit `src/pages/Home.jsx`
3. **Social Links** - Edit `src/pages/Home.jsx` and `src/pages/About.jsx`
4. **About Page** - Customize `src/pages/About.jsx`

### Add New Pages

Create a new file in `src/pages/`:

```jsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page Title</h1>
      {/* Your content */}
    </div>
  )
}
```

Then add a route in `src/App.jsx`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

## 🚀 Deployment

### Deploy to GitHub Pages

#### Step 1: Update `package.json`

Update the `homepage` field with your GitHub Pages URL:

```json
{
  "homepage": "https://shivam-tripathi.github.io"
}
```

Or if using a project repository:

```json
{
  "homepage": "https://shivam-tripathi.github.io/repo-name"
}
```

And update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/', // or '/repo-name/' if using a project repo
  // ... rest of config
})
```

#### Step 2: Build Your Blog

```bash
npm run build
```

#### Step 3: Deploy

**Option A: Using gh-pages**

```bash
npm run deploy
```

This automatically builds and deploys to GitHub Pages.

**Option B: Manual Upload**

1. Build: `npm run build`
2. Upload `dist/` folder contents to GitHub Pages

**Option C: GitHub Actions**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Import your GitHub repository
2. Vercel auto-detects Vite setup
3. Click Deploy!

## 📁 Project Structure

```
blogv3/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── MarkdownRenderer.jsx
│   │   └── MarkdownRenderer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── BlogPost.jsx
│   │   ├── BlogPost.css
│   │   ├── About.jsx
│   │   └── About.css
│   ├── data/
│   │   └── blogs.js          # ← Add your blog posts here
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Build and deploy to GitHub Pages
```

## 🎨 Color Customization Guide

### Primary Color (Accent)
Used for: buttons, links, highlights, gradients

### Secondary Color (Accent Variant)
Used in: gradients, hover states, backgrounds

### Edit in `/src/index.css`:

```css
:root {
  --primary-color: #667eea;      /* Main accent color */
  --secondary-color: #764ba2;    /* Secondary accent */
  --text-dark: #2d3748;          /* Main text color */
  --text-light: #718096;         /* Secondary text color */
  --bg-light: #f7fafc;           /* Light background */
  --bg-white: #ffffff;           /* Card/section background */
}
```

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Good color contrast (WCAG AA)
- ✅ Keyboard navigation support
- ✅ Touch-friendly buttons (44px+)
- ✅ Mobile-responsive design

## ⚡ Performance

- ✅ Fast Vite dev server (~100ms)
- ✅ Optimized production builds
- ✅ Code splitting for routes
- ✅ Lazy loading support
- ✅ Minimal dependencies
- ✅ Syntax highlighting built-in
- ✅ Math rendering with KaTeX

## 🐛 Troubleshooting

### Posts not showing?
- Check blog posts are in `src/data/blogs.js`
- Verify the `id` field is unique
- Check console for any errors

### Styles not loading?
- Clear browser cache
- Restart dev server
- Check CSS file is imported

### Math not rendering?
- Ensure KaTeX CSS is imported in `MarkdownRenderer.jsx`
- Use correct LaTeX syntax
- Check for syntax errors in math

### Deployment issues?
- Verify `homepage` in `package.json`
- Check `base` in `vite.config.js` matches
- Ensure GitHub Pages is enabled in settings
- Wait 1-2 minutes for deployment to complete

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Markdown Guide](https://www.markdownguide.org/)
- [KaTeX Documentation](https://katex.org)
- [Highlight.js Languages](https://highlightjs.org/static/demo/)

## 🤝 Contributing

Have ideas for improvements? Feel free to:
1. Fork the project
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available for personal and commercial use.

## 🎉 Getting Started Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] View blog at `http://localhost:3000`
- [ ] Add your first blog post to `src/data/blogs.js`
- [ ] Customize colors and branding
- [ ] Update social media links
- [ ] Build with `npm run build`
- [ ] Deploy to GitHub Pages

---

**Happy blogging with React! 🚀📝**

For questions or issues, check the troubleshooting section or consult the official documentation for React, Vite, or React Router.
