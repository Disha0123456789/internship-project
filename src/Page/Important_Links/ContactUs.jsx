import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Feedback/Suggestion',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
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
                <input type="checkbox" required /> I'm not a robot
            </div>
            <button type="submit" className="contact-us-submit-button">Submit</button>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;
