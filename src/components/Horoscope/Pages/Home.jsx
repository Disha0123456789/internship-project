import React from 'react';
import CardImage from './CardImage';
import IMAGES11 from '../images/aquarius.png';
import IMAGES1 from '../images/aries.png';
import IMAGES4 from '../images/cancer.png';
import IMAGES10 from '../images/capricorn.png';
import IMAGES3 from '../images/gemini.png';
import IMAGES5 from '../images/leo.png';
import IMAGES7 from '../images/libra.png';
import IMAGES12 from '../images/pisces.png';
import IMAGES9 from '../images/sagittarius.png';
import IMAGES8 from '../images/scorpion.png';
import IMAGES2 from '../images/taurus.png';
import IMAGES6 from '../images/virgo.png';
import '../Horoscope.css';

function Home() {
  const urls = [
    '/gemini?rasi=Aries',
    '/gemini?rasi=Taurus',
    '/gemini?rasi=Gemini',
    '/gemini?rasi=Cancer',
    '/gemini?rasi=Leo',
    '/gemini?rasi=Virgo',
    '/gemini?rasi=Libra',
    '/gemini?rasi=Scorpio',
    '/gemini?rasi=Sagittarius',
    '/gemini?rasi=Capricorn',
    '/gemini?rasi=Aquarius',
    '/gemini?rasi=Pisces',
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
