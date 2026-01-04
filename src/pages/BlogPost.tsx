import { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import { blogPosts } from '../data/blogs'
import { NoteProvider, useNote } from '../context/NoteContext'
import NoteSidebar from '../components/NoteSidebar'
import './BlogPost.scss'

const BlogPostContent: FC<{ post: any }> = ({ post }) => {
  const { isOpen } = useNote()

  // Get the base URL from the config or use a default
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://shivam-tripathi.github.io'
  const pageUrl = `${baseUrl}/post/${post.id}`
  const coverImageUrl = post.coverImage ? `${baseUrl}${post.coverImage}` : `${baseUrl}/banyan.webp`

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{post.title} | Kalpavriksha</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={coverImageUrl} />
        <meta property="og:site_name" content="Kalpavriksha" />
        <meta property="article:published_time" content={post.date} />
        {post.tags.map((tag: string) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={coverImageUrl} />
      </Helmet>

      <article className={`blog-post ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="blog-post-container">
          <MarkdownRenderer post={post} />
        </div>
        <NoteSidebar />
      </article>
    </>
  )
}

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
    <NoteProvider>
      <BlogPostContent post={post} />
    </NoteProvider>
  )
}

export default BlogPost
