import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { remarkNotePlugin } from '../utils/remarkNotePlugin'
import NoteTrigger from './NoteTrigger'
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
        remarkPlugins={[remarkGfm, remarkMath, remarkDirective, remarkNotePlugin]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
        components={{
          span: ({ node, ...props }) => {
            if (props.className?.includes('note-trigger')) {
              return <NoteTrigger {...props} />
            }
            return <span {...props} />
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
