import React, { useEffect } from 'react'; // Import React

function Contact() {
    return(
        <div className="Contact">
                <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Have a question or inquiry? Don't hesitate to get in touch with us! Our team is here to assist you. Whether you're interested in our services, have feedback, or simply want to say hello, we'd love to hear from you. Feel free to reach out through the contact form below or via the contact information provided. We look forward to connecting with you!</p>
        </div>

        <div className="row">

          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location</h4>
                <p>Turkey - Ankara</p>
              </div>
              
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email</h4>
                <p>info@digitson.com.tr</p>
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