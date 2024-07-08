import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchHoroscope } from '../../../apiService';
import Content from './Content';

import IMAGES11 from '/1st-row/Horoscope/aquarius.png';
import IMAGES1 from '/1st-row/Horoscope/aries.png';
import IMAGES4 from '/1st-row/Horoscope/cancer.png';
import IMAGES10 from '/1st-row/Horoscope/capricorn.png';
import IMAGES3 from '/1st-row/Horoscope/gemini.png';
import IMAGES5 from '/1st-row/Horoscope/leo.png';
import IMAGES7 from '/1st-row/Horoscope/libra.png';
import IMAGES12 from '/1st-row/Horoscope/pisces.png';
import IMAGES9 from '/1st-row/Horoscope/sagittarius.png';
import IMAGES8 from '/1st-row/Horoscope/scorpion.png';
import IMAGES2 from '/1st-row/Horoscope/taurus.png';
import IMAGES6 from '/1st-row/Horoscope/virgo.png';

const rasiImages = {
  Aries: IMAGES1,
  Taurus: IMAGES2,
  Gemini: IMAGES3,
  Cancer: IMAGES4,
  Leo: IMAGES5,
  Virgo: IMAGES6,
  Libra: IMAGES7,
  Scorpio: IMAGES8,
  Sagittarius: IMAGES9,
  Capricorn: IMAGES10,
  Aquarius: IMAGES11,
  Pisces: IMAGES12
};

export default function Gemini() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const rasi = searchParams.get('rasi') || 'Gemini'; // Default to Gemini if no parameter
  const [user, setUser] = useState(rasi);
  const [left, setLeft] = useState(false);
  const [middle, setMiddle] = useState(true);
  const [right, setRight] = useState(false);
  const [content, setContent] = useState('');

  const fetchData = async (time) => {
    try {
      const data = await fetchHoroscope(user, time);
      setContent(data.response);
    } catch (error) {
      setContent('Error fetching horoscope data.');
    }
  };

  useEffect(() => {
    setUser(rasi);
    fetchData('today');
  }, [rasi]);

  const handleClick = (value) => {
    if (value === 'left') {
      setLeft(true);
      setMiddle(false);
      setRight(false);
      fetchData('yesterday');
    } else if (value === 'middle') {
      setLeft(false);
      setMiddle(true);
      setRight(false);
      fetchData('today');
    } else {
      setLeft(false);
      setMiddle(false);
      setRight(true);
      fetchData('tomorrow');
    }
  };

  const getButtonStyle = (isActive) => ({
    backgroundColor: isActive ? '#fcceca' : 'transparent',
    color: isActive ? 'black' : 'gray',
    cursor: 'pointer',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  });

  return (
    <div className='Gemini-container'>
      <div className='Gemini-card'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className="rasi-image-container">
            <img src={rasiImages[user]} alt={user} className="rasi-image" />
          </div>
          <div style={{ height: '30px', display: 'flex', justifyContent: 'center', marginTop:'20px' }}>
            <span className='horo-span' style={{ fontSize: '20px' }}>{user}</span>
          </div>
        </div>
        <hr className='Gemini-Hori_line' style={{ margin: '15px 0px 22px 0px', width: "100%" }} />
        <div className='Gemini-Box' style={{ display: 'flex' }}>
          <div className='Gemini-1' onClick={() => handleClick('left')} style={getButtonStyle(left)}>
            <span className='horo-span'>Yesterday</span>
          </div>
          <div className='Gemini-2' onClick={() => handleClick('middle')} style={getButtonStyle(middle)}>
            <span className='horo-span'>Today</span>
          </div>
          <div className='Gemini-3' onClick={() => handleClick('right')} style={getButtonStyle(right)}>
            <span className='horo-span'>Tomorrow</span>
          </div>
        </div>
        <div className='Content-Box' style={{ marginTop: '22px' }}>
          <Content content={content} />
        </div>
      </div>
    </div>
  );
}
