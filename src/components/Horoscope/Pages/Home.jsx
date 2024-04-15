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
    'http://localhost:3000/gemini?rasi=Aries',
    'http://localhost:3000/gemini?rasi=Taurus',
    'http://localhost:3000/gemini?rasi=Gemini',
    'http://localhost:3000/gemini?rasi=Cancer',
    'http://localhost:3000/gemini?rasi=Leo',
    'http://localhost:3000/gemini?rasi=Virgo',
    'http://localhost:3000/gemini?rasi=Libra',
    'http://localhost:3000/gemini?rasi=Scorpion',
    'http://localhost:3000/gemini?rasi=Sagittarius',
    'http://localhost:3000/gemini?rasi=Capricorn',
    'http://localhost:3000/gemini?rasi=Aquarius',
    'http://localhost:3000/gemini?rasi=Pisces',
  ];
  const names = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Lidra',
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

    <div className='container'>
      <div className='card'>
        <div className='Heading'><h3 >
          Horoscope
        </h3>
        </div>

        <hr className='horigental-line'></hr>
        <div className='img-container'>
        {
          urls.map((i,index)=><CardImage myLink={urls[index]} imagUrl={imgs[index]} name={names[index]} />)
        }
        </div>
      </div>
      

    </div>
    
   
  );
}

export default Home;
