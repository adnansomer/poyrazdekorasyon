import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-pattern" />
      <div className="hero__grid-overlay" />

      <div className="container">
        <div className="hero__content">
          <div className="hero__badge">
            ✦ &nbsp;Profesyonel Tadilat &amp; Dekorasyon
          </div>

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
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Aşağı kaydır</span>
      </div>
    </section>
  )
}
