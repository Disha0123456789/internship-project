import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AstroMain from './AstroMain'; // Directly import AstroMain

// Lazy load the other components
const AstroMainChat = lazy(() => import('./AstroMainChat'));
const MarriageConsultation = lazy(() => import('./MarriageConsultation'));
const HealthHealing = lazy(() => import('./HealthHealing'));
const WealthManagement = lazy(() => import('./WealthManagement'));
const LoveInsights = lazy(() => import('./LoveInsights'));
const EducationalGuidance = lazy(() => import('./EducationalGuidance'));
const CareerPath = lazy(() => import('./CareerPath'));
const BusinessStrategies = lazy(() => import('./BusinessStrategies'));
const FinancePlanning = lazy(() => import('./FinancePlanning'));
const LegalAdvice = lazy(() => import('./LegalAdvice'));
const RemediesSolution = lazy(() => import('./RemediesSolution'));
const KidsFortunePrediction = lazy(() => import('./KidsFortunePrediction'));
const ParentingTips = lazy(() => import('./ParentingTips'));
const PanchangAnalysis = lazy(() => import('./PanchangAnalysis'));
const BirthChartInterpretation = lazy(() => import('./BirthChartInterpretation'));
const ShubhMuhurat = lazy(() => import('./ShubhMuhurat'));
const PersonalizedPooja = lazy(() => import('./PersonalizedPooja'));
const ThetaHealing = lazy(() => import('./ThetaHealing'));
const ReikiHealing = lazy(() => import('./ReikiHealing'));
const ChakraHealing = lazy(() => import('./ChakraHealing'));
const CrystalHealing = lazy(() => import('./CrystalHealing'));

// Function to preload components
const preloadComponents = () => {
  import('./AstroMainChat');
  import('./MarriageConsultation');
  import('./HealthHealing');
  import('./WealthManagement');
  import('./LoveInsights');
  import('./EducationalGuidance');
  import('./CareerPath');
  import('./BusinessStrategies');
  import('./FinancePlanning');
  import('./LegalAdvice');
  import('./RemediesSolution');
  import('./KidsFortunePrediction');
  import('./ParentingTips');
  import('./PanchangAnalysis');
  import('./BirthChartInterpretation');
  import('./ShubhMuhurat');
  import('./PersonalizedPooja');
  import('./ThetaHealing');
  import('./ReikiHealing');
  import('./ChakraHealing');
  import('./CrystalHealing');
};

const AstroHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      {/* Nested routes for Astrology services */}
      <Routes>
        <Route path="/" element={<AstroMain />} />
        
        {/* Lazy-loaded routes with Suspense fallback */}
        <Route path="AstroMainChat" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <AstroMainChat />
          </Suspense>
        } />
        <Route path="marriageConsultation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <MarriageConsultation />
          </Suspense>
        } />
        <Route path="healthHealing" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <HealthHealing />
          </Suspense>
        } />
        <Route path="wealthManagement" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <WealthManagement />
          </Suspense>
        } />
        <Route path="loveInsights" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <LoveInsights />
          </Suspense>
        } />
        <Route path="educationalGuidance" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <EducationalGuidance />
          </Suspense>
        } />
        <Route path="careerPath" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <CareerPath />
          </Suspense>
        } />
        <Route path="businessStrategies" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <BusinessStrategies />
          </Suspense>
        } />
        <Route path="financePlanning" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <FinancePlanning />
          </Suspense>
        } />
        <Route path="legalAdvice" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <LegalAdvice />
          </Suspense>
        } />
        <Route path="remediesSolutions" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <RemediesSolution />
          </Suspense>
        } />
        <Route path="kidsFortune" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <KidsFortunePrediction />
          </Suspense>
        } />
        <Route path="parentingTips" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <ParentingTips />
          </Suspense>
        } />
        <Route path="panchangAnalysis" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <PanchangAnalysis />
          </Suspense>
        } />
        <Route path="birthChart" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <BirthChartInterpretation />
          </Suspense>
        } />
        <Route path="shubhMuhurat" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <ShubhMuhurat />
          </Suspense>
        } />
        <Route path="personalizedPooja" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <PersonalizedPooja />
          </Suspense>
        } />
        <Route path="thetaHealing" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <ThetaHealing />
          </Suspense>
        } />
        <Route path="reikiHealing" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <ReikiHealing />
          </Suspense>
        } />
        <Route path="chakraHealing" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <ChakraHealing />
          </Suspense>
        } />
        <Route path="crystalHealing" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <CrystalHealing />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default AstroHome;
