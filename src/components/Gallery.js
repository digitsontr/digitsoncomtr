
function Gallery() {

    return(
        <div className="Gallery">
 <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Projects</h2>
          <p>İşinde profesyonel ekibimiz ile mobilya imalat montaj yapmaktayız. Yaptığımız işlerin fotoğrafları aşağıda mevcuttur. Fiyat almak için Telefon ya da mail yolu ile iletişime geçebilirsiniz. Talepleriniz için arayarak bilgi alabilirsiniz.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">Hepsi</li>
              <li data-filter=".filter-app">ROOMİEROSTER</li>
              <li data-filter=".filter-card">MEDIAR</li>
              <li data-filter=".filter-web">MEMORENG</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/mutfak-dolabi-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Mutfak Dolabı</h4>
                <p>Mutfak Dolabı</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/mutfak-dolabi-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Mutfak Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/banyo-dolabi-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Banyo Dolabı</h4>
                <p>Banyo Dolabı</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/banyo-dolabi-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Banyo Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/mutfak-dolabi-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Mutfak Dolabı</h4>
                <p>Mutfak Dolabı</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/mutfak-dolabi-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Mutfak Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/dolapli-vestiyer.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Vestiyer</h4>
                <p>Vestiyer</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/dolapli-vestiyer.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Vestiyer"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/mutfak-dolabi-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Mutfak Dolabı</h4>
                <p>Mutfak Dolabı</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/mutfak-dolabi-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Mutfak Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/banyo-dolabi-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Banyo Dolabı</h4>
                <p>Banyo Dolabı</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/banyo-dolabi-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Banyo Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </section>
        </div>
    )
}
export default Gallery