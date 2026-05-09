/**
 * Button component for displaying a button.
 * Passes through the type, onClick, children, className, and rest props.
 */
function Button({ type = 'button', onClick, children, className = '', ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`ui-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
