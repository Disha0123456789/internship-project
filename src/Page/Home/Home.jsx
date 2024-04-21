import { Container } from "react-bootstrap"
import FutureBoxes from "../../assets/Boxes/FutureBoxes"
import Header from "../../assets/Boxes/Header"
import Hero from "../../components/Hero"
import Carousel from "../../components/carousel/Carousel"
import NewFutureBox from "../../components/FutureBox/NewFutureBox"
import './Home.css';

const Home = () => {
  return (
      <div className="App">
        <Header />
        <Hero />
        <Carousel />
        <NewFutureBox />
        <FutureBoxes />
      </div>
  )
}

export default Home
