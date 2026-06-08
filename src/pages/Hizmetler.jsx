import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/services'
import PageHero from '../components/PageHero'

export default function Hizmetler() {
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
      <Helmet>
        <title>Hizmetler | İzmir Bornova Fayans, Boya, Alçı, Çatı, Mutfak, Demir Doğrama Ustası</title>
        <meta name="description" content="Poyraz Dekorasyon İzmir Bornova hizmetleri: fayans ve seramik döşeme, boya badana, alçı sıva, tavan, çatı tamiratı, mutfak tadilatı, demir doğrama, su tesisatı, banyo yapımı." />
        <link rel="canonical" href="https://www.poyrazdekorasyon.net/hizmetler" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.poyrazdekorasyon.net/" },
            { "@type": "ListItem", "position": 2, "name": "Hizmetler", "item": "https://www.poyrazdekorasyon.net/hizmetler" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "İzmir Bornova Tadilat ve Dekorasyon Hizmetleri",
          "description": "Poyraz Dekorasyon'un İzmir Bornova'da sunduğu tüm tadilat ve dekorasyon hizmetleri.",
          "url": "https://www.poyrazdekorasyon.net/hizmetler",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Fayans ve Seramik Döşeme", "url": "https://www.poyrazdekorasyon.net/hizmetler#fayans" },
            { "@type": "ListItem", "position": 2, "name": "Çatı Tamiratı ve İzolasyonu", "url": "https://www.poyrazdekorasyon.net/hizmetler#cati" },
            { "@type": "ListItem", "position": 3, "name": "Demir Doğrama", "url": "https://www.poyrazdekorasyon.net/hizmetler#demir" },
            { "@type": "ListItem", "position": 4, "name": "Mutfak Tadilatı", "url": "https://www.poyrazdekorasyon.net/hizmetler#mutfak" },
            { "@type": "ListItem", "position": 5, "name": "Ev ve İşyeri Tadilatı", "url": "https://www.poyrazdekorasyon.net/hizmetler#tadilat" },
            { "@type": "ListItem", "position": 6, "name": "Boya ve Badana", "url": "https://www.poyrazdekorasyon.net/hizmetler#boya" },
            { "@type": "ListItem", "position": 7, "name": "Alçı, Sıva ve Tavan İşleri", "url": "https://www.poyrazdekorasyon.net/hizmetler#alci" },
            { "@type": "ListItem", "position": 8, "name": "Asma Tavan ve Tavan Dekorasyon", "url": "https://www.poyrazdekorasyon.net/hizmetler#asma-tavan" },
            { "@type": "ListItem", "position": 9, "name": "Su Tesisatı", "url": "https://www.poyrazdekorasyon.net/hizmetler#su-tesisati" },
            { "@type": "ListItem", "position": 10, "name": "Banyo ve Tuvalet Yapımı", "url": "https://www.poyrazdekorasyon.net/hizmetler#banyo" }
          ]
        })}</script>
      </Helmet>

      <PageHero
        title="İzmir'de Tadilat ve Dekorasyon Hizmetleri"
        sub="Bornova ve tüm İzmir genelinde fayans, boya, alçı, çatı, mutfak, demir doğrama ve daha fazlası."
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
