export default function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <h3 className="map-section__title">Konumumuz</h3>
        <div className="map-section__wrapper">
          <iframe
            title="Poyraz Dekorasyon Konum"
            src="https://maps.google.com/maps?q=Mevlana+Mahallesi,+Bornova,+%C4%B0zmir,+T%C3%BCrkiye&output=embed&z=15"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
