import { importMDXArticle } from '../utils/mdxLoader'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: string
  coverImage?: string // Path to cover image for social media unfurling
}

export const blogPosts: BlogPost[] = [
  {
    id: 'data-pipelines-and-backpressure',
    title: 'Data Pipelines and Backpressure',
    excerpt: 'A hands-on story of discovering backpressure the hard way: when your fast producer overwhelms your slow consumer, and memory leaks teach you about stream control.',
    date: '2018-11-30',
    tags: ['Engineering', 'Systems Design', 'Distributed Systems'],
    content: await importMDXArticle('data-pipelines-and-backpressure')
  },
  {
    id: 'growth-framework',
    title: 'Growth Framework',
    excerpt: 'The RACECAR framework: a systematic approach to user acquisition, activation, retention, and monetization—ensuring no aspect of the user journey is overlooked.',
    date: '2023-01-15',
    tags: ['Product', 'Strategy', 'Growth'],
    content: await importMDXArticle('growth-framework'),
    coverImage: '/images/racecar-growth-framework.jpeg'
  },
  {
    id: 'good-engineering-management-is-a-fad',
    title: 'Notes on "Good Engineering Management is a Fad" (via Will Larson)',
    excerpt: 'Why engineering management styles rotate with economic eras—from technical gatekeepers to servant leaders to efficiency drivers—and which skills actually endure.',
    date: '2025-11-27',
    tags: ['Engineering', 'Management', 'Economics'],
    content: await importMDXArticle('good-engineering-management-is-a-fad')
  },
  {
    id: 'llm-caching',
    title: 'Notes on LLM Caching (Nov 2025)',
    excerpt: 'How OpenAI, Anthropic, and Google implement prompt caching: the mechanisms, guarantees, costs, and pitfalls engineers need to know when building LLM systems.',
    date: '2025-11-27',
    tags: ['LLM', 'Caching', 'Strategies'],
    content: await importMDXArticle('llm-caching')
  },
  {
    id: 'precision-in-frontier-llm',
    title: 'Notes on Precision in Frontier Language Models (Dec 2025)',
    excerpt: 'Modern LLMs are precision systems: why weights live at INT4, activations stay at FP8, and how numerical fidelity is allocated across hardware-aware layers.',
    date: '2025-12-31',
    tags: ['LLM', 'Precision', 'Hardware'],
    content: await importMDXArticle('precision-in-frontier-llm'),
    coverImage: '/images/precision-sensitivity.png'
  }
]
