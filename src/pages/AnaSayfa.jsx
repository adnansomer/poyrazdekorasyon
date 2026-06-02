import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services, whyUs } from '../data/services'

export default function AnaSayfa() {
  return (
    <>
      <Hero />

      {/* Hizmetler Önizleme */}
      <section className="section section--gray">
        <div className="container">
          <SectionTitle
            eyebrow="Neler Yapıyoruz"
            heading="Hizmetlerimiz"
            sub="Konutunuzdan işyerinize kadar tüm tadilat ve dekorasyon ihtiyaçlarınızda yanınızdayız."
          />
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
            sub="Müşterilerimizin bize güvenmesinin beş temel nedeni."
          />
          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <div className="why-us-card" key={i}>
                <div className="why-us-card__icon">{item.icon}</div>
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
