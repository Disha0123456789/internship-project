import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/styles/AccountPage.css';
import './assets/styles/AstroMain.css';
import './assets/styles/Cards.css';
//import './assets/styles/carousel.css';
import './assets/styles/Dream.css';
import './assets/styles/DreamBook.css';
import './assets/styles/DreamHistory.css';
import './assets/styles/DreamHistoryList.css';
import './assets/styles/DreamInterpretation.css';
import './assets/styles/DreamResult.css';
import './assets/styles/Future.css';
import './assets/styles/Horoscope.css';
import './assets/styles/Kundli.css';
import './assets/styles/LifePathNumber.css';
import './assets/styles/LineChart.css';
import './assets/styles/LoginForm.css';
import './assets/styles/LoveCheck.css';
import './assets/styles/MatchIndicator.css';
import './assets/styles/MatchMaking.css';
import './assets/styles/meditation.css';
//import './assets/styles/newFutureBox.css';
import './assets/styles/Numerology.css';
import './assets/styles/PastLifePrediction.css';
import './assets/styles/Register.css';
import './assets/styles/SeeYourFuture.css';
import './assets/styles/SleepMusic.css';
import './assets/styles/style.css';
import './assets/styles/styles.css';
import './assets/styles/support.css';
import './assets/styles/TimeTravel.css';
import './assets/styles/TodaysLuck.css';
import './assets/styles/UserBirthInput.css';
import './assets/styles/Wheel.css';
// Home Page
import Home from './Page/Home/Home';

// User Birth Input
const MainHome = lazy(() => import('./Page/UserBirthInput/MainHome'));

// Todays Luck
const TodaysLuck = lazy(() => import('./components/TodaysLuck/TodaysLuck'));

// Shopping
const PoojaHome = lazy(() => import('./components/Shopping/PoojaHome'));

// Login And Registration
const LoginPage = lazy(() => import('./Page/Registration-Login/LoginForm'));
const Register = lazy(() => import('./Page/Registration-Login/Register'));

// Account Page
const AccountPage = lazy(() => import('./Page/AccountPage/AccountPage'));

// Horoscope
const HoroscopeHome = lazy(() => import('./components/Horoscope/Horoscope'));

// Kundli
const KundliHome = lazy(() => import('./components/Kundli/KundliHome'));

// Fortune Wheel
const FortuneWheel = lazy(() => import('./components/FortuneWheel/FortuneWheel'));

// Love Check
const LoveCheck = lazy(() => import('./components/LoveCheck/LoveCheck'));

// Tarot Reading
const TarotHome = lazy(() => import('./components/TarotReading/TarotHome'));

// Face Reading
const FaceReadHome = lazy(() => import('./components/Facecard/FaceReadHome'));

// Palm Reading
const Palmreader = lazy(() => import('./components/Facecard/Palmreader'));
const Palmresult = lazy(() => import('./components/Facecard/Palmresult'));

// Time Travel
const TimeTravelHome = lazy(() => import('./components/TimeTravel/TimeTravelHome'));

// Astrology
const AstroHome = lazy(() => import('./components/Astrology/AstroHome'));

// Biorhythm
const BiorhythmHome = lazy(() => import('./components/Bioryhthm/BiorhythmHome'));

// Dream Interpretation
const DreamHome = lazy(() => import('./components/Dream/DreamHome'));
const SleepMusic = lazy(() => import('./components/SleepMusic/SleepMusic'));

// Numerology
const NumerologyHome = lazy(() => import('./components/Numerology/NumerologyHome'));

// Meditation
const MeditationHome = lazy(() => import('./components/meditation/MeditationHome'));

// Emotional Support
const EmotionalSupportHome = lazy(() => import('./components/Support/EmotionalSupportHome'));
const FinalPage = lazy(() => import('./components/Support/FinalPage'));

// Important Links
const TermsAndConditions = lazy(() => import('./Page/Important_Links/TermsAndConditions'));
const AboutUs = lazy(() => import('./Page/Important_Links/AboutUS'));
const PrivacyPolicy = lazy(() => import('./Page/Important_Links/PrivacyPolicy'));
const Disclaimer = lazy(() => import('./Page/Important_Links/Disclaimer'));
const FAQ = lazy(() => import('./Page/Important_Links/FAQ'));
const ContactUs = lazy(() => import('./Page/Important_Links/ContactUs'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="loading-container">
        <div className="loading-circle"></div>
          Loading...
        </div>
      }>

      <Routes>
        
        <Route path="/" element={<Home />} />

        {/* Other routes />*/}
        <Route path="/MainPage/*" element={<MainHome />} />

        {/* Todays Luck*/}
        <Route path="/todays_luck" element={<TodaysLuck />} />

        {/* Shopping */}
        <Route path="/pooja/*" element={<PoojaHome />} />
        
        {/* Login-Registration Account */}
        <Route path="/login_page" element={<LoginPage />} />
        <Route path="/registration_page" element={<Register />} />
        <Route path="/account_page" element={<AccountPage />} />

        {/* HoroScope Kundli FortuneWheel LoveCheck */}
        <Route path="/horoscope/*" element={<HoroscopeHome />} /> 
        <Route path="/kundli/*" element={<KundliHome />} />
        <Route path="/Fortune_Wheel" element={<FortuneWheel />} />
        <Route path="/love_check" element={<LoveCheck />} />

        {/* Tarot Reading */}
        <Route path="/tarot-reading/*" element={<TarotHome />} />
        
        {/* Face Reading */}
        <Route path="/faceRead/*" element={<FaceReadHome />} />
        
        {/* Palm Reading */}
        <Route path="/palmReader" element={<Palmreader />} />
        <Route path="/palmResult" element={<Palmresult />} />
        
        {/* Time Travel */}
        <Route path="/TimeTravel/*" element={<TimeTravelHome />} />

        {/* Astrology */}
        <Route path="/AstroHome/*" element={<AstroHome />} />

        {/* Biorhythm */}
        <Route path="/lineChart/*" element={<BiorhythmHome />} />

        {/* Dream Meaning */}
        <Route path="/dream/*" element={<DreamHome />} />
        <Route path="/dream/sleep_music" element={<SleepMusic />} />

        {/* Numerology */}
        <Route path="/numerology/*" element={<NumerologyHome />} />
        
        {/* Meditation */}
        <Route path="/meditation/*" element={<MeditationHome />} />
        

        {/* Emotional Support */}
        <Route path="/EmotionalSupport/*" element={<EmotionalSupportHome />} />
        <Route path="/Done" element={<FinalPage />} />

        {/* Important Links */}
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
