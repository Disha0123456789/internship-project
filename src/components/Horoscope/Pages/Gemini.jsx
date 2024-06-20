import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchHoroscope } from '../../../apiService';
import Content from './Content';

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
        <div style={{ height: '30px', display: 'flex', justifyContent: 'center' }}>
          <span className='horo-span' style={{ fontSize: '20px' }}>{user}</span>
        </div>
        <hr className='Gemini-Hori_line' style={{ margin: '42px 0px 22px 0px', width: "100%" }} />
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