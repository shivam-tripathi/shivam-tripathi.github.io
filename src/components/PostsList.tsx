import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'
import { blogPosts } from '../data/blogs'
import './PostsList.scss'

const PostsList: FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="posts-list">
      {blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`} className="post-item">
          <h3 className="post-title">{post.title}</h3>
          <span className="post-date">
            <Calendar size={16} />
            {formatDate(post.date)}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default PostsList

