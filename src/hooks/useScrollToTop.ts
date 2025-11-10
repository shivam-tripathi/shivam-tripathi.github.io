import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook that scrolls to the top of the page when the route changes
 * Fixes the issue where scroll position is retained from the previous page
 */
export default function useScrollToTop(): void {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

