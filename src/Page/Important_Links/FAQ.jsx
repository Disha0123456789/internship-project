import React, { useState, useEffect } from 'react';
import './FAQ.css'; // Import the CSS file for styling

const FAQ = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/faqs.json'); // Fetch the JSON file
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching the FAQ data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const createMarkup = (html) => {
    const paragraphs = html.split('<br>').map((text, index) => `<p key=${index}>${text.trim()}</p>`);
    return { __html: paragraphs.join('') };
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions (FAQs)</h1>
      {data.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-arrow">{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer" dangerouslySetInnerHTML={createMarkup(faq.answer)} />}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
