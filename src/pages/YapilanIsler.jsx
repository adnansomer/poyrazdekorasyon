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
      { src: cati1, alt: 'Çatı çalışması 1' },
      { src: cati2, alt: 'Çatı çalışması 2' },
      { src: cati3, alt: 'Çatı çalışması 3' },
      { src: cati4, alt: 'Çatı çalışması 4' },
    ],
  },
  {
    title: 'Ev Dekorasyonu',
    images: [
      { src: evDek1, alt: 'Ev dekorasyonu 1' },
      { src: evDek2, alt: 'Ev dekorasyonu 2' },
      { src: evDek3, alt: 'Ev dekorasyonu 3' },
      { src: evDek4, alt: 'Ev dekorasyonu 4' },
      { src: evDek5, alt: 'Ev dekorasyonu 5' },
    ],
  },
  {
    title: 'Işıklandırma',
    images: [
      { src: isik1, alt: 'Işıklandırma 1' },
      { src: isik2, alt: 'Işıklandırma 2' },
      { src: isik3, alt: 'Işıklandırma 3' },
      { src: isik4, alt: 'Işıklandırma 4' },
      { src: isik5, alt: 'Işıklandırma 5' },
    ],
  },
  {
    title: 'Kapı Tasarımı',
    images: [
      { src: kapi1, alt: 'Kapı tasarımı 1' },
      { src: kapi2, alt: 'Kapı tasarımı 2' },
      { src: kapi3, alt: 'Kapı tasarımı 3' },
      { src: kapi4, alt: 'Kapı tasarımı 4' },
    ],
  },
  {
    title: 'Korkuluk',
    images: [
      { src: korkuluk1, alt: 'Korkuluk çalışması 1' },
      { src: korkuluk2, alt: 'Korkuluk çalışması 2' },
      { src: korkuluk3, alt: 'Korkuluk çalışması 3' },
      { src: korkuluk4, alt: 'Korkuluk çalışması 4' },
    ],
  },
  {
    title: 'Lavabo',
    images: [
      { src: lavabo1, alt: 'Lavabo çalışması 1' },
      { src: lavabo2, alt: 'Lavabo çalışması 2' },
      { src: lavabo3, alt: 'Lavabo çalışması 3' },
    ],
  },
  {
    title: 'Uçtan Uca Ev',
    images: [
      { src: uctan1, alt: 'Uçtan uca ev projesi 1' },
      { src: uctan2, alt: 'Uçtan uca ev projesi 2' },
      { src: uctan3, alt: 'Uçtan uca ev projesi 3' },
      { src: uctan4, alt: 'Uçtan uca ev projesi 4' },
      { src: uctan5, alt: 'Uçtan uca ev projesi 5' },
      { src: uctan6, alt: 'Uçtan uca ev projesi 6' },
      { src: uctan7, alt: 'Uçtan uca ev projesi 7' },
      { src: uctan8, alt: 'Uçtan uca ev projesi 8' },
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
