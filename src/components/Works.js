import React from 'react'; // Import React
import dotnetIcon from '../images/dotnett.png'
import pythonIcon from '../images/pythonn.jpeg'
import reactIcon from '../images/reactt.png'
import androidIcon from '../images/androidd.jpeg'
import sharePointIcon from '../images/sharepointt.jpeg'
import eCommerceIcon from '../images/ecomerceee.jpeg'
import { useTranslation } from 'react-i18next';



function Works() {
    const { t, i18n } = useTranslation();

    return (
        <div className="Works">
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>{t("Services")}</h2>
                        <p>{t("As the Digitson team, we came together to create a strong team by combining our passion for developing technology. Specializing in Python, .Net, React, Android and mobile technologies, each of us brings deep knowledge and experience to our respective fields.")}</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box iconbox-blue">
                                <div className="dotnet-icon icon">
                                    <img src={dotnetIcon} style={{ height: "100px", width: "2000px" }} />
                                </div>
                                <h4><a href="">.NET</a></h4>
                                <p>{t("We offer customized solutions with .NET technology for robust and reliable web applications. We are the right choice for innovative and scalable projects.")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box iconbox-orange ">
                                <div>
                                    <img src={pythonIcon} style={{ height: "100px", width: "100px" }} />
                                </div>
                                <h4><a href="">Python</a></h4>
                                <p>{t("Leveraging the flexibility and power of Python, we bring your projects to life in areas such as data analysis, artificial intelligence, and machine learning. We're here to turn your problems into data-driven solutions.")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box iconbox-pink">
                                <div className="icon">
                                    <img src={reactIcon} style={{ height: "100px", width: "100px" }} />
                                </div>
                                <h4><a href="">React</a></h4>
                                <p>{t("We design modern web applications with React for user-friendly interfaces and impressive user experience. We elevate your brand with interactive and customized solutions.")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box iconbox-blue">
                                <div className="icon">
                                    <img src={androidIcon} style={{ height: "100px", width: "100px" }} />
                                </div>
                                <h4><a href="">Android</a></h4>
                                <p>{t("We develop original and innovative Android applications for smartphones and tablets. We support you in maximizing your potential on mobile devices.")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box iconbox-red">
                                <div className="icon">
                                    <img src={sharePointIcon} style={{ height: "120px", width: "120px" }} />
                                </div>
                                <h4><a href="">SharePoint</a></h4>
                                <p>{t("Utilizing the power of SharePoint, we provide customized solutions tailored to your corporate needs in collaboration, document management, and content creation. We're here to increase productivity and optimize your workflows.")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box iconbox-teal">
                                <div className="icon">
                                    <img src={eCommerceIcon} style={{ height: "80px", width: "80px" }} />
                                </div>
                                <h4><a href="">{t("eCommerce")}</a></h4>
                                <p>{t("We offer customized e-commerce solutions for businesses looking to sell online. By providing a secure and user-friendly shopping experience, we help you increase your online sales.")}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Works