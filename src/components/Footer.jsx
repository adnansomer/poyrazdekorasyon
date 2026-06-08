import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand-name">Poyraz Dekorasyon</div>
            <div className="footer__brand-tagline">Tadilat &amp; Dekorasyon</div>
            <p className="footer__brand-desc">
              Konut ve işyerlerinde fayans, çatı izolasyonu, boya, alçı, su tesisatı ve daha
              pek çok alanda profesyonel tadilat hizmetleri sunuyoruz.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Sayfalar</div>
            <div className="footer__links">
              <Link to="/">Ana Sayfa</Link>
              <Link to="/hakkimizda">Hakkımızda</Link>
              <Link to="/hizmetler">Hizmetler</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
          </div>

          <div>
            <div className="footer__col-title">İletişim</div>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+905452096557">+90 545 209 65 57</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+905061783149">+90 506 178 31 49</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>Mevlana Mah. 1776/14 No:11, Bornova / İzmir</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">🕐</span>
                <span>Pzt – Cmt / 09:00 – 19:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} <span>Poyraz Dekorasyon</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
