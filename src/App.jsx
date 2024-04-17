import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home/Home";

//Todays Luck
import TodaysLuck from "./components/TodaysLuck/TodaysLuck";

//Shopping

//Login And Registration
import LoginPage from "./Page/Registration-Login/LoginForm";
import Register from "./Page/Registration-Login/Register";

//Account Page
import AccountPage from "./Page/AccountPage/AccountPage";
//Horoscope
import Horoscope from "./components/Horoscope/Horoscope";
import HoroscopeHome from "./components/Horoscope/Pages/Home";
import CardImage from "./components/Horoscope/Pages/CardImage";
import Gemini from "./components/Horoscope/Pages/Gemini";
import Content from "./components/Horoscope/Pages/Content";
//Kundli

//Fortune Wheel
import FortuneWheel from "./components/FortuneWheel/FortuneWheel";

//Love Check
import LoveCheck from "./components/LoveCheck/LoveCheck";

//Tarot Reading
import TarotReading from "./Page/TarotReading/TarotReading";
import Shuffle from "./Page/TarotReading/Shuffle";
import TarotResult from "./Page/TarotReading/TarotResult";

//Face Reading
import FaceRead from "./assets/Boxes/Facecard/Faceread";
import Faceresult from "./assets/Boxes/Facecard/Faceresult";
import Timemagicresult from "./assets/Boxes/Facecard/Timemagicresult";
import Ancestors from "./assets/Boxes/Facecard/Ancestors";

//Palm Reading
import Palmreader from "./assets/Boxes/Facecard/Palmreader";
import Palmresult from "./assets/Boxes/Facecard/Palmresult";

//Time Travel
import TimeTravel from "./Page/TimeTravel/TimeTravel";
import FuturePrediction from "./Page/TimeTravel/FuturePrediction";
import SeeYourFuture from "./Page/TimeTravel/SeeYourFuture";
import PastLifePrediction from "./Page/TimeTravel/PastLifePrediction"

//Astrology 
import AstroMain from "./components/Astrology/AstroMain";
import AstroMainChat from "./components/Astrology/AstroMainChat";
import MarriageConsultation from "./components/Astrology/MarriageConsultation";
import HealthHealing from "./components/Astrology/HealthHealing";
import WealthManagement from "./components/Astrology/WealthManagement";
import LoveInsights from "./components/Astrology/LoveInsights";
import EducationalGuidance from "./components/Astrology/EducationalGuidance";
import CareerPath from "./components/Astrology/CareerPath";
import BusinessStrategies from "./components/Astrology/BusinessStrategies";
import FinancePlanning from "./components/Astrology/FinancePlanning";
import LegalAdvice from "./components/Astrology/LegalAdvice";
import RemediesSolution from "./components/Astrology/RemediesSolution";
import KidsFortunePrediction from "./components/Astrology/KidsFortunePrediction";
import ParentingTips from "./components/Astrology/ParentingTips";
import PanchangAnalysis from "./components/Astrology/PanchangAnalysis";
import BirthChartInterpretation from "./components/Astrology/BirthChartInterpretation";
import ShubhMuhurat from "./components/Astrology/ShubhMuhurat";
import PersonalizedPooja from "./components/Astrology/PersonalizedPooja";
import ThetaHealing from "./components/Astrology/ThetaHealing";
import ReikiHealing from "./components/Astrology/ReikiHealing";
import ChakraHealing from "./components/Astrology/ChakraHealing";
import CrystalHealing from "./components/Astrology/CrystalHealing";

//Biorhythm
import LineChart from "./components/Bioryhthm/LineChart";

//Dream Interpretation
import Dream from "./components/Dream/Dream"; 
import DreamInterpretation from "./components/Dream/DreamInterpretation";
import DreamResult from "./components/Dream/DreamResult";
import DreamBook from "./components/Dream/DreamBook";
import DreamHistoryList from "./components/Dream/DreamHistoryList";
import DreamHistory from "./components/Dream/DreamHistory";
import SleepMusic from "./components/SleepMusic/SleepMusic";

//Numerology
import Numerology from './components/Numerology/Numerology';
import LifePathNumber from "./components/Numerology/LifePathNumber";

//Meditation
import Meditation from "./components/meditation/Meditation";
import DailyMeditation from "./components/meditation/DailyMeditation";
import ChakraMeditation from "./components/meditation/ChakraMeditation";
import SleepMeditation from "./components/meditation/SleepMeditation";
import FiveMinMeditation from "./components/meditation/FiveMinMeditation";
import Mindfulness from "./components/meditation/Mindfulness";
import PositiveMeditation from "./components/meditation/PositiveMeditation";
import BeginnerMeditation from "./components/meditation/BeginnerMeditation";
import MentalHealthMeditation from "./components/meditation/MentalHealthMeditation";
import EpicPowerMeditation from "./components/meditation/EpicPowerMeditation";

