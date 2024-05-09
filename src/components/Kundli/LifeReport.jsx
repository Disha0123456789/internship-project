import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import lifeReportData from './lifeReport.json'; // Assuming lifeReport.json is in the same directory

function LifeReport() {
    const location = useLocation();
    const [lifeReport, setLifeReport] = useState(null);

    useEffect(() => {
        const dateOfBirthString = location?.state?.dateOfBirth;

        if (dateOfBirthString) {
            try {
                const dateOfBirth = new Date(dateOfBirthString);
                const zodiacSign = getZodiacSign(dateOfBirth);
                console.log('Zodiac Sign:', zodiacSign);

                const report = lifeReportData.find(report => report.sign === zodiacSign);
                if (report) {
                    setLifeReport(report);
                } else {
                    console.warn('Life report not found for sign:', zodiacSign);
                }
            } catch (error) {
                console.error('Error parsing Date of Birth:', error);
            }
        } else {
            console.warn('Date of Birth not found in location state.');
        }
    }, [location]);

    const getZodiacSign = (dateOfBirth) => {
        const month = dateOfBirth.getMonth() + 1;
        const day = dateOfBirth.getDate();

        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            return 'Aquarius';
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            return 'Pisces';
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            return 'Aries';
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            return 'Taurus';
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            return 'Gemini';
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            return 'Cancer';
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return 'Leo';
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            return 'Virgo';
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            return 'Libra';
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            return 'Scorpio';
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            return 'Sagittarius';
        } else {
            return 'Capricorn';
        }
    };

    return (
      <div className="face-result">
          <div className="Know-past">
              <p className="personal-trait-text">Life Report</p>
              <hr className="hr-tag"></hr>
              {lifeReport && (
                  <div>
                      <h3 className="life-report-sign">{lifeReport.sign}</h3>
                      {Object.entries(lifeReport).map(([key, value]) => {
                          if (key === 'sign') return null;
  
                          return (
                              <div key={key}>
                                  <h2 className="life-report-key">{key}</h2>
                                  {Object.entries(value).map(([paraKey, paraValue]) => {
                                      if (typeof paraValue === 'object') {
                                          return (
                                              <div key={paraKey}>
                                                  <h3 className="life-report-subkey">{paraKey}</h3>
                                                  {Object.values(paraValue).map((val, index) => (
                                                      <p key={index} className="life-report-para">{val}</p>
                                                  ))}
                                              </div>
                                          );
                                      } else {
                                          return (
                                              <p key={paraKey} className="life-report-para">{paraValue}</p>
                                          );
                                      }
                                  })}
                              </div>
                          );
                      })}
                  </div>
              )}
          </div>
      </div>
  );
  
}

export default LifeReport;
