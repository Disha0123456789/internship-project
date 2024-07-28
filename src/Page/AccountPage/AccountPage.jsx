import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"; // Make sure to install jwt-decode if not installed
import './AccountPage.css';
import divineLogo from '/assets/AcountPage/images/divine logo vertical.png';
import logoBackground from '/assets/AcountPage/images/pink_design_cutout.png';
import dummy from './dummy.json';
import code from './code.json';

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Form = () => {
  const [state, setState] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [city, setCity] = useState('');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [dob, setDob] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const [isVerificationPopupOpen, setIsVerificationPopupOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [sentVerificationCode, setSentVerificationCode] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  
  const formatDate = (isoDateString) => {
    if (!isoDateString) return '';
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      const email_id = decodedToken.email;

      const response = await axios.get('https://divineconnection.co.in/api/auth/user-data', {
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Email': email_id
        },
        withCredentials: true
      });

      const { first_name, last_name, email, phone, dob, birth_place, gender } = response.data;
      setUserData({
        firstName: first_name,
        lastName: last_name,
        email,
        phone
      });

      setDob(formatDate(dob));
      setBirthPlace(birth_place || '');
      setGender(gender || '');
      setIsAuthenticated(true);
      setNewEmail(email);
      setState(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      if (error.response && error.response.status === 401) {
        setIsAuthenticated(false);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
      fetchUserData();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const editDetails = () => {
    setState(false);
  };

  const saveDetails = async () => {
    if (userData.email !== newEmail) {
      try {
        // Send verification code to old email
        const response = await axios.post('https://divineconnection.co.in/api/auth/send-verification-code', {
          email: userData.email
        });
  
        if (response.status === 200) {
          const { verificationCode } = response.data;
          setSentVerificationCode(verificationCode);
          setNewEmail(userData.email);
          setIsVerificationPopupOpen(true);
        } else {
          alert('Failed to send verification code');
        }
      } catch (error) {
        console.error('Error sending verification code:', error);
      }
    } else {
      // Proceed with saving details if the email hasn't changed
      await updateUserData();
    }
  };
  
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (verificationCode === sentVerificationCode) {
      try {
        await updateUserData();
        setIsVerificationPopupOpen(false);
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    } else {
      alert("Verification code is incorrect. Please try again.");
    }
  };
  
  const updateUserData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const updateResponse = await axios.put('https://divineconnection.co.in/api/auth/update-user', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        dob,
        birthPlace,
        gender
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (updateResponse.status === 200) {
        // If a new token is returned, update it in local storage
        if (updateResponse.data.newToken) {
          localStorage.setItem('authToken', updateResponse.data.newToken);
        }
        alert('User details updated successfully');
      } else {
        alert('Failed to update user details');
      }

      setState(true);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleCityInput = useCallback(
    debounce((input) => {
      setCity(input);
    }, 300),
    []
  );

  const handleBirthPlaceChange = (selectedOption) => {
    setBirthPlace(selectedOption ? selectedOption.value : '');
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const flattenedCities = useMemo(() => {
    return dummy.flatMap(country => 
      country.cities.map(city => ({
        city,
        country: country.country
      }))
    );
  }, []);

  const filteredData = useMemo(() => {
    return flattenedCities.filter(item => 
      item.city.toLowerCase().startsWith(city.toLowerCase())
    ).slice(0, 100);
  }, [city, flattenedCities]);

  const options = code.map((e) => ({
    value: e.dial_code,
    label: e.dial_code,
  }));

  const cityOptions = filteredData.map((e) => ({
    value: e.city,
    label: `${e.city}, ${e.country}`,
  }));

  const handleDeleteAccount = () => {
    const token = localStorage.getItem("authToken");

    fetch('https://divineconnection.co.in/api/auth/delete-account', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          localStorage.removeItem("authToken");
          setIsDeletePopupOpen(false);
          navigate("/registration_page");
        } else {
          console.error('Failed to delete account');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true);
  };

  return (
    <div className='Account-page1'>
      {!isAuthenticated ? (
        <div className='login-message'>
          <h2 className='login-msg-h2'>Please login before accessing the Account info!</h2>
          <button className='login-msg-btn' onClick={() => navigate('/login_page')}>Login</button>
        </div>
      ) : (
        <div className='Account-page'>
          <div className='Account-page-image'>
            <img src={logoBackground} className="logo-background" />
            <img
              src={divineLogo}
              style={{ position: 'absolute', left: '7%', width: '80%' }}
              className='Account-logo-img'
            />
          </div>
          <div className='Account-page-details'>
            <div className="account-title">Edit Your Account</div>
            <form className="Account-form">
              <div className="change">
                <label htmlFor="firstName" className="label">
                  First Name:-
                </label>
                <input
                  type="text"
                  className="Account-input"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  disabled={state}
                />
              </div>
              <div className="change">
                <label htmlFor="lastName" className="label">
                  Last Name:-
                </label>
                <input
                  type="text"
                  className="Account-input"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  disabled={state}
                />
              </div>
              <div className="change">
                <label htmlFor="email" className="label">
                  Email:-
                </label>
                <input
                  type="email"
                  className="Account-input"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  disabled={state}
                />
              </div>
              <div className="change">
                <label htmlFor="phone" className="label">
                  Contact No :-
                </label>
                <Select
                  className="react-select-container"
                  options={options}
                  placeholder="+91"
                />
                <input
                  type="number"
                  className="number-input"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  disabled={state}
                />
              </div>
              <div className="change">
                <label htmlFor="dob" className='label'>Date Of Birth :-</label>
                <input
                  type="date"
                  className="Account-input"
                  value={dob}
                  onChange={handleDobChange}
                  disabled={state}
                />
              </div>
              <div className="change">
                <label htmlFor="birthPlace" className='label'>Place Of Birth :-</label>
                <Select
                  className="react-select-city"
                  options={cityOptions}
                  placeholder="Search for city..."
                  isSearchable
                  onInputChange={handleCityInput}
                  onChange={handleBirthPlaceChange}
                  value={cityOptions.find(option => option.value === birthPlace)}
                />
              </div>
              <div className="change">
                <label htmlFor="gender" className='label'>Gender :-</label>&nbsp;
                <input
                  type="radio"
                  className="Account-input"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                  disabled={state}
                /> Male
                <input
                  type="radio"
                  className="Account-input"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                  disabled={state}
                /> Female
                <input
                  type="radio"
                  className="Account-input"
                  name="gender"
                  value="other"
                  checked={gender === 'other'}
                  onChange={handleGenderChange}
                  disabled={state}
                /> Other
              </div>
              <div className="change">
                <button type="button" className='saveNedit' onClick={state ? editDetails : saveDetails}>
                  {state ? 'Edit' : 'Save'}
                </button>
                <button type="button" className='saveNedit' onClick={handleDeleteClick}>Delete Account</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isVerificationPopupOpen && (
        <div className='verification-popup'>
          <div className='verification-content'>
            <h3 style={{ fontWeight: 'bold' }}>Verify Your Email</h3>
            <form className='verification-form' onSubmit={handleVerifyCode}>
              <label htmlFor="verificationCode">Enter Verification Code:</label>
              <input
                className='verification-input'
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                placeholder='EX.BE7264'
              />
              <button className='verify-btn' type="submit">Verify</button>
            </form>
          </div>
        </div>
      )}
      {isDeletePopupOpen && (
        <div className='verification-popup-head'>
          <div className='verification-content'>
            <h3 style={{ fontWeight: 'bold' }}>Confirm Account Deletion</h3>
            <div className='verify-btn-container'>
              <button className='verify-btn' onClick={handleDeleteAccount}>Yes</button>
              <button className='verify-btn' onClick={() => setIsDeletePopupOpen(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
