import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/atom-one-dark.css'
import 'katex/dist/katex.min.css'

interface BlogPost {
  content: string
  [key: string]: unknown
}

interface MarkdownRendererProps {
  post?: BlogPost
}

const MarkdownRenderer: FC<MarkdownRendererProps> = ({ post = { content: '' } }) => {
  const { content } = post

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer

