import { useState } from 'react'
import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardMedia from '../ui/Card/CardMedia'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'
import Button from '../ui/Button'
import Tag from '../ui/Tag'

/**
 * Project card component for displaying information about a project.
 */
function ProjectCard({ project }) {
  // State for tracking whether the project description is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false)

  // Get the project image, alt text, description, tools, link URL, and link label
  const image = project.image ?? project.imageSrc
  const imageAlt = project.imageAlt ?? `${project.title} project preview`
  const description = project.desc ?? project.description // Get the project description
  const tools = project.tools ?? [] // Get the project tools
  const linkUrl = project.link?.url ?? project.repositoryUrl // Get the project link URL
  const linkLabel = project.link?.label ?? project.repositoryLabel ?? 'Project repository' // Get the project link label

  // Get the short description of the project for the collapsed state
  const shortDescription =
    description && description.length > 180
      ? `${description.slice(0, 180).trim()}...`
      : description

  return (
    <Card className="project-card">
      {image ? <CardMedia src={image} alt={imageAlt} caption={project.figcaption} /> : null}
      <CardHeader title={project.title} />
      <CardBody>
        <p>{isExpanded ? description : shortDescription}</p>
        {tools.length > 0 ? (
          <div className="card-tags">
            {tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        ) : null}
      </CardBody>
      <CardFooter>
        <div className="card-actions">
          <Button
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </Button>
          {linkUrl ? (
            <a href={linkUrl} target="_blank" rel="noreferrer">
              {linkLabel}
            </a>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
