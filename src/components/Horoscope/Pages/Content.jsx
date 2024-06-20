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
          <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>{key}</span>
          <p style={{ color: '#555' }}>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
