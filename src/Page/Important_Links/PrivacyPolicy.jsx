import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
import "./termsANDconditions.css";
const PrivacyPolicy = () => {
  const [terms, setTerms] = useState('');

  useEffect(() => {
    fetch('/assets/important_files_docx/privacy policy.docx')
      .then(response => response.arrayBuffer())
      .then(data => mammoth.convertToHtml({ arrayBuffer: data }))
      .then(result => setTerms(result.value))
      .catch(err => console.error('Error reading docx file:', err));
  }, []);

  return (
    <div className='terms-N-conditions'>
      <h1>Privacy Policy</h1>
      <div className='data-termsNconditions' dangerouslySetInnerHTML={{ __html: terms }} />
    </div>
  );
};

export default PrivacyPolicy;
