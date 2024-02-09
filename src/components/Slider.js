import { useEffect } from "react";

const Slider = () => {

  useEffect(() => {
    var sliderImages = document.querySelectorAll('.carousel-item'),
    arrowLeft = document.querySelector('.carousel-control-prev'),
    arrowRight = document.querySelector('.carousel-control-next'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
        sliderImages[i].classList.remove('active');
    }
}

function init() {
    reset();
    sliderImages[0].style.display = 'block';
    sliderImages[0].classList.add('active')
}

function slideLeft() {
    reset();
    var slide =sliderImages[current - 1];
    slide.style.display = 'block';
    slide.classList.add('active');
    current--;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight() {
    reset();
    var slide =sliderImages[current + 1];
    slide.style.display = 'block';
    slide.classList.add('active');
    current++;
}

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

init();

  });
 
  return (
    <div className="Slider">
      <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">


            <div className="carousel-item active" style={{ backgroundImage: "url(../images/slide-1.jpg)" }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Unlock Your Potential</h2>
                  <p className="animate__animated animate__fadeInUp">Reliable address for development.</p>
                  <a href="#portfolio" className="btn-get-started animate__animated animate__fadeInUp scrollto">Projects</a>
                </div>
              </div>
            </div>


            <div className="carousel-item" style={{ backgroundImage: "url(../images/slide-2.jpg)" }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Mobilya  İmalat ve Montaj </h2>
                  <p className="animate__animated animate__fadeInUp">Mutfak Dolabı, Banyo Dolabı, Vestiyer ve daha pek çok mobilya işleriniz için en iyi adres.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Daha Fazla</a>
                </div>
              </div>
            </div>


            <div className="carousel-item" style={{ backgroundImage: "url(../images/slide-3.jpg)" }}>
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">Ankara Siteler de Mesleğinde Başarılı Ustalar</h2>
                  <p className="animate__animated animate__fadeInUp">Uzun yıllardır bu mesleği en iyi şekilde icra eden ekibimiz en kaliteli ürünleri hızlı bir şekilde hazırlamaktayız.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>

          </div>

          <a className="carousel-control-prev" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next"  role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

        </div>
      </section>
    </div>
  );
}

export default Slider;
