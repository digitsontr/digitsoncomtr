import React from 'react'; // Import React
import digitsonLogo2 from '../images/digitsonLogo2.png'
//import { useTranslation } from 'react-i18next';



function Footer() {
    //const { t, i18n } = useTranslation();

    return (
        <div className="Footer">
            <footer id="footer">
                <div className="container">
                    <div className="email col-lg-12 col-md-4">
                        <h4>© 2024 <img src={digitsonLogo2} style={{ height: "30px", width: "90px" }} /></h4>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer