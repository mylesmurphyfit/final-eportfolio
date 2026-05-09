import { useLayoutEffect, useState } from 'react'
import Nav from './Nav'

/**
 * Header component for displaying the header of the page.
 */
function Header({ pageTitle }) {
  // State for tracking whether the dark mode is enabled
  // Uses localStorage to persist the dark mode state
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('portfolio-theme') === 'dark' ? true : false)

  useLayoutEffect(() => {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Set the dark mode state in localStorage
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode])

  return (
    <header>
      <section>
        <div className="site-header-row">
          <h1>Myles Murphy Portfolio</h1>
          <button
            id="theme-toggle"
            type="button"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <svg className="theme-icon theme-icon-moon" aria-hidden="true" viewBox="0 0 576 640">
              <defs>
                <linearGradient id="theme-gradient-moon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6d8f57"></stop>
                  <stop offset="100%" stopColor="#e2b977"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#theme-gradient-moon)" d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z"></path>
            </svg>
            <svg className="theme-icon theme-icon-sun" aria-hidden="true" viewBox="0 0 512 512">
              <defs>
                <linearGradient id="theme-gradient-sun" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6d8f57"></stop>
                  <stop offset="100%" stopColor="#e2b977"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#theme-gradient-sun)" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"></path>
            </svg>
          </button>
        </div>
        <nav className="main-nav">
          <Nav />
        </nav>
      </section>

      <section>
        <h2 className="page-title">{pageTitle}</h2>
      </section>
    </header>
  )
}

export default Header
