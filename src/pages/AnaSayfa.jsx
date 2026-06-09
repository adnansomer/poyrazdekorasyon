import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services, whyUs } from '../data/services'
import usePageMeta from '../hooks/usePageMeta'

const WhyIcons = {
  quality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  price: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  clean: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  customer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
}

export default function AnaSayfa() {
  usePageMeta(
    'Poyraz Dekorasyon | İzmir Tadilat, İnşaat ve Dekorasyon Hizmetleri',
    'İzmir ve çevresinde tadilat, inşaat, dekorasyon hizmetleri. Bornova merkezli Poyraz Dekorasyon — fayans, çatı tamiratı, boya badana, alçı, mutfak-banyo tadilatı, su tesisatı, demir doğrama. Ücretsiz keşif: 0545 209 65 57'
  )
  return (
    <>
      <Hero />

      {/* Hizmetler Önizleme */}
      <section id="hizmetler-preview" className="section section--gray">
        <div className="container">
          <SectionTitle
            eyebrow="Neler Yapıyoruz"
            heading="Hizmetlerimiz"
            sub="Konutunuzdan işyerinize kadar tüm tadilat ve dekorasyon ihtiyaçlarınızda yanınızdayız."
          />
          {/* Ücretsiz Keşif — Öne Çıkan Kart */}
          <div className="featured-service">
            <div className="featured-service__image">
              <img
                src="https://images.unsplash.com/photo-1511822148790-e7b58ba14c72?w=900&q=85"
                alt="Ev içi duvar boyayan profesyonel ustalar"
                loading="eager"
              />
            </div>
            <div className="featured-service__body">
              <span className="featured-service__badge">Ücretsiz</span>
              <h3 className="featured-service__title">Ücretsiz Keşif Hizmeti</h3>
              <p className="featured-service__desc">
                Projenizin detaylarını yerinde değerlendirmek için uzman ekibimizi ücretsiz olarak davet edin.
                Türkiye'nin her yerine keşif yapabilir, ihtiyaçlarınıza özel fiyat teklifi sunabiliriz.
              </p>
              <ul className="featured-service__list">
                <li>Yerinde ücretsiz teknik inceleme</li>
                <li>Türkiye genelinde hizmet</li>
                <li>Aynı gün fiyat teklifi</li>
              </ul>
              <Link to="/iletisim" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Keşif Talep Et →
              </Link>
            </div>
          </div>

          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/hizmetler" className="btn btn-navy">
              Tüm Hizmetleri Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Neden Biz"
            heading="Neden Poyraz Dekorasyon?"
            sub="Müşterilerimizin bize güvenmesinin altı temel nedeni."
          />
          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <div className="why-us-card" key={i}>
                <div className="why-us-card__icon-wrap">
                  {WhyIcons[item.iconKey]}
                </div>
                <h3 className="why-us-card__title">{item.title}</h3>
                <p className="why-us-card__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__title">Projenizi Konuşalım</h2>
          <p className="cta-banner__sub">
            Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin.
          </p>
          <Link to="/iletisim" className="btn btn-outline">
            Bize Ulaşın
          </Link>
        </div>
      </div>
    </>
  )
}
