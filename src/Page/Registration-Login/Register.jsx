import React from 'react'
import logo from "./images/divine logo vertical.png";
import gIcon from "./images/google-color-icon.png";
import fIcon from "./images/facebook-app-round-icon.png";
import "./Register.css";
import { Link } from "react-router-dom"


export default function Register() {
    return (
        <div className="Register-Page">
            <div className='Register'>
                <img src={logo} alt='logo' className='logo' />
                <div> <h1>Register here</h1><br></br>
                    <p>Create Your Account on Divine Connection</p>
                </div>
            </div>

            <div class="form-container">
                <form action="#">
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" required />
                            <div class="underline"></div>
                            <label for="">First Name</label>
                        </div>

                        <div class="input-data">
                            <input type="text" required />
                            <div class="underline"></div>
                            <label for="">Last Name</label>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" required />
                            <div class="underline"></div>
                            <label for="">Email</label>
                        </div>

                        <div class="input-data">
                            <input type="text" required />
                            <div class="underline"></div>
                            <label for="">Phone No.</label>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" required />
                            <div class="underline"></div>
                            <label for="">Password</label>
                        </div>

                        <div class="input-data">
                            <input type="text" required />
                            <div class="underline"></div>
                            <label for="">Confirm Password</label>
                        </div>
                    </div>

                    <div class="form-row-last">
                        <input type="submit" id='submit' value="Register" />
                        </div>
                            <p className='login-text'><pre>Already have an account ?   </pre><a href='/'>Login</a></p>
                            <div className='login-text-two'>
                                <hr />
                                <p>or Signup With</p>
                                <hr />
                            </div>
                            <div className='sign-up-icons'>
                                <a href = "https://g.co/kgs/BCKMD8f">
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
