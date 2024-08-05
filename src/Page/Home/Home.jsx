import React, { useEffect } from "react";
import FutureBoxes from "../../assets/Boxes/FutureBoxes";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import NewFutureBox from "../FutureBox/NewFutureBox";
import Footer from "../Footer/Footer";
import './Home.css';
//import '../Header/Header.css';
//import '../Hero/hero.css';
//import '../Carousel/carousel.css';
//import '../FutureBox/newFutureBox.css';
//import '../../assets/styles/style.css';
//import '../Footer/Footer.css';

const Home = ({ onLoaded }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulating when Home component is fully loaded
    if (onLoaded) {
      onLoaded();  // Notify parent component that Home is loaded
    }
  }, [onLoaded]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Carousel />
      <NewFutureBox />
      <FutureBoxes />
      <Footer />
    </div>
  )
}

export default Home;