//Emotional Support
import EmotionalSupport from "./Page/Support/EmotionalSupport";
import AngerManagement from "./Page/Support/AngerManagement";
import Obsession from "./Page/Support/Obsession";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Todays Luck*/}
        <Route path="/todays_luck" element={<TodaysLuck />} />
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/registration_page" element={<Register />} />
        <Route path="/account_page" element={<AccountPage />} />
        {/* HoroScope Kundli FortuneWheel LoveCheck*/}
        <Route path="/horoscope" element={<HoroscopeHome />} />
        {/* <Route path="/horoscopehome" element={<HoroscopeHome />} />  */}
        <Route path="/cardImage" element={<CardImage />} />
        <Route path="/gemini" element={<Gemini />} />
        <Route path="/content" element={<Content />} />
        
        <Route path="/Fortune_Wheel" element={<FortuneWheel />} />
        <Route path="/love_check" element={<LoveCheck />} />

        {/* Tarot Reading*/}
        <Route path="/tarot_reading" element={<TarotReading />} />
        <Route path="/CardSelection" element={<Shuffle />} />
        <Route path="/TarotResult" element={<TarotResult />} />
        
        {/* Face Reading*/}
        <Route path="/faceRead" element={<FaceRead />} />
        <Route path="/Faceresult" element={<Faceresult />} />
        <Route path="/Timemagicresult" element={<Timemagicresult />} />
        <Route path="/Ancestors" element={<Ancestors />} />
        
        {/* Palm Reading*/}
        <Route path="/palmReader" element={<Palmreader />} />
        <Route path="/palmResult" element={<Palmresult />} />
        
        {/* Time Travel*/}
        <Route path="/TimeTravel" element={<TimeTravel />} />
        <Route path="/FuturePrediction" element={<FuturePrediction />} />
        <Route path="/see_your_future" element={<SeeYourFuture />} />
        <Route path="/PastLifePrediction" element={<PastLifePrediction />} />

        {/* Astrology*/}
        <Route path="/AstroMain" element={<AstroMain />} />
        <Route path="/AstroMainChat" element={<AstroMainChat />} />
        <Route path="/marriageConsultation" element={<MarriageConsultation />} />
        <Route path="/healthHealing" element={<HealthHealing />} />
        <Route path="/wealthManagement" element={<WealthManagement />} />
        <Route path="/loveInsights" element={<LoveInsights />} />
        <Route path="/educationalGuidance" element={<EducationalGuidance />} />
        <Route path="/careerPath" element={<CareerPath />} />
        <Route path="/businessStrategies" element={<BusinessStrategies />} />
        <Route path="/financePlanning" element={<FinancePlanning />} />
        <Route path="/legalAdvice" element={<LegalAdvice />} />
        <Route path="/remediesSolutions" element={<RemediesSolution />} />
        <Route path="/kidsFortune" element={<KidsFortunePrediction />} />
        <Route path="/parentingTips" element={<ParentingTips />} />
        <Route path="/panchangAnalysis" element={<PanchangAnalysis />} />
        <Route path="/birthChart" element={<BirthChartInterpretation />} />
        <Route path="/shubhMuhurat" element={<ShubhMuhurat />} />
        <Route path="/personalizedPooja" element={<PersonalizedPooja />} />
        <Route path="/thetaHealing" element={<ThetaHealing />} />
        <Route path="/reikiHealing" element={<ReikiHealing />} />
        <Route path="/chakraHealing" element={<ChakraHealing />} />
        <Route path="/crystalHealing" element={<CrystalHealing />} />

        {/* Biorhythm*/}
        <Route path="/LineChart" element={<LineChart />} />

        {/* Dream Meaning*/}
        <Route path="/dream" element={<Dream />} />
        <Route path="/dream_meaning" element={<DreamInterpretation/>} />
        <Route path="/dream_result" element={<DreamResult />} />
        <Route path="/dream_book" element={<DreamBook />} />
        <Route path="/dream_history_list" element={<DreamHistoryList />} />
        <Route path="/dream_history" element={<DreamHistory />} />
        <Route path="/sleep_music" element={<SleepMusic />} />

        {/* Numerology*/}
        <Route path="/Numerology" element={<Numerology />} />
        <Route path="/lifepathnumber" element={<LifePathNumber />} />
        
        {/* Meditation*/}
        <Route path="/Meditation" element={<Meditation />} />
        <Route path="/MindfullnessMeditation" element={<Mindfulness />} />
        <Route path="/DailyMeditation" element={<DailyMeditation />} />
        <Route path="/ChakraMeditation" element={<ChakraMeditation />} />
        <Route path="/SleepMeditation" element={<SleepMeditation />} />
        <Route path="/5MinsMeditation" element={<FiveMinMeditation />} />
        <Route path="/EpicPowerMeditation" element={<EpicPowerMeditation />} />
        <Route path="/BeginnerMeditation" element={<BeginnerMeditation />} />
        <Route
          path="/MentalHealthMeditation"
          element={<MentalHealthMeditation />}
        />
        <Route
          path="/PositiveMindMeditation"
          element={<PositiveMeditation />}
        />

        {/* Emotional Support*/}
        <Route path="/EmotionalSupport" element={<EmotionalSupport />} />
        <Route path="/Obsession" element={<Obsession />} />
        <Route path="/AngerManagement" element={<AngerManagement />} />
        <Route path="/Loneliness" element={<Loneliness />} />
        <Route path="/SexualWellness" element={<SexualWellness />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Depression" element={<Depression />} />
        <Route path="/Sleep" element={<Sleep />} />
        <Route path="/StressManagement" element={<StressManagement />} />
        <Route path="/PastTrauma" element={<PastTrauma />} />
        <Route path="/SelfEsteemIssues" element={<SelfEsteemIssues />} />
        <Route path="/WorkLifeBalance" element={<WorkLifeBalance />} />
        <Route path="/Grief" element={<Grief />} />
        <Route path="/Done" element={<FinalPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
