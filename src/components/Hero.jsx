import { Link } from 'react-router-dom'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
    alt: 'Modern mutfak tadilat',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80',
    alt: 'Banyo yenileme',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80',
    alt: 'İç mekan tadilat',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    alt: 'Fayans döşeme',
  },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-pattern" />
      <div className="hero__grid-overlay" />

      <div className="container hero__layout">
        {/* Sol: Metin */}
        <div className="hero__content">
          <h1 className="hero__title">
            Tadilat, Dekorasyon ve<br />
            Yapı İşlerinde <span>Güvenilir Çözüm</span>
          </h1>

          <p className="hero__description">
            Poyraz Dekorasyon olarak; fayans döşemeden çatı izolasyonuna, boya
            badanadan su tesisatına kadar eviniz ve işyerinizin tüm tadilat
            ihtiyaçlarını deneyimli ekibimizle karşılıyoruz. Kalite, güven ve
            zamanında teslim ilkemizden asla taviz vermiyoruz.
          </p>

          <div className="hero__actions">
            <Link to="/hizmetler" className="btn btn-primary">
              Hizmetleri İncele →
            </Link>
            <Link to="/iletisim" className="btn btn-outline">
              İletişime Geç
            </Link>
          </div>
        </div>

        {/* Sağ: Görsel Kollaj */}
        <div className="hero__gallery" aria-hidden="true">
          <div className="hero__gallery-grid">
            {heroImages.map((img, i) => (
              <div className="hero__gallery-item" key={i}>
                <img src={img.src} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Aşağı kaydır</span>
      </div>
    </section>
  )
}
