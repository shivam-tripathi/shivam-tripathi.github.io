import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Posts from './pages/Posts'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import useScrollToTop from './hooks/useScrollToTop'
import './App.css'

function AppContent() {
  // Scroll to top when route changes
  useScrollToTop()

  return (
    <div className="app">
      <div className="app-main">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

