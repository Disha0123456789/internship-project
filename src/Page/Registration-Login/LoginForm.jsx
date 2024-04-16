import React from 'react'
import '../loginForm/LoginForm.css'
import google from './images/google-icon.png'
import facebook from './images/facebook-icon.png'
import logo from './images/logo.png'
import { useNavigate } from "react-router-dom";  
function LoginForm() {
  const navigate = useNavigate();
  return (
    <div id='login-main'>
      <div id='login-container'>
        <img id='logo' src={logo} alt="" />
      </div>
      <div id='login-container'>
        <div>
          <h1 className='h1'>Welcome Back!!</h1>
          <h3 className='h3'>Please Login On Divine Connection</h3>
        </div>
        <form className='login-form'>
          <div className='input-email-password'>
            <input id='email' type="email" required/>
            <div class="underline"></div>
            <label for="">Email</label>
          </div>
          <div className='flex-div'>
          <div className='input-email-password'>
            <input id='password' type="password" required/>
            <div class="underline"></div>
            <label for="">Password</label>
          </div>
            <a href='' className='forgot-password'>Forgot Password?</a>
          </div>
          <div className='flex-div'>
            <button type='submit' id='submit'>Login</button>
            <p className='Register-link'>Don't have an account? <a onClick={() => navigate("/registration_page")}>Register</a></p>
          </div>
        </form>
        <div>
          <h3>or login with</h3>
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
  )
}

export default LoginForm
