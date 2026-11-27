import { Link } from 'react-router-dom'

function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  to,
  type = 'button',
  ...props
}) {
  const buttonClassName = `ui-button ui-button--${variant} ui-button--${size} ${className}`.trim()
  const content = (
    <>
      {startIcon && (
        <span className="ui-button__icon" aria-hidden="true">
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className="ui-button__icon" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link className={buttonClassName} to={to} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonClassName} type={type} {...props}>
      {content}
    </button>
  )
}

export default Button
