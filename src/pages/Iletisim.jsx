import { Helmet } from 'react-helmet-async'
import MapSection from '../components/MapSection'
import PageHero from '../components/PageHero'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const contactItems = [
  {
    Icon: PhoneIcon,
    label: 'Telefon 1',
    value: '+90 545 209 65 57',
    href: 'tel:+905452096557',
  },
  {
    Icon: PhoneIcon,
    label: 'Telefon 2',
    value: '+90 506 178 31 49',
    href: 'tel:+905061783149',
  },
  {
    Icon: PinIcon,
    label: 'Adres',
    value: 'Mevlana Mahallesi 1776/14 No:11\nBornova / İzmir',
    href: null,
  },
  {
    Icon: ClockIcon,
    label: 'Çalışma Saatleri',
    value: 'Pazartesi – Cumartesi\n09:00 – 19:00',
    href: null,
  },
]

export default function Iletisim() {
  return (
    <>
      <Helmet>
        <title>İletişim | Poyraz Dekorasyon – İzmir Bornova Tadilat Teklif Al</title>
        <meta name="description" content="Poyraz Dekorasyon ile iletişime geçin. İzmir Bornova Mevlana Mahallesi 1776/14 No:11. Tel: 0545 209 65 57 – 0506 178 31 49. Ücretsiz keşif ve fiyat teklifi için hemen arayın." />
        <link rel="canonical" href="https://www.poyrazdekorasyon.net/iletisim" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.poyrazdekorasyon.net/" },
            { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://www.poyrazdekorasyon.net/iletisim" }
          ]
        })}</script>
      </Helmet>

      <PageHero
        title="İletişim"
        sub="İzmir Bornova'da ücretsiz keşif ve fiyat teklifi için hemen arayın."
        illustration="contact"
      />

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <div className="contact-info-card" key={i}>
                <div className="contact-info-card__icon">
                  <Icon />
                </div>
                <div className="contact-info-card__label">{label}</div>
                <div className="contact-info-card__value">
                  {href ? (
                    <a href={href}>{value}</a>
                  ) : (
                    <span style={{ whiteSpace: 'pre-line' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <MapSection />
        </div>
      </section>
    </>
  )
}
