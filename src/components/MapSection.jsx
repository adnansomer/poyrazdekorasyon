export default function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <h3 className="map-section__title">Konumumuz</h3>
        <div className="map-section__wrapper">
          <iframe
            title="Poyraz Dekorasyon Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.93752564!2d28.731994!3d41.0053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
