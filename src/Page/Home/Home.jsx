import { Container } from "react-bootstrap"
import FutureBoxes from "../../assets/Boxes/FutureBoxes"
import Header from "../../assets/Boxes/Header"
import Hero from "../../components/Hero"
import Carousel from "../../components/carousel/Carousel"
import NewFutureBox from "../../components/FutureBox/NewFutureBox"

const Home = () => {
  return (
    <Container>
      <div className="App">
        <Header />
        <Hero />
        <Carousel />
        <NewFutureBox />
        <FutureBoxes />
      </div>
    </Container>
  )
}

export default Home
