import React, { useEffect } from 'react'; // Import React
import  aboutImage from '../images/about.jpg'


function About() {
    return(
        <div className="About">
               
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Us</h2>
          <p>As the DIGITSON Team, we are a company burning with passion for technology, undertaking projects in .NET, Python, React, Android, and mobile fields.</p>
        </div>

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
          <img src={aboutImage} style={{height: "500px", width: "700px"}} />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>RELIABLE ADDRESS FOR DEVELOPMENT</h3>
            <p className="fst-italic">
            In the intertwined realms of these technology fields, we envision a software world where innovation, creativity, and quality take center stage. By aiming for excellence in our projects, we aspire to provide solutions to our clients' needs. With complementary skill sets, we aim to make a mark in the digital world.
            </p>
            <ul>
            <h4>EXPERTISE AREAS</h4>
              <li><i className="bi bi-check-circled"></i> As we delve into our respective expertise areas, we create a strong synergy when we come together. We build robust infrastructures with .NET, offer solutions in data analysis and artificial intelligence with Python, design impressive and user-friendly interfaces with React, and develop innovative applications in the mobile space.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

        </div>
    )
}

export default About