/**
 * Card header component for displaying the header of a card.
 * Includes the title, subtitle, meta, and children.
 */
function CardHeader({ title, subtitle, meta, children }) {
  return (
    <header className="card-header">
      {title ? <h3 className="card-title">{title}</h3> : null}
      {subtitle ? <p className="card-subtitle">{subtitle}</p> : null}
      {meta ? <p className="card-meta">{meta}</p> : null}
      {children}
    </header>
  )
}

export default CardHeader
