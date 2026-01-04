import { createContext, useContext, useState, ReactNode } from 'react'

interface NoteContextType {
  activeNote: string | null
  isOpen: boolean
  openNote: (content: string) => void
  closeNote: () => void
}

const NoteContext = createContext<NoteContextType | undefined>(undefined)

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [activeNote, setActiveNote] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openNote = (content: string) => {
    setActiveNote(content)
    setIsOpen(true)
  }

  const closeNote = () => {
    setIsOpen(false)
    setActiveNote(null)
  }

  return (
    <NoteContext.Provider value={{ activeNote, isOpen, openNote, closeNote }}>
      {children}
    </NoteContext.Provider>
  )
}

export const useNote = () => {
  const context = useContext(NoteContext)
  if (context === undefined) {
    throw new Error('useNote must be used within a NoteProvider')
  }
  return context
}

