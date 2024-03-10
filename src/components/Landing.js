import React from 'react'; // Import React
import landingImage from '../images/landing.jpg';
import { useTranslation } from 'react-i18next';



const Landing = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='landing-container'>
            <h1 className='landing-title'>{t("Welcome to Digitson")}</h1>
            <img src={landingImage} className='landing-image'></img>
        </div>
    );
}

export default Landing;