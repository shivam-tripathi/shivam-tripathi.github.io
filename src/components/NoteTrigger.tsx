import { FC, HTMLAttributes } from 'react'
import { useNote } from '../context/NoteContext'

interface NoteTriggerProps extends HTMLAttributes<HTMLSpanElement> {
  'data-note-content'?: string
}

const NoteTrigger: FC<NoteTriggerProps> = ({ children, className, 'data-note-content': content, ...props }) => {
  const { openNote } = useNote()
  const hasNote = className?.includes('note-trigger') && content

  if (!hasNote) {
    return <span className={className} {...props}>{children}</span>
  }

  return (
    <span
      className={`note-trigger-interactive ${className || ''}`}
      onClick={() => openNote(content!)}
      title="Click to see note"
      {...props}
    >
      {children}
    </span>
  )
}

export default NoteTrigger

