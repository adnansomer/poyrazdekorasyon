import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-card__image-wrap">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          style={{ objectPosition: service.imagePosition || 'center' }}
        />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.shortTitle}</h3>
        <p className="service-card__desc">
          {service.description.length > 110
            ? service.description.slice(0, 110) + '…'
            : service.description}
        </p>
        <Link to={`/hizmetler#${service.id}`} className="service-card__link">
          Detaylı İncele &rarr;
        </Link>
      </div>
    </div>
  )
}
