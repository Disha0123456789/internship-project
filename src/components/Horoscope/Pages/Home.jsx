import React from 'react';
import CardImage from './CardImage';
import IMAGES11 from '/assets/1st-row/Horoscope/aquarius.png';
import IMAGES1 from '/assets/1st-row/Horoscope/aries.png';
import IMAGES4 from '/assets/1st-row/Horoscope/cancer.png';
import IMAGES10 from '/assets/1st-row/Horoscope/capricorn.png';
import IMAGES3 from '/assets/1st-row/Horoscope/gemini.png';
import IMAGES5 from '/assets/1st-row/Horoscope/leo.png';
import IMAGES7 from '/assets/1st-row/Horoscope/libra.png';
import IMAGES12 from '/assets/1st-row/Horoscope/pisces.png';
import IMAGES9 from '/assets/1st-row/Horoscope/sagittarius.png';
import IMAGES8 from '/assets/1st-row/Horoscope/scorpion.png';
import IMAGES2 from '/assets/1st-row/Horoscope/taurus.png';
import IMAGES6 from '/assets/1st-row/Horoscope/virgo.png';
//import '../Horoscope.css';

function Home() {
  const urls = [
    '/horoscope/gemini?rasi=Aries',
    '/horoscope/gemini?rasi=Taurus',
    '/horoscope/gemini?rasi=Gemini',
    '/horoscope/gemini?rasi=Cancer',
    '/horoscope/gemini?rasi=Leo',
    '/horoscope/gemini?rasi=Virgo',
    '/horoscope/gemini?rasi=Libra',
    '/horoscope/gemini?rasi=Scorpio',
    '/horoscope/gemini?rasi=Sagittarius',
    '/horoscope/gemini?rasi=Capricorn',
    '/horoscope/gemini?rasi=Aquarius',
    '/horoscope/gemini?rasi=Pisces',
  ];
  
  const names = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces'
  ];
  
  const imgs = [
    IMAGES1,
    IMAGES2,
    IMAGES3,
    IMAGES4,
    IMAGES5,
    IMAGES6,
    IMAGES7,
    IMAGES8,
    IMAGES9,
    IMAGES10,
    IMAGES11,
    IMAGES12
  ];

  return (
    <div className='horoscope-container'>
      <div className='horoscope-card'>
        <div className='Head-horo'>
          <h3>Horoscope</h3>
        </div>
        <hr className='horigental-line'></hr>
        <div className='horo-img-container'>
          {urls.map((url, index) => (
            <CardImage key={index} myLink={url} imagUrl={imgs[index]} name={names[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
