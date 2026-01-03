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
  {
    id: 'good-engineering-management-is-a-fad',
    title: 'Notes on "Good Engineering Management is a Fad" (via Will Larson)',
    excerpt: 'Notes on "Good Engineering Management is a Fad" (via Will Larson)',
    date: '2025-11-27',
    tags: ['Engineering', 'Management', 'Economics'],
    content: await importMDXArticle('good-engineering-management-is-a-fad')
  },
  {
    id: 'llm-caching',
    title: 'Notes on LLM Caching (Nov 2025)',
    excerpt: 'A deep dive into the different caching strategies for LLMs.',
    date: '2025-11-27',
    tags: ['LLM', 'Caching', 'Strategies'],
    content: await importMDXArticle('llm-caching')
  },
  {
    id: 'precision-in-frontier-llm',
    title: 'Notes on Precision in Frontier Language Models (Dec 2025)',
    excerpt: 'A deep dive into the precision choices in frontier language models.',
    date: '2025-12-31',
    tags: ['LLM', 'Precision', 'Hardware'],
    content: await importMDXArticle('precision-in-frontier-llm')
  }
]
