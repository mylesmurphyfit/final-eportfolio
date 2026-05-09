import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardBody from '../ui/Card/CardBody'

/**
 * Resume card component for displaying information about a resume.
 */
function ResumeCard({ title, subtitle, meta, bullets = [] }) {
  return (
    <Card className="resume-card">
      <CardHeader title={title} subtitle={subtitle} meta={meta} />
      <CardBody>
        {bullets.length > 0 ? (
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </CardBody>
    </Card>
  )
}

export default ResumeCard
