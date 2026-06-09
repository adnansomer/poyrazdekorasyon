import { Link } from 'react-router-dom'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85',
    alt: 'Modern mutfak tadilat',
    position: 'center center',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85',
    alt: 'İç mekan tadilat',
    position: 'center 40%',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    alt: 'Fayans döşeme',
    position: 'center 60%',
  },
  {
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85',
    alt: 'Banyo yenileme',
    position: 'center center',
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
            Tüm İzmir ve Çevresinde<br />
            <span>Tadilat ve Dekorasyon</span>
          </h1>

          <p className="hero__description">
            Poyraz Dekorasyon olarak İzmir ve tüm çevre illerde; fayans, seramik
            döşemeden çatı tamiratına, boya badanadan alçı sıvaya, mutfak
            tadilatından demir doğramaya, tavan dekorasyonundan su tesisatına
            kadar her türlü tadilat ve inşaat işini deneyimli ekibimizle
            yapıyoruz. Ücretsiz keşif hizmetimizle projenizi yerinde
            değerlendiriyor, kalite ve zamanında teslim ilkemizden taviz vermiyoruz.
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
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  style={{ objectPosition: img.position }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#hizmetler-preview" className="hero__scroll" aria-label="Hizmetlere git">
        <div className="hero__scroll-line" />
        <span>Aşağı kaydır</span>
      </a>
    </section>
  )
}
