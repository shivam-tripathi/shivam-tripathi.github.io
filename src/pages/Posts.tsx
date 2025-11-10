import { FC } from 'react'
import PostsList from '../components/PostsList'
import './Posts.scss'

const Posts: FC = () => {
  return (
    <div className="posts-page">
      <div className="posts-container">
        <h1>Blog Posts</h1>
        <p className="posts-subtitle">Thoughts, insights, and explorations</p>
        <PostsList />
      </div>
    </div>
  )
}

export default Posts

