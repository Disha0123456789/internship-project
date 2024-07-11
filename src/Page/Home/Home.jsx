import { Container } from "react-bootstrap"
import FutureBoxes from "../../assets/Boxes/FutureBoxes";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Carousel from "../Carousel/Carousel";
import NewFutureBox from "../FutureBox/NewFutureBox";
import Footer from "../Footer/Footer";
import './Home.css';

const Home = () => {
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

export default Home

