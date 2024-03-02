// import { Container } from "react-bootstrap";
// import FutureBoxes from "./assets/Boxes/FutureBoxes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./assets/Boxes/Header";
import TarotReading from "./Page/TarotReading/TarotReading";
import Meditation from "./components/meditation/Meditation";
import DailyMeditation from "./components/meditation/DailyMeditation";

import Home from "./Page/Home/Home";
import Facecard from "./assets/Boxes/Facecard";

import Faceresult from "./assets/Boxes/Facecard/Faceresult";
import Timemagicresult from "./assets/Boxes/Facecard/Timemagicresult";
import Ancestors from "./assets/Boxes/Facecard/Ancestors";
import Palmreader from "./assets/Boxes/Facecard/Palmreader";

import ChakraMeditation from "./components/meditation/ChakraMeditation";
import SleepMeditation from "./components/meditation/SleepMeditation";
import FiveMinMeditation from "./components/meditation/FiveMinMeditation";
import Mindfulness from "./components/meditation/Mindfulness";
import PositiveMeditation from "./components/meditation/PositiveMeditation";
import BeginnerMeditation from "./components/meditation/BeginnerMeditation";
import MentalHealthMeditation from "./components/meditation/MentalHealthMeditation";
import EpicPowerMeditation from "./components/meditation/EpicPowerMeditation";
import EmotionalSupport from "./Page/Support/EmotionalSupport";

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

        <Route path="/DailyMeditation" element={<DailyMeditation />} />
        <Route path="/ChakraMeditation" element={<ChakraMeditation />} />
        <Route path="/SleepMeditation" element={<SleepMeditation />} />
        <Route path="/5MinsMeditation" element={<FiveMinMeditation />} />
        <Route path="/MindfullnessMeditation" element={<Mindfulness />} />
        <Route
          path="/PositiveMindMeditation"
          element={<PositiveMeditation />}
        />
        <Route path="/BeginnerMeditation" element={<BeginnerMeditation />} />
        <Route
          path="/MentalHealthMeditation"
          element={<MentalHealthMeditation />}
        />
        <Route path="/EpicPowerMeditation" element={<EpicPowerMeditation />} />
        <Route path="/EmotionalSupport" element={<EmotionalSupport />} />

        <Route path="/Facecard" element={<Facecard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
