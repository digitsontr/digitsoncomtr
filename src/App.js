import React from 'react'; // Import React

import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SwiperSlider from './components/SwiperSlider';

import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  const {t, i18n} = useTranslation()

  const clickHandle = async lang => {
    console.log(" LANG : ", lang);

    if (lang) {
      lang = "en";
    } else {
      lang = "tr";
    }

    await i18n.changeLanguage(lang) 
  }

  return (
    <div className="App">
      <Header clickHandle={clickHandle}/>
      <SwiperSlider />
      <About />
      <Works />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
