// import { Container } from "react-bootstrap";
// import FutureBoxes from "./assets/Boxes/FutureBoxes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./assets/Boxes/Header";
import TarotReading from "./Page/TarotReading/TarotReading";
import Meditation from "./components/meditation/Meditation";
import Home from "./Page/Home/Home";
import Facecard from "./assets/Boxes/Facecard";
// import CrystalBall from "../src/crystalBall/CrystalBall";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarot_reading" element={<TarotReading />} />
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/Facecard" element={<Facecard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
