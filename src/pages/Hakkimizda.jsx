import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import usePageMeta from '../hooks/usePageMeta'

const values = [
  { title: 'Kaliteli Malzeme', desc: 'Yalnızca onaylı, uzun ömürlü malzemeler kullanıyoruz.' },
  { title: 'Deneyimli Ekip', desc: 'Alanında uzman, sertifikalı usta kadrosuyla çalışıyoruz.' },
  { title: 'Şeffaf Fiyatlandırma', desc: 'Gizli maliyet yok; teklifimiz ne içeriyorsa onu uyguluyoruz.' },
  { title: 'Zamanında Teslim', desc: 'Proje takibi ve disiplinli çalışma anlayışıyla tarihe uyuyoruz.' },
  { title: 'Müşteri Odaklılık', desc: 'Her adımda müşteri görüşü alıyor, isteğe göre ilerliyoruz.' },
  { title: 'Temiz Çalışma', desc: 'İş bitiminde alanı temiz teslim etmek önceliğimizdir.' },
]

export default function Hakkimizda() {
  usePageMeta(
    'Hakkımızda | Poyraz Dekorasyon – İzmir Tadilat Firması',
    '20 yılı aşkın deneyimiyle İzmir Bornova merkezli Poyraz Dekorasyon. 500\'den fazla tamamlanan proje, garantili hizmet ve uzman ekip. İzmir\'in güvenilir tadilat ve inşaat firması.'
  )
  return (
    <>
      <PageHero
        title="Hakkımızda"
        sub="Güven, kalite ve titizlikle yürüttüğümüz tadilat ve dekorasyon hizmetleri."
        illustration="about"
      />

      {/* Ana İçerik */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-content__text">
              <h2>Poyraz Dekorasyon Kimdir?</h2>
              <p>
                Poyraz Dekorasyon, İzmir merkezli olarak kurulmuş; Türkiye'nin her yerinde
                faaliyet gösteren profesyonel bir tadilat ve dekorasyon firmasıdır. Konutlardan
                ofislere, işyerlerinden ticari alanlara kadar geniş bir yelpazede hizmet sunarak
                müşterilerimizin yaşam ve çalışma alanlarını yeniden şekillendiriyoruz.
              </p>
              <p>
                Fayans ve seramik döşemeden çatı izolasyonuna, demir doğramadan boya badanaya,
                alçı işlerinden asma tavan sistemlerine, su tesisatından tuvalet ve banyo
                yapımına kadar tüm tadilat süreçlerini deneyimli ekibimizle uçtan uca
                yönetiyoruz.
              </p>
              <p>
                Temel prensibimiz; doğru malzeme, doğru işçilik ve dürüst iletişimdir. Her
                projede müşterimizin bütçesine ve zamanına saygı göstererek işimizi en iyi
                şekilde tamamlıyoruz. Teslim ettiğimiz her mekan, markamızın bir yansımasıdır.
              </p>
              <p>
                Küçük bir onarımdan komple ev yenilemeye kadar her ölçekte işte aynı titizliği
                ve özveriyi sergiliyoruz. Poyraz Dekorasyon'u tercih eden her müşterimiz; zamanında
                teslim, kaliteli malzeme ve temiz çalışma ortamı garantisiyle hizmet alır.
              </p>
            </div>

            <div>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat__number">500+</div>
                  <div className="about-stat__label">Tamamlanan Proje</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat__number">20+</div>
                  <div className="about-stat__label">Yıl Deneyim</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat__number">10+</div>
                  <div className="about-stat__label">Farklı Hizmet</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat__number">%100</div>
                  <div className="about-stat__label">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <div className="about-values">
        <div className="container">
          <h2 className="about-values__title">Çalışma Anlayışımız</h2>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className="about-value-item" key={i}>
                <div className="about-value-item__check">✓</div>
                <div className="about-value-item__text">
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__title">Birlikte Çalışalım</h2>
          <p className="cta-banner__sub">
            Projeniz için ücretsiz keşif ve fiyat teklifi almak ister misiniz?
          </p>
          <Link to="/iletisim" className="btn btn-outline">
            İletişime Geç
          </Link>
        </div>
      </div>
    </>
  )
}
