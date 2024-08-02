import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactUs.css';

const ContactUs = () => {
  const recaptchaRef = useRef(null); // Create a ref for ReCAPTCHA
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Feedback/Suggestion',
    message: ''
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [formStatus, setFormStatus] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recaptchaValue === null) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    // Handle form submission
    const response = await fetch('https://divineconnection.co.in/api/auth/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, recaptchaValue })
    });

    const result = await response.json();
    if (response.ok) {
      setFormStatus(`Your concern "${formData.subject}" has been sent successfully!`);
      setFormData({
        fullName: '',
        email: '',
        subject: 'Feedback/Suggestion',
        message: ''
      });
      setRecaptchaValue(null); // Clear recaptcha value
      recaptchaRef.current.reset(); // Reset reCAPTCHA widget
    } else {
      setFormStatus(`Error submitting form: ${result.message}`);
    }
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setFormStatus('');
  };

  return (
    <div className='contact-us-cont'>
      <div className="contact-us-container">
        <h2>Tell Us Your Concern</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-us-form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="contact-us-form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="contact-us-form-group">
            <label>Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="Feedback/Suggestion">Feedback/Suggestion</option>
              <option value="Support">Support</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div className="contact-us-form-group">
            <label>Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="contact-us-form-group">
            <ReCAPTCHA
              ref={recaptchaRef} // Assign ref to ReCAPTCHA
              sitekey='6LdjdRcqAAAAAJ0eSlNhECMq5W18HEQuyndZYvRn'
              onChange={handleRecaptchaChange}
            />
          </div>
          <button type="submit" className="contact-us-submit-button">Submit</button>
        </form>
      </div>
      {isPopupOpen && (
        <div className='verification-popup'>
          <div className='verification-content'>
            <h3 style={{ fontWeight: 'bold' }}>Form Submission Status</h3>
            <p>{formStatus}</p>
            <button className='verify-btn' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;