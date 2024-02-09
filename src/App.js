import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Works from './components/Works';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
      <Header/>
      <Slider/>
      <About/>
      <Works/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
