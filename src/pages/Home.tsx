import { FC } from 'react'
import PostsList from '../components/PostsList'
import './Home.scss'

const Home: FC = () => {
  return (
    <div className="landing">
      <h1 className="devnagari-font">Kalpavriksha</h1>
      <h2>Musings on Life, Universe, and Everything</h2>
      <img src="/banyan.webp" className="hero-img" alt="Banyan Tree" />

      {/* Content Tree / Posts Section */}
      <div className="content-tree">
        <PostsList />
      </div>
    </div>
  )
}

export default Home

