import { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import { blogPosts } from '../data/blogs'
import './BlogPost.scss'

const BlogPost: FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="blog-post">
      {/* Post Content */}
      <div className="blog-post-container">
        <MarkdownRenderer post={post} />
      </div>
    </article>
  )
}

export default BlogPost

