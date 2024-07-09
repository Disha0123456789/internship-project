// src/components/Content.jsx

import React from 'react';

const Content = ({ content }) => {
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }

  return (
    <div>
      {Object.entries(content).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '10px' }}>
          <span className='horoscope-title'>{key}</span>
          <p className='horoscope-data'>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
