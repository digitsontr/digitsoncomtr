import React, { useEffect } from 'react'; // Import React
import mediarJpeg from '../images/mediar.jpeg'
import memorenJpeg from '../images/memoreng.jpeg'
import memorengJpeg2 from '../images/memoreng2.jpeg'
import roommateJpeg from '../images/roommate.jpeg'
import roommateJpeg2 from '../images/roommate2.jpeg'
import roommateJpeg3 from '../images/roommate3.jpeg'



function Gallery() {

    return(
        <div className="Gallery">
 <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Projects</h2>
          <p>At our business, we boast an extensive portfolio of projects catering to clients from various sectors. Each project is meticulously planned and executed, designed to meet our clients' needs and exceed their expectations. Our solutions are backed by innovative approaches, reliable technologies, and comprehensive expertise. With a customer-centric approach and a commitment to quality service, we aim to achieve success in every project we undertake.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">ROOMIEROSTER</li>
              <li data-filter=".filter-card">MEDIAR</li>
              <li data-filter=".filter-web">MEMORENG</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
            <img src={roommateJpeg} style={{height: "450px", width: "450px"}} />
              <div className="portfolio-info">
                <h4>RoomieRoster</h4>
                <p>RoomieRoster</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/mutfak-dolabi-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Mutfak Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
            <img src={memorenJpeg} style={{height: "450px", width: "450px"}} />
              <div className="portfolio-info">
                <h4>Memoreng</h4>
                <p>Memoreng</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/banyo-dolabi-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Banyo Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
            <img src={roommateJpeg2} style={{height: "450px", width: "450px"}} />
              <div className="portfolio-info">
                <h4>RoomieRoster</h4>
                <p>RoomieRoster</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/mutfak-dolabi-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Mutfak Dolabı"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
            <img src={mediarJpeg} style={{height: "450px", width: "450px"}} />
              <div className="portfolio-info">
                <h4>Mediar</h4>
                <p>Mediar</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/dolapli-vestiyer.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Vestiyer"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
            <img src={memorengJpeg2} style={{height: "450px", width: "450px"}} />
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
            <img src={roommateJpeg3} style={{height: "450px", width: "450px"}} />
              <div className="portfolio-info">
                <h4>RoomieRoster</h4>
                <p>RoomieRoster</p>
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