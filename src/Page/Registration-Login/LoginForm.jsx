import React, { useState } from 'react';
import './LoginForm.css';
import google from '/assets/Registration-Login/images/google-icon.png';
import facebook from '/assets/Registration-Login/images/facebook-icon.png';
import logo from '/assets/Registration-Login/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [showNewPasswordFields, setShowNewPasswordFields] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://divineconnection.co.in/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        navigate('/');
      } else {
        const result = await response.json();
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://divineconnection.co.in/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: forgotPasswordEmail })
      });
      if (response.ok) {
        setShowForgotPasswordPopup(false);
        setShowNewPasswordFields(true);
      } else {
        const result = await response.json();
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('https://divineconnection.co.in/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: forgotPasswordEmail, newPassword })
      });
      if (response.ok) {
        alert('Password has been reset successfully.');
        setShowForgotPasswordPopup(false);
        setShowNewPasswordFields(false);
      } else {
        const result = await response.json();
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id='login-main'>
      <div id='login-container'>
        <img id='logo' src={logo} alt="" />
      </div>
      <div id='login-container'>
        <div className="login-textfield">
          <h1 className='h1'>Welcome Back!!</h1>
          <h3 className='h3'>Please Login On Divine Connection</h3>
        </div>
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <div className='input-email-password'>
            <input id='email' type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="underline"></div>
            <label>Email</label>
          </div>
          <div className='flex-div'>
            <div className='input-email-password'>
              <input id='password' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="underline"></div>
              <label>Password</label>
            </div>
            <a href='#' className='forgot-password' onClick={() => setShowForgotPasswordPopup(true)}>Forgot Password?</a>
          </div>
          <div className='flex-div'>
            <button type='submit' id='submit'>Login</button>
            <p className='terms-message'>
              By signing up, you agree to our <Link to="/TermsAndConditions">Terms and Conditions</Link>, <Link to="/PrivacyPolicy">Privacy Policy</Link>.
            </p>
            <p className='Register-link'>Don't have an account? <Link to="/registration_page">Register</Link></p>
          </div>
        </form>
        <div className='login-with'>
          <div className='login-with-text'>
            <hr />
            <h3>or login with</h3>
            <hr />
          </div>
          <div id='icons'>
            <a href=''>
              <img className='google-icon' src={google} alt="" />
            </a>
            <a href="">
              <img className='facebook-icon' src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>

      {showForgotPasswordPopup && (
        <div className='popup-login'>
          <div className='popup-content-login'>
            <h3 className='forget-reset-head'>Forgot Password</h3>
            <form className='forget-email' onSubmit={handleForgotPasswordSubmit}>
              <input className='input-forget' type="email" placeholder="Enter your email" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} required />
              <div className='div-forget-btn'>
                <button className='btn-forget' type="submit">Submit</button>
                <button className='btn-forget' type="button" onClick={() => setShowForgotPasswordPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showNewPasswordFields && (
        <div className='popup-login'>
          <div className='popup-content-login'>
            <h3 className='forget-reset-head'>Reset Password</h3>
            <form className='forget-password' onSubmit={handleResetPasswordSubmit}>
              <input className='input-forget' type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
              <input className='input-forget' type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required />
              <button className='btn-forget' type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default LoginForm;
