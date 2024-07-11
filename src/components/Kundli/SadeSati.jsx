import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import sadeSatiData from './sadeSati.json'; // Assuming sadeSati.json is in the same directory

function SadeSati() {
    const location = useLocation();
    const [sadeSatiReport, setSadeSatiReport] = useState(null);

    useEffect(() => {
        const dateOfBirthString = location?.state?.dateOfBirth;

        if (dateOfBirthString) {
            try {
                const dateOfBirth = new Date(dateOfBirthString);
                const zodiacSign = getZodiacSign(dateOfBirth);
                console.log('Zodiac Sign:', zodiacSign);

                const report = sadeSatiData.find(report => report.sign === zodiacSign);
                if (report) {
                    setSadeSatiReport(report);
                } else {
                    console.warn('Sade Sati report not found for sign:', zodiacSign);
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
            <div className='Head-Text'>
                <h1>Remedies</h1>
            </div>
            <hr className="hr-tag"></hr>
            {sadeSatiReport && (
                <div>
                    <h3 className="life-report-sign">{sadeSatiReport.sign}</h3>
                    {Object.entries(sadeSatiReport).map(([key, value]) => {
                        if (key === 'sign') return null;

                        return (
                            <div key={key}>
                                <h2 className="life-report-key">{key}</h2>
                                {Object.entries(value).map(([subKey, subValue]) => (
                                    <p className="life-report-para" key={subKey}>{subValue}</p>
                                ))}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    </div>
);
}

export default SadeSati;