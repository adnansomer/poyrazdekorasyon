import { useState, useCallback } from 'react'

export default function PhotoGallery({ title, images }) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() =>
    setCurrent(i => (i === 0 ? images.length - 1 : i - 1)), [images.length])

  const next = useCallback(() =>
    setCurrent(i => (i === images.length - 1 ? 0 : i + 1)), [images.length])

  return (
    <div className="pg">
      <div className="pg__header">
        <h2 className="pg__title">{title}</h2>
        <span className="pg__counter">{current + 1} / {images.length}</span>
      </div>

      <div className="pg__stage">
        <img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="pg__img"
          loading="lazy"
        />

        <button className="pg__arrow pg__arrow--prev" onClick={prev} aria-label="Önceki fotoğraf">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <button className="pg__arrow pg__arrow--next" onClick={next} aria-label="Sonraki fotoğraf">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <div className="pg__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`pg__dot${i === current ? ' pg__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Fotoğraf ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="pg__thumbs">
        {images.map((img, i) => (
          <button
            key={i}
            className={`pg__thumb${i === current ? ' pg__thumb--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Fotoğraf ${i + 1}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}
