function PagePlaceholder({ title, description, Icon, children }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        {Icon && (
          <span className="page-heading__icon" aria-hidden="true">
            <Icon size={22} />
          </span>
        )}
        <div>
          <p className="eyebrow">Student portfolio builder</p>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
        </div>
      </div>
      {children || (
        <div className="placeholder-card">
          <p>This page is ready for its content and interactions.</p>
        </div>
      )}
    </section>
  )
}

export default PagePlaceholder
