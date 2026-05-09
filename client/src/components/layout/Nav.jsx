import { NavLink, useLocation } from 'react-router'

/**
 * Navigation component for displaying the navigation of the page.
 */
function Nav() {
  const { pathname } = useLocation() // Get the current pathname

  // Return the navigation list
  // Uses NavLink to navigate to the corresponding page
  // Uses the active class to highlight the current page
  // Uses the pathname to determine the current page
  return (
    <ul>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive || pathname === '/' ? 'active' : undefined
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Resume
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
