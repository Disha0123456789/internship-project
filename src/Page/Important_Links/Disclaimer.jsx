import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
import "./termsANDconditions.css";
const Disclaimer = () => {
  const [terms, setTerms] = useState('');

  useEffect(() => {
    fetch('/Disclaimer.docx')
      .then(response => response.arrayBuffer())
      .then(data => mammoth.convertToHtml({ arrayBuffer: data }))
      .then(result => setTerms(result.value))
      .catch(err => console.error('Error reading docx file:', err));
  }, []);

  return (
    <div className='terms-N-conditions'>
      <h1>Disclaimer</h1>
      <div className='data-termsNconditions' dangerouslySetInnerHTML={{ __html: terms }} />
    </div>
  );
};

export default Disclaimer;
