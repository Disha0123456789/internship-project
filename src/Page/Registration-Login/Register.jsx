import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "/assets/Registration-Login/images/divine logo vertical.png";
import gIcon from "/assets/Registration-Login/images/google-color-icon.png";
import fIcon from "/assets/Registration-Login/images/facebook-app-round-icon.png";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!validatePassword(formData.password)) {
      alert("Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.");
      return;
    }

    if (!isVerificationSent) {
      // Send verification code
      try {
        const response = await fetch('https://divineconnection.co.in/api/auth/send-verification-code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: formData.email })
        });
        if (response.ok) {
          setIsVerificationSent(true);
          alert('Verification code sent to your email.');
        } else {
          const result = await response.json();
          alert(result.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // Verify code and register user
      try {
        const response = await fetch('https://divineconnection.co.in/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...formData, verificationCode })
        });
        if (response.ok) {
          navigate('/login_page');
        } else {
          const result = await response.json();
          alert(result.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="Register-Page">
      <div className='Register'>
        <img src={logo} alt='logo' className='logo' />
        <div className='register-title'> <h1>Register here</h1><br></br>
          <p>Create Your Account on Divine Connection</p>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              <div className="underline"></div>
              <label>First Name</label>
            </div>
            <div className="input-data">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Last Name</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Email Address</label>
            </div>
            <div className="input-data">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Phone Number</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-data">
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Password</label>
            </div>
            <div className="input-data">
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Confirm Password</label>
            </div>
          </div>

          {isVerificationSent && (
            <div className="form-row">
              <div className="input-data">
                <input type="text" name="verificationCode" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
                <div className="underline"></div>
                <label>Verification Code</label>
              </div>
            </div>
          )}

          <div className="form-row submit-btn">
            <div className="input-data">
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
        <div className="social-login">
          <button className="google">
            <img src={gIcon} alt="google-icon" />
            <span>Sign up with Google</span>
          </button>
          <button className="facebook">
            <img src={fIcon} alt="facebook-icon" />
            <span>Sign up with Facebook</span>
          </button>
        </div>
        <div className="signin-link">
          <p>Already have an account? <Link to="/login_page">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}
