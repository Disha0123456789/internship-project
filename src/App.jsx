// import { Container } from "react-bootstrap";
// import FutureBoxes from "./assets/Boxes/FutureBoxes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./assets/Boxes/Header";
import TarotReading from "./Page/TarotReading/TarotReading";
import Meditation from "./components/meditation/Meditation";
import Home from "./Page/Home/Home";
import Facecard from "./assets/Boxes/Facecard";
import Faceresult from "./assets/Boxes/Facecard/Faceresult";
import Timemagicresult from "./assets/Boxes/Facecard/Timemagicresult";
import Ancestors from "./assets/Boxes/Facecard/Ancestors";
import Palmreader from "./assets/Boxes/Facecard/Palmreader";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarot_reading" element={<TarotReading />} />
        <Route path="/Faceresult" element={<Faceresult />} />
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/Facecard" element={<Facecard />} />
        <Route path="/Timemagicresult" element={<Timemagicresult />} />
        <Route path="/Ancestors" element={<Ancestors />} />

        <Route path="/Palmreader" element={<Palmreader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
