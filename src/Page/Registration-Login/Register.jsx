import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/assets/Registration-Login/images/divine logo vertical.png";
import gIcon from "/assets/Registration-Login/images/google-color-icon.png";
import fIcon from "/assets/Registration-Login/images/facebook-app-round-icon.png";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('https://divineconnection.co.in:8005/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNo: formData.phoneNo,
          password: formData.password
        })
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
              <input type="text" name="email" value={formData.email} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Email</label>
            </div>

            <div className="input-data">
              <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
              <div className="underline"></div>
              <label>Phone No.</label>
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

          <div className="form-row-last">
            <input type="submit" id='register-submit' value="Register" />
            <p className='register-terms-message'>
              By signing up, you agree to our <Link to="/TermsAndConditions">Terms and Conditions</Link>, <Link to="/PrivacyPolicy">Privacy Policy</Link>.
            </p>
            <p className='register-Register-link'>Already have an account ? <Link to="/login_page">Login</Link></p>
          </div>
          <div className='login-text-two'>
            <hr />
            <p>or Signup With</p>
            <hr />
          </div>
          <div className='sign-up-icons'>
            <a href="https://g.co/kgs/BCKMD8f">
              <img src={gIcon} alt="google" width={40} height={40} />
            </a>
            <a href='https://www.facebook.com/'>
              <img src={fIcon} alt="facebook" width={40} height={40} />
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
