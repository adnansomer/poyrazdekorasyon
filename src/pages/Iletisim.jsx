import MapSection from '../components/MapSection'

const contactItems = [
  {
    icon: '📞',
    label: 'Telefon',
    value: '05XX XXX XX XX',
    href: 'tel:05XXXXXXXXX',
  },
  {
    icon: '✉️',
    label: 'E-posta',
    value: 'info@poyrazdekorasyon.com',
    href: 'mailto:info@poyrazdekorasyon.com',
  },
  {
    icon: '📍',
    label: 'Adres',
    value: 'Örnek Mahallesi, Dekorasyon Caddesi No:12\nİstanbul / Türkiye',
    href: null,
  },
  {
    icon: '🕐',
    label: 'Çalışma Saatleri',
    value: 'Pazartesi – Cumartesi\n09:00 – 19:00',
    href: null,
  },
]

export default function Iletisim() {
  return (
    <>
      {/* Sayfa Başlığı */}
      <div className="page-hero">
        <div className="container page-hero__inner">
          <h1 className="page-hero__title">İletişim</h1>
          <p className="page-hero__sub">
            Projeniz için teklif almak veya bilgi edinmek için bize ulaşın.
          </p>
        </div>
      </div>

      {/* İletişim Bilgileri */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactItems.map((item, i) => (
              <div className="contact-info-card" key={i}>
                <div className="contact-info-card__icon">{item.icon}</div>
                <div className="contact-info-card__label">{item.label}</div>
                <div className="contact-info-card__value">
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span style={{ whiteSpace: 'pre-line' }}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Harita */}
          <MapSection />
        </div>
      </section>
    </>
  )
}
