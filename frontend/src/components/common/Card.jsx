function Card({ as: Element = 'section', className = '', children, ...props }) {
  return (
    <Element className={`ui-card ${className}`.trim()} {...props}>
      {children}
    </Element>
  )
}

export default Card
