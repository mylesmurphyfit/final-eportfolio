import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import projectsService from './services/projectsService'
import aboutData from './data/about.json';
import skillsData from './data/skills.json';
import resumeData from './data/resume.json';

// Import global styles and card styles
import './styles/globals.css'
import './styles/cards.css'

/**
 * Maps page paths to page titles
 */
const PAGE_TITLES = {
  '/': 'About Me',
  '/about': 'About Me',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/resume': 'Resume',
  '/contact': 'Contact Me',
}

function AppContent() {
  const { pathname } = useLocation() // Get the current pathname, used to determine the current page title
  const pageTitle = PAGE_TITLES[pathname] ?? PAGE_TITLES['/'] // Get the current page title, defaults to the home page title

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Get projects from API
    projectsService.getProjects().then(setProjects)
  }, []);

  return (
    <>
      <Header pageTitle={pageTitle} />
      <main>
        <Routes>
          <Route path="/" element={<Home paragraphs={aboutData.paragraphs} links={aboutData.links} headshot={aboutData.headshot} />} />
          <Route path="/about" element={<About paragraphs={aboutData.paragraphs} links={aboutData.links} headshot={aboutData.headshot} />} />
          <Route path="/skills" element={<Skills skills={skillsData.skills} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/resume" element={<Resume education={resumeData.education} workExperience={resumeData.workExperience} skills={resumeData.skills} extracurricularActivities={resumeData.extracurricularActivities} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

/**
 * Primary application component
 */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
