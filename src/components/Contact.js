function Contact() {
    return(
        <div className="Contact">
                <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>
          <p>İşinde profesyonel ekibimiz ile mobilya imalat montaj yapmaktayız. Hizmetlerimizin listesi yukarıda mevcuttur. Fiyat almak için Telefon ya da mail yolu ile iletişime geçebilirsiniz. Talepleriniz için arayarak bilgi alabilirsiniz.</p>
        </div>

        <div className="row">

          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Lokasyon:</h4>
                <p>Ankara - Siteler</p>
              </div>
              
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Telefon:</h4>
                <p>+905073752401</p>
              </div>

              {/* <iframe src="https://www.google.com/maps/embed?ViTdfuzPXmeZc4D3A" frameborder="0" style={{border:"0", width: "100%", height: "290px"}} allowfullscreen></iframe> */}
            </div>

          </div>
        </div>

      </div>
    </section>
        </div>
    )
}
export default Contact