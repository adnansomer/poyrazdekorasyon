export default function MapSection() {
  return (
    <section className="map-section">
      <div className="container">
        <h3 className="map-section__title">Konumumuz</h3>
        <div className="map-section__wrapper">
          <iframe
            title="Poyraz Dekorasyon Konum"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d27.2411766!3d38.4533724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97dd678770d55%3A0xc72a3a1cd0900c26!2sMevlana%2C+1776%2F14.+Sk.+No%3A11%2C+35050+Bornova%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1700000000001!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
