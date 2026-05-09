import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardMedia from '../ui/Card/CardMedia'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'

/**
 * About Me card component for displaying information about the author.
 */
function AboutCard({ title, subtitle, image, imageAlt, paragraphs = [], links = [] }) {
  return (
    <Card className="about-card">
      {image ? <CardMedia src={image} alt={imageAlt ?? title} imageClassName="about-image" /> : null}
      <CardHeader title={title} subtitle={subtitle} />
      {paragraphs.length > 0 ? <CardBody>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </CardBody> : null}
      {links.length > 0 ? (
        <CardFooter>
          <ul className="card-link-list">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">{link.name}</a>
              </li>
            ))}
          </ul>
        </CardFooter>
      ) : null}
    </Card>
  )
}

export default AboutCard
