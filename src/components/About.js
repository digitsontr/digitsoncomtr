import React from 'react'; // Import React
import  aboutImage from '../images/about.jpg'
import { useTranslation } from 'react-i18next';


function About() {
  const { t, i18n } = useTranslation();

    return(
        <div className="About">
               
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>{t("About Us")}</h2>
          <p>{t("As DIGITSON Team, we are a company that is passionate about technology and undertakes many projects in the field of software.")}</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
          <img src={aboutImage} style={{ maxHeight: "100%", maxWidth: "100%", height: "auto", width: "auto" }} />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>{t("RELIABLE ADDRESS FOR DEVELOPMENT")}</h3>
            <p className="fst-italic">{t("In the intertwined realms of these technology fields, we envision a software world where innovation, creativity, and quality take center stage. By aiming for excellence in our projects, we aspire to provide solutions to our clients needs. With complementary skill sets, we aim to make a mark in the digital world")}</p>
            <ul>
            <h4>{t("EXPERTISE AREAS")}</h4>
              <li><i className="bi bi-check-circled"></i> {t("We create a strong synergy when we come together while researching our areas of expertise. We establish solid infrastructures, offer data analysis and artificial intelligence solutions, design impressive and user-friendly commands, and develop advanced applications in the mobile field.")}</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

        </div>
    )
}

export default About