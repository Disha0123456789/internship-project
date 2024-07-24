import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Feedback/Suggestion',
    message: ''
  });

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [formStatus, setFormStatus] = useState('');

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
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...formData, recaptchaValue })
    });

    const result = await response.json();
    if (response.ok) {
      setFormStatus('Form submitted successfully.');
    } else {
      setFormStatus('Error submitting form: ' + result.message);
    }
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
              sitekey='6LdjdRcqAAAAAJ0eSlNhECMq5W18HEQuyndZYvRn'
              onChange={handleRecaptchaChange}
            />
          </div>
          <button type="submit" className="contact-us-submit-button">Submit</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
