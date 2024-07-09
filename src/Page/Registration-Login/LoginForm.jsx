import React from 'react';
import './LoginForm.css';
import google from './images/google-icon.png';
import facebook from './images/facebook-icon.png';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
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
        <form className='login-form'>
          <div className='input-email-password'>
            <input id='email' type="email" required />
            <div className="underline"></div>
            <label htmlFor="">Email</label>
          </div>
          <div className='flex-div'>
            <div className='input-email-password'>
              <input id='password' type="password" required />
              <div className="underline"></div>
              <label htmlFor="">Password</label>
            </div>
            <a href='' className='forgot-password'>Forgot Password?</a>
          </div>
          <div className='flex-div'>
            <button type='submit' id='submit'>Login</button>
            {/* Added Terms and Conditions Message */}
            <p className='terms-message'>
              By signing up, you agree to our <Link to="/TermsAndConditions">Terms and Conditions</Link>, <Link to="/PrivacyPolicy">Privacy Policy</Link>.
            </p>
            <p className='Register-link'>Don't have an account? <Link to="/registration_page">Register</Link></p>
          </div>
          
        </form>
        <div className='login-with'>
          <div className='login-with-text'>
            <hr />
            <h3>or login with </h3>
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
    </div>
  );
}

export default LoginForm;
