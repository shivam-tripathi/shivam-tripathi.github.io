const markdownItMermaid = require('markdown-it-mermaid').default;

module.exports = {
  title: 'Home',
  description: 'My personal musings',
  head: [ [ 'link', { rel: 'icon', href: '/fav.png' } ] ],
  ga: 'UA-36183732-4',
  lastUpdated: 'Last Updated',
  themeConfig: {
    repo: 'shivam-tripathi/shivam-tripathi.github.io',
    editLinks: false,
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Software Engineering',
        path: '/se/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: 'Tools',
            path: '/se/tools/',
            sidebarDepth: 0,
            children: [
              { title: 'Adminer', path: '/se/tools/adminer' },
              { title: 'Apache Php Mac', path: '/se/tools/apachePhpMac' },
              { title: 'RCS and Git', path: '/se/tools/git' },
              { title: 'SchemaSpy', path: '/se/tools/schemaSpy' },
            ]
          },
        ],
      },
      {
        title: 'Nature',
        path: '/nature/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          {
            title: 'Environmental Science',
            path: '/nature/evs/',
            sidebarDepth: 0,
            children: [
              { title: 'Basics', path: '/nature/evs/basics' },
            ]
          },
        ],
      },
    ],
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    extendMarkdown: (md) => {
      md.use(markdownItMermaid)
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search', {
        searchMaxSuggestions: 7
      },
    ],
    [
      '@vuepress/register-components', {
        componentsDir: '.vuepress/components',
      }
    ]
  ]
}
