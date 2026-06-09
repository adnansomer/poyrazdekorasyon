import PageHero from '../components/PageHero'
import PhotoGallery from '../components/PhotoGallery'
import usePageMeta from '../hooks/usePageMeta'

import cati1 from '../photos/cati-1.jpg'
import cati2 from '../photos/cati-2.jpg'
import cati3 from '../photos/cati-3.jpg'
import cati4 from '../photos/cati-4.jpg'

import evDek1 from '../photos/ev-dekorasyon.jpg'
import evDek2 from '../photos/ev-dekorasyon2.jpg'
import evDek3 from '../photos/ev-dekorasyon3.jpg'
import evDek4 from '../photos/ev-dekorasyon4.jpg'
import evDek5 from '../photos/ev-dekorasyon5.jpg'

import isik1 from '../photos/isiklandirma-1.jpg'
import isik2 from '../photos/isiklandirma-2.jpg'
import isik3 from '../photos/isiklandirma-3.jpg'
import isik4 from '../photos/isiklandirma-4.jpg'
import isik5 from '../photos/isiklandirma-5.jpg'

import kapi1 from '../photos/kapi-tasarimi-1.jpg'
import kapi2 from '../photos/kapi-tasarimi-2.jpg'
import kapi3 from '../photos/kapi-tasarimi-3.jpg'
import kapi4 from '../photos/kapi-tasarimi-4.jpg'

import korkuluk1 from '../photos/korkuluk-1.jpg'
import korkuluk2 from '../photos/korkuluk-2.jpg'
import korkuluk3 from '../photos/korkuluk-3.jpg'
import korkuluk4 from '../photos/korkuluk-4.jpg'

import lavabo1 from '../photos/lavabo-1.jpg'
import lavabo2 from '../photos/lavabo-2.jpg'
import lavabo3 from '../photos/lavabo-3.jpg'

import uctan1 from '../photos/uctan-uca-ev1.jpg'
import uctan2 from '../photos/uctan-uca-ev2.jpg'
import uctan3 from '../photos/uctan-uca-ev3.jpg'
import uctan4 from '../photos/uctan-uca-ev4.jpg'
import uctan5 from '../photos/uctan-uca-ev5.jpg'
import uctan6 from '../photos/uctan-uca-ev6.jpg'
import uctan7 from '../photos/uctan-uca-ev7.jpg'
import uctan8 from '../photos/uctan-uca-ev8.jpg'

const galleries = [
  {
    title: 'Çatı',
    images: [
      { src: cati1, alt: 'İzmir çatı tamiratı ve izolasyon uygulaması – Poyraz Dekorasyon' },
      { src: cati2, alt: 'Bornova çatı onarımı ve su yalıtımı çalışması' },
      { src: cati3, alt: 'İzmir çatı yenileme projesi – teras su izolasyonu' },
      { src: cati4, alt: 'İzmir çatı tamiratı öncesi ve sonrası – Poyraz Dekorasyon' },
    ],
  },
  {
    title: 'Ev Dekorasyonu',
    images: [
      { src: evDek1, alt: 'İzmir iç mekan ev dekorasyonu ve tadilat çalışması' },
      { src: evDek2, alt: 'Bornova ev yenileme – salon dekorasyon uygulaması' },
      { src: evDek3, alt: 'İzmir daire tadilatı – iç dekorasyon projesi' },
      { src: evDek4, alt: 'İzmir ev dekorasyonu – duvar ve tavan uygulaması' },
      { src: evDek5, alt: 'Poyraz Dekorasyon İzmir – komple ev yenileme projesi' },
    ],
  },
  {
    title: 'Işıklandırma',
    images: [
      { src: isik1, alt: 'İzmir asma tavan LED ışıklandırma sistemi uygulaması' },
      { src: isik2, alt: 'Bornova spot aydınlatma ve gömme tavan ışıklandırması' },
      { src: isik3, alt: 'İzmir iç mekan dekoratif ışıklandırma çalışması' },
      { src: isik4, alt: 'İzmir alçıpan asma tavan LED aydınlatma entegrasyonu' },
      { src: isik5, alt: 'Poyraz Dekorasyon – İzmir tavan ışıklandırma projesi' },
    ],
  },
  {
    title: 'Kapı Tasarımı',
    images: [
      { src: kapi1, alt: 'İzmir demir kapı tasarımı ve imalatı – Poyraz Dekorasyon' },
      { src: kapi2, alt: 'Bornova çelik kapı montajı ve demir doğrama işi' },
      { src: kapi3, alt: 'İzmir özel tasarım demir kapı ve doğrama uygulaması' },
      { src: kapi4, alt: 'İzmir demir kapı yapımı ve montajı – Poyraz Dekorasyon' },
    ],
  },
  {
    title: 'Korkuluk',
    images: [
      { src: korkuluk1, alt: 'İzmir merdiven ve balkon demir korkuluk yapımı' },
      { src: korkuluk2, alt: 'Bornova özel tasarım metal korkuluk imalatı ve montajı' },
      { src: korkuluk3, alt: 'İzmir balkon korkuluğu – demir doğrama uygulaması' },
      { src: korkuluk4, alt: 'Poyraz Dekorasyon İzmir – merdiven korkuluk projesi' },
    ],
  },
  {
    title: 'Lavabo',
    images: [
      { src: lavabo1, alt: 'İzmir banyo lavabo montajı ve tesisat yenileme çalışması' },
      { src: lavabo2, alt: 'Bornova banyo tadilatı – lavabo ve armatür değişimi' },
      { src: lavabo3, alt: 'İzmir banyo yenileme – lavabo montajı ve fayans döşeme' },
    ],
  },
  {
    title: 'Uçtan Uca Ev',
    images: [
      { src: uctan1, alt: 'İzmir uçtan uca daire yenileme projesi – Poyraz Dekorasyon' },
      { src: uctan2, alt: 'Bornova komple ev tadilatı – boya, fayans ve alçı işleri' },
      { src: uctan3, alt: 'İzmir komple daire renovasyonu – salon ve mutfak yenileme' },
      { src: uctan4, alt: 'İzmir ev yenileme projesi – zemin kaplama ve boya badana' },
      { src: uctan5, alt: 'Poyraz Dekorasyon – İzmir komple tadilat ve dekorasyon' },
      { src: uctan6, alt: 'İzmir uçtan uca ev yenileme – banyo ve mutfak tadilatı' },
      { src: uctan7, alt: 'Bornova daire tadilatı – alçı, boya ve fayans döşeme' },
      { src: uctan8, alt: 'İzmir komple ev renovasyonu – Poyraz Dekorasyon projesi' },
    ],
  },
]

export default function YapilanIsler() {
  usePageMeta(
    'Yapılan İşler | İzmir Tadilat Projeleri – Poyraz Dekorasyon',
    'İzmir\'de tamamladığımız tadilat ve dekorasyon projeleri. Çatı, ev dekorasyonu, ışıklandırma, kapı tasarımı, korkuluk, lavabo ve uçtan uca ev yenileme çalışmalarımızdan örnekler.'
  )
  return (
    <>
      <PageHero
        title="Yapılan İşler"
        sub="Tamamladığımız projelerden seçkiler — kendi işçiliğimiz, kendi fotoğraflarımız."
        illustration="portfolio"
      />

      <section className="section">
        <div className="container">
          <div className="yi-grid">
            {galleries.map(gallery => (
              <div className="yi-item" key={gallery.title}>
                <PhotoGallery title={gallery.title} images={gallery.images} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
