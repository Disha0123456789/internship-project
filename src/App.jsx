import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import './App.css';

const MainHome = lazy(() => import('./Page/UserBirthInput/MainHome'));
const TodaysLuck = lazy(() => import('./components/TodaysLuck/TodaysLuck'));
const PoojaHome = lazy(() => import('./components/Shopping/PoojaHome'));
const LoginForm = lazy(() => import('./Page/Registration-Login/LoginForm'));
const Register = lazy(() => import('./Page/Registration-Login/Register'));
const AccountPage = lazy(() => import('./Page/AccountPage/AccountPage'));
const Horoscope = lazy(() => import('./components/Horoscope/Horoscope'));
const KundliHome = lazy(() => import('./components/Kundli/KundliHome'));
const FortuneWheel = lazy(() => import('./components/FortuneWheel/FortuneWheel'));
const LoveCheck = lazy(() => import('./components/LoveCheck/LoveCheck'));
const TarotHome = lazy(() => import('./components/TarotReading/TarotHome'));
const FaceReadHome = lazy(() => import('./components/Facecard/FaceReadHome'));
const Palmreader = lazy(() => import('./components/Facecard/Palmreader'));
const Palmresult = lazy(() => import('./components/Facecard/Palmresult'));
const TimeTravelHome = lazy(() => import('./components/TimeTravel/TimeTravelHome'));
const AstroHome = lazy(() => import('./components/Astrology/AstroHome'));
const BiorhythmHome = lazy(() => import('./components/Bioryhthm/BiorhythmHome'));
const DreamHome = lazy(() => import('./components/Dream/DreamHome'));
const SleepMusic = lazy(() => import('./components/SleepMusic/SleepMusic'));
const NumerologyHome = lazy(() => import('./components/Numerology/NumerologyHome'));
const MeditationHome = lazy(() => import('./components/meditation/MeditationHome'));
const EmotionalSupportHome = lazy(() => import('./components/Support/EmotionalSupportHome'));
const FinalPage = lazy(() => import('./components/Support/FinalPage'));
const TermsAndConditions = lazy(() => import('./Page/Important_Links/TermsAndConditions'));
const AboutUS = lazy(() => import('./Page/Important_Links/AboutUS'));
const PrivacyPolicy = lazy(() => import('./Page/Important_Links/PrivacyPolicy'));
const Disclaimer = lazy(() => import('./Page/Important_Links/Disclaimer'));
const FAQ = lazy(() => import('./Page/Important_Links/FAQ'));
const ContactUs = lazy(() => import('./Page/Important_Links/ContactUs'));


const preloadComponents = () => {
  import('./Page/UserBirthInput/MainHome');
  import('./components/TodaysLuck/TodaysLuck');
  import('./components/Shopping/PoojaHome');
  import('./Page/Registration-Login/LoginForm');
  import('./Page/Registration-Login/Register');
  import('./Page/AccountPage/AccountPage');
  import('./components/Horoscope/Horoscope');
  import('./components/Kundli/KundliHome');
  import('./components/FortuneWheel/FortuneWheel');
  import('./components/LoveCheck/LoveCheck');
  import('./components/TarotReading/TarotHome');
  import('./components/Facecard/FaceReadHome');
  import('./components/Facecard/Palmreader');
  import('./components/Facecard/Palmresult');
  import('./components/TimeTravel/TimeTravelHome');
  import('./components/Astrology/AstroHome');
  import('./components/Bioryhthm/BiorhythmHome');
  import('./components/Dream/DreamHome');
  import('./components/SleepMusic/SleepMusic');
  import('./components/Numerology/NumerologyHome');
  import('./components/meditation/MeditationHome');
  import('./components/Support/EmotionalSupportHome');
  import('./components/Support/FinalPage');
  import('./Page/Important_Links/TermsAndConditions');
  import('./Page/Important_Links/AboutUS');
  import('./Page/Important_Links/PrivacyPolicy');
  import('./Page/Important_Links/Disclaimer');
  import('./Page/Important_Links/FAQ');
  import('./Page/Important_Links/ContactUs');
};


function App() {
  useEffect(() => {
    preloadComponents();

  import('./assets/styles/AccountPage.css');
  import('./assets/styles/AstroMain.css');
  import('./assets/styles/Cards.css');
  import('./assets/styles/Dream.css');
  import('./assets/styles/DreamBook.css');
  import('./assets/styles/DreamHistory.css');
  import('./assets/styles/DreamHistoryList.css');
  import('./assets/styles/DreamInterpretation.css');
  import('./assets/styles/DreamResult.css');
  import('./assets/styles/Future.css');
  import('./assets/styles/Horoscope.css');
  import('./assets/styles/Kundli.css');
  import('./assets/styles/LifePathNumber.css');
  import('./assets/styles/LineChart.css');
  import('./assets/styles/LoginForm.css');
  import('./assets/styles/LoveCheck.css');
  import('./assets/styles/MatchIndicator.css');
  import('./assets/styles/MatchMaking.css');
  import('./assets/styles/meditation.css');
  import('./assets/styles/Numerology.css');
  import('./assets/styles/PastLifePrediction.css');
  import('./assets/styles/Register.css');
  import('./assets/styles/SeeYourFuture.css');
  import('./assets/styles/SleepMusic.css');
  import('./assets/styles/style.css');
  import('./assets/styles/styles.css');
  import('./assets/styles/support.css');
  import('./assets/styles/TimeTravel.css');
  import('./assets/styles/TodaysLuck.css');
  import('./assets/styles/UserBirthInput.css');
  import('./assets/styles/Wheel.css');
  }, []);

  const fallbackComponent = (
    <div className="loading-container">
      <div className="loading-circle"></div>
      Loading...
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={fallbackComponent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MainPage/*" element={<MainHome />} />
          <Route path="/todays_luck" element={<TodaysLuck />} />
          <Route path="/pooja/*" element={<PoojaHome />} />
          <Route path="/login_page" element={<LoginForm />} />
          <Route path="/registration_page" element={<Register />} />
          <Route path="/account_page" element={<AccountPage />} />
          <Route path="/horoscope/*" element={<Horoscope />} />
          <Route path="/kundli/*" element={<KundliHome />} />
          <Route path="/Fortune_Wheel" element={<FortuneWheel />} />
          <Route path="/love_check" element={<LoveCheck />} />
          <Route path="/tarot-reading/*" element={<TarotHome />} />
          <Route path="/faceRead/*" element={<FaceReadHome />} />
          <Route path="/palmReader" element={<Palmreader />} />
          <Route path="/palmResult" element={<Palmresult />} />
          <Route path="/TimeTravel/*" element={<TimeTravelHome />} />
          <Route path="/AstroHome/*" element={<AstroHome />} />
          <Route path="/lineChart/*" element={<BiorhythmHome />} />
          <Route path="/dream/*" element={<DreamHome />} />
          <Route path="/dream/sleep_music" element={<SleepMusic />} />
          <Route path="/numerology/*" element={<NumerologyHome />} />
          <Route path="/meditation/*" element={<MeditationHome />} />
          <Route path="/EmotionalSupport/*" element={<EmotionalSupportHome />} />
          <Route path="/Done" element={<FinalPage />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/AboutUs" element={<AboutUS />} />
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
