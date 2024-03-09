import { BrowserRouter, Routes, Route } from "react-router-dom";
import TarotReading from "./Page/TarotReading/TarotReading";
import Meditation from "./components/meditation/Meditation";
import DailyMeditation from "./components/meditation/DailyMeditation";
import Anxiety from "./Page/Support/Obsession";
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

import Loneliness from "./Page/Support/Loneliness";
import SexualWellness from "./Page/Support/SexualWellness";
import Family from "./Page/Support/Family";
import Depression from "./Page/Support/Depression";
import Sleep from "./Page/Support/Sleep";
import StressManagement from "./Page/Support/StressManagement";
import PastTrauma from "./Page/Support/PastTrauma";
import SelfEsteemIssues from "./Page/Support/SelfEsteemIssues";
import WorkLifeBalance from "./Page/Support/WorkLifeBalance";
import Grief from "./Page/Support/Grief";
import FinalPage from "./Page/Support/FinalPage";

import FortuneWheel from "./components/wheel/FortuneWheel";

import Obsession from "./Page/Support/Obsession";
import Shuffle from "./Page/TarotReading/Shuffle";
import AngerManagement from "./Page/Support/AngerManagement";
import TarotResult from "./Page/TarotReading/TarotResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarot_reading" element={<TarotReading />} />
        <Route path="/CardSelection" element={<Shuffle />} />
        <Route path="/TarotResult" element={<TarotResult />} />
        <Route path="/Faceresult" element={<Faceresult />} />
        <Route path="/Meditation" element={<Meditation />} />

        <Route path="/Fortune_Wheel" element={<FortuneWheel />} />

        <Route path="/Facecard" element={<Facecard />} />
        <Route path="/Timemagicresult" element={<Timemagicresult />} />
        <Route path="/Ancestors" element={<Ancestors />} />

        <Route path="/Palmreader" element={<Palmreader />} />
        <Route path="/MindfullnessMeditation" element={<Mindfulness />} />
        <Route path="/DailyMeditation" element={<DailyMeditation />} />
        <Route path="/ChakraMeditation" element={<ChakraMeditation />} />
        <Route path="/SleepMeditation" element={<SleepMeditation />} />
        <Route path="/5MinsMeditation" element={<FiveMinMeditation />} />

        <Route path="/Anxiety" element={<Anxiety />} />

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
        <Route path="/Obsession" element={<Obsession />} />
        <Route path="/EmotionalSupport" element={<EmotionalSupport />} />
        <Route path="/AngerManagement" element={<AngerManagement />} />
        <Route path="/Loneliness" element={<Loneliness />} />
        <Route path="/SexualWellness" element={<SexualWellness />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Depression" element={<Depression />} />
        <Route path="/Sleep" element={<Sleep />} />
        <Route path="/StressManagement" element={<StressManagement />} />
        <Route path="/PastTrauma" element={<PastTrauma />} />
        <Route path="/Grief" element={<Grief />} />
        <Route path="/Done" element={<FinalPage />} />
        <Route path="/WorkLifeBalance" element={<WorkLifeBalance />} />
        <Route path="/SelfEsteemIssues" element={<SelfEsteemIssues />} />

        <Route path="/Facecard" element={<Facecard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
