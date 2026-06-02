export default function SectionTitle({ eyebrow, heading, sub, align = 'center' }) {
  return (
    <div className={`section-title ${align === 'left' ? 'section-title--left' : ''}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{heading}</h2>
      <div className="section-title__line" />
      {sub && <p className="section-title__sub">{sub}</p>}
    </div>
  )
}
