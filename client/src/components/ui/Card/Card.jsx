/**
 * Card component for displaying a basic card.
 */
function Card({ children, className = '' }) {
  return <article className={`card ${className}`.trim()}>{children}</article>
}

export default Card
