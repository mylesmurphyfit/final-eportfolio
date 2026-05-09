import Nav from './Nav'

/**
 * Footer component for displaying the footer of the page.
 */
function Footer() {
  return (
    <footer>
      <section>
        <nav className="footer-nav">
          <Nav />
        </nav>
        <ul className="footer-links">
          <li><a href="https://github.com/mylesmmurphy">GitHub</a></li>
          <li><a href="https://linkedin.com/in/mylesmorganmurphy">LinkedIn</a></li>
        </ul>
        <p className="copyright">© 2026 Myles Murphy</p>
      </section>
    </footer>
  )
}

export default Footer
