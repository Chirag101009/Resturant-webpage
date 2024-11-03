import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Testimonal from './components/Testimonal/Testimonal'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonal/>
      <Footer/>
    </div>
  )
}

export default App