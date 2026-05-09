/**
 * Card media component for displaying the media of a card.
 * Includes the src, alt, caption, and imageClassName.
 */
function CardMedia({ src, alt, caption, imageClassName = '' }) {
  return (
    <figure className="card-media">
      <img src={src} alt={alt} className={imageClassName} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export default CardMedia
