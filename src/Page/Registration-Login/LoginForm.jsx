import React, { useState } from 'react';
import './LoginForm.css';
import google from '/assets/Registration-Login/images/google-icon.png';
import facebook from '/assets/Registration-Login/images/facebook-icon.png';
import logo from '/assets/Registration-Login/images/logo.png';
import showPasswordImg from '/assets/Registration-Login/images/show_eye.png'; // Replace with the path to your show password image
import hidePasswordImg from '/assets/Registration-Login/images/hide_eye.png';
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
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationPopupOpen, setIsVerificationPopupOpen] = useState(false);
  const [sentVerificationCode, setSentVerificationCode] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://divineconnection.co.in/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        navigate('/');
      } else {
        alert(data.message);
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: forgotPasswordEmail }),
      });
      if (response.ok) {
        try {
          const response = await fetch('https://divineconnection.co.in/api/auth/send-verification-code', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: forgotPasswordEmail }),
          });
    
          if (response.ok) {
            const result = await response.json();
            setSentVerificationCode(result.verificationCode);
            setShowForgotPasswordPopup(false);
            setIsVerificationPopupOpen(true);
          } else {
            const result = await response.json();
            alert(result.message);
          }
        } catch (error) {
          console.error('Error:', error);
        }
        
        //setIsVerificationPopupOpen(true);
        //setShowNewPasswordFields(true);
      } else {
        const result = await response.json();
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (verificationCode === sentVerificationCode) {
      setIsVerificationPopupOpen(false); 
      setShowNewPasswordFields(true);
    } else {
      alert("Verification code is incorrect. Please try again.");
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: forgotPasswordEmail, newPassword }),
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
              <input
                id='password'
                type={isPasswordVisible ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="underline"></div>
              <label>Password</label>
              {password && (
                <img
                  src={isPasswordVisible ? hidePasswordImg : showPasswordImg}
                  alt={isPasswordVisible ? 'Hide password' : 'Show password'}
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                />
              )}
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

      {isVerificationPopupOpen && (
        <div className='verification-popup'>
          <div className='verification-content'>
            <h3 style={{ fontWeight: 'bold' }}>Email Verification</h3>
            <form className='verification-form' onSubmit={handleVerifyCode}>
              <input 
                className='verification-input'
                type="text" 
                placeholder="Enter verification code" 
                value={verificationCode} 
                onChange={(e) => setVerificationCode(e.target.value)} 
                required 
              />
              <div className='verify-btn-container'>
                <button className='verify-btn' type="submit">Verify</button>
                <button className='verify-btn' type="button" onClick={() => setIsVerificationPopupOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      \
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
