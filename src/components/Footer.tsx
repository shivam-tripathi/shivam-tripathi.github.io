import { FC } from 'react'
import './Footer.scss'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Shivam Tripathi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

