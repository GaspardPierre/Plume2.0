import { useEffect, useState } from 'react'
import './ScrollTop.scss'


const ScrollTop = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleWindowScroll = () => {
          if (window.scrollY > 50) setShow(true)
          else setShow(false)
        }
        window.addEventListener('scroll', handleWindowScroll)
        return () => window.removeEventListener('scroll', handleWindowScroll)
      }, [])
      const handleScrollTop = () => {
        window.scrollTo({ top: 0 })
      }
      return (
        <div
  className="fixed bottom-8 right-8 d-none flex-column gy-3 d-md-flex"
  style={{ bottom: '2rem', right: '2rem', position: 'fixed' }}
>
<button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="rounded-circle p-2 your-custom-class"
  style={{ 
    backgroundColor: '#e5e7eb', 
    color: '#6b7280', 
    transition: 'all 0.2s' 
  }}
      >
        <svg   style={{ height: '1.25rem', width: '1.25rem' }}viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
      )
    }
    
    export default ScrollTop