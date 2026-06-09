import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/services'
import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'

export default function Hizmetler() {
  usePageMeta(
    'İzmir Tadilat Hizmetleri | Fayans, Çatı, Boya, Alçı, Banyo – Poyraz Dekorasyon',
    'İzmir\'de tadilat hizmetleri: çatı tamiratı, fayans döşeme, boya badana, alçı sıva, mutfak tadilatı, banyo yapımı, su tesisatı, demir doğrama, asma tavan. Bornova ve tüm İzmir\'e hizmet.'
  )
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 80)
      }
    }
  }, [hash])

  return (
    <>
      <PageHero
        title="Hizmetler"
        sub="Konut ve işyerlerinde sunduğumuz profesyonel tadilat ve dekorasyon hizmetleri."
        illustration="services"
      />

      {/* Hizmet Detayları */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`service-detail ${index % 2 !== 0 ? 'service-detail--reverse' : ''}`}
            >
              <div className="service-detail__image">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  style={{ objectPosition: service.imagePosition || 'center' }}
                />
              </div>
              <div className="service-detail__content">
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
