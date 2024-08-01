import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AstroMain from './AstroMain';
import AstroMainChat from './AstroMainChat';
import MarriageConsultation from './MarriageConsultation';
import HealthHealing from './HealthHealing';
import WealthManagement from './WealthManagement';
import LoveInsights from './LoveInsights';
import EducationalGuidance from './EducationalGuidance';
import CareerPath from './CareerPath';
import BusinessStrategies from './BusinessStrategies';
import FinancePlanning from './FinancePlanning';
import LegalAdvice from './LegalAdvice';
import RemediesSolution from './RemediesSolution';
import KidsFortunePrediction from './KidsFortunePrediction';
import ParentingTips from './ParentingTips';
import PanchangAnalysis from './PanchangAnalysis';
import BirthChartInterpretation from './BirthChartInterpretation';
import ShubhMuhurat from './ShubhMuhurat';
import PersonalizedPooja from './PersonalizedPooja';
import ThetaHealing from './ThetaHealing';
import ReikiHealing from './ReikiHealing';
import ChakraHealing from './ChakraHealing';
import CrystalHealing from './CrystalHealing';

const AstroHome = () => {
  return (
    <div>
      {/* Nested routes for Astrology services */}
      <Routes>
        <Route path="/" element={<AstroMain />} />
        <Route path="AstroMainChat" element={<AstroMainChat />} />
        <Route path="marriageConsultation" element={<MarriageConsultation />} />
        <Route path="healthHealing" element={<HealthHealing />} />
        <Route path="wealthManagement" element={<WealthManagement />} />
        <Route path="loveInsights" element={<LoveInsights />} />
        <Route path="educationalGuidance" element={<EducationalGuidance />} />
        <Route path="careerPath" element={<CareerPath />} />
        <Route path="businessStrategies" element={<BusinessStrategies />} />
        <Route path="financePlanning" element={<FinancePlanning />} />
        <Route path="legalAdvice" element={<LegalAdvice />} />
        <Route path="remediesSolutions" element={<RemediesSolution />} />
        <Route path="kidsFortune" element={<KidsFortunePrediction />} />
        <Route path="parentingTips" element={<ParentingTips />} />
        <Route path="panchangAnalysis" element={<PanchangAnalysis />} />
        <Route path="birthChart" element={<BirthChartInterpretation />} />
        <Route path="shubhMuhurat" element={<ShubhMuhurat />} />
        <Route path="personalizedPooja" element={<PersonalizedPooja />} />
        <Route path="thetaHealing" element={<ThetaHealing />} />
        <Route path="reikiHealing" element={<ReikiHealing />} />
        <Route path="chakraHealing" element={<ChakraHealing />} />
        <Route path="crystalHealing" element={<CrystalHealing />} />
      </Routes>
    </div>
  );
};

export default AstroHome;
