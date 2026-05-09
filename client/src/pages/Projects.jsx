import ProjectCard from '../components/cards/ProjectCard'

function ProjectsPage({ projects = [] }) {
  return (
    <section className="cards-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  )
}

export default ProjectsPage
