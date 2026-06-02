import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { services } from '../data/services'

export default function Hizmetler() {
  return (
    <>
      {/* Sayfa Başlığı */}
      <div className="page-hero">
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">Hizmetler</h1>
          <p className="page-hero__sub">
            Konut ve işyerlerinde sunduğumuz profesyonel tadilat ve dekorasyon hizmetleri.
          </p>
        </div>
      </div>

      {/* Hizmet Detayları */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-detail ${index % 2 !== 0 ? 'service-detail--reverse' : ''}`}
            >
              <div className="service-detail__image">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                />
              </div>
              <div className="service-detail__content">
                <div className="service-detail__number">
                  Hizmet {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="service-detail__title">{service.title}</h2>
                <p className="service-detail__desc">{service.description}</p>
                <ul className="service-detail__bullets">
                  {service.bullets.map((bullet, bi) => (
                    <li className="service-detail__bullet" key={bi}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__title">Hizmet Almak İster Misiniz?</h2>
          <p className="cta-banner__sub">
            Ücretsiz keşif ve fiyat teklifi için bizi arayın veya mesaj gönderin.
          </p>
          <Link to="/iletisim" className="btn btn-outline">
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </>
  )
}
