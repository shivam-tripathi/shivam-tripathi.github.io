import { FC, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { useNote } from '../context/NoteContext'
import './NoteSidebar.scss'

const NoteSidebar: FC = () => {
  const { activeNote, isOpen, closeNote } = useNote()
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNote()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [closeNote])

  return (
    <>
      {isOpen && <div className="note-overlay" onClick={closeNote} />}
      <aside className={`note-sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className="note-header">
          <h3>Note</h3>
          <button onClick={closeNote} className="close-button" aria-label="Close note">
            <X size={20} />
          </button>
        </div>
        <div className="note-content">
          <ReactMarkdown>{activeNote || ''}</ReactMarkdown>
        </div>
      </aside>
    </>
  )
}

export default NoteSidebar

