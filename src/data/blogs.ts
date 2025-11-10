import { importMDXArticle } from '../utils/mdxLoader'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'data-pipelines-and-backpressure',
    title: 'Data Pipelines and Backpressure',
    excerpt: 'A deep dive into handling backpressure in data pipelines and distributed systems.',
    date: '2018-11-30',
    tags: ['Engineering', 'Systems Design', 'Distributed Systems'],
    content: await importMDXArticle('data-pipelines-and-backpressure')
  },
  {
    id: 'growth-framework',
    title: 'Growth Framework',
    excerpt: 'A visual framework for understanding growth strategies.',
    date: '2023-01-15',
    tags: ['Product', 'Strategy', 'Growth'],
    content: await importMDXArticle('growth-framework')
  },
  // {
  //   id: 'markdown-guide',
  //   title: 'Markdown Formatting Guide',
  //   excerpt: 'Master Markdown syntax for writing expressive blog posts.',
  //   date: '2025-11-09',
  //   author: 'Shivam Tripathi',
  //   tags: ['Documentation', 'Markdown', 'Tutorial'],
  //   image: '📚',
  //   content: await importMDXArticle('markdown-guide')
  // }
]

