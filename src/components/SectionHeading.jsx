function SectionHeading({ eyebrow, title, description, align = 'left', theme = 'light' }) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${theme}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}

export default SectionHeading
