const markdownItMermaid = require('markdown-it-mermaid').default;

module.exports = {
  title: 'संक्षिप्त',
  description: 'Musings',
  head: [ [ 'link', { rel: 'icon', href: '/fav.png' } ] ],
  ga: 'UA-36183732-4',
  lastUpdated: 'Last Updated',
  themeConfig: {
    repo: 'shivam-tripathi/shivam-tripathi.github.io',
    repoLabel: 'Contribute!',
    editLinks: true,
    editLinkText: 'Fork!',
    displayAllHeaders: true,
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'Notes',
        link: '/notes/',
      },
      {
        text: 'About',
        link: '/about/',
      }
    ]
  },
  footer: {
    contact: [
      {
        type: "github",
        link: "https://github.com/shivam-tripathi/"
      },
    ]
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    extendMarkdown: (md) => {
      md.use(markdownItMermaid)
    }
  },
  theme: '@vuepress/blog',
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
    ],
    [
      '@vuepress/plugin-blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              lengthPerPage: 20,
            },
          },
          {
            id: 'evs',
            dirname: '_posts/evs',
            path: '/evs/',
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ['tags'],
            path: '/tag/',
          },
          {
            id: "notes",
            keys: ['notes'],
            path: '/notes/',
          }
        ],

        comment: {
          service: 'disqus',
          shortname: 'vuepress-plugin-blog',
        },
      }
    ]
  ]
}
