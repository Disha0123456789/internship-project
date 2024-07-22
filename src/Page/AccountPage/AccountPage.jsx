import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import dummy from './dummy.json';
import code from './code.json';
import divineLogo from '/assets/AcountPage/images/divine logo vertical.png';
import logoBackground from '/assets/AcountPage/images/pink_design_cutout.png';
import './AccountPage.css';

// Debounce function to limit the rate of function execution
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

  const fetchUserData = useCallback(async () => {
    try {
      console.log('before token');
      const token = localStorage.getItem('authToken'); // Use 'authToken' as set in LoginForm
      console.log('after token');
      const response = await axios.get('/user-data', {
        headers: {
          Authorization: `Bearer ${token}` // Correct header format
        }
      });
      const { first_name, last_name, email, phone, dob, birth_place, gender } = response.data;
      console.log('after getting data',response.data);
      setUserData({
        firstName: first_name,
        lastName: last_name,
        email,
        phone
      });
      setDob(dob || '');
      setBirthPlace(birth_place || '');
      setGender(gender || '');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate('/login_page');
      } else {
        console.error('Error fetching user data:', error);
      }
    }
  }, [navigate]);
  
  
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const editDetails = () => {
    setState(false);
  };

  const saveDetails = async () => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.put('/update-user', {
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

  // Flatten the city data with country names
  const flattenedCities = useMemo(() => {
    return dummy.flatMap(country => 
      country.cities.map(city => ({
        city,
        country: country.country
      }))
    );
  }, []);

  // Filter data based on city input, only if it starts with the input
  const filteredData = useMemo(() => {
    return flattenedCities.filter(item => 
      item.city.toLowerCase().startsWith(city.toLowerCase())
    ).slice(0, 100); // Limit to 100 results
  }, [city, flattenedCities]);

  const options = code.map((e) => ({
    value: e.dial_code,
    label: e.dial_code,
  }));

  // Options for city
  const cityOptions = filteredData.map((e) => ({
    value: e.city,
    label: `${e.city}, ${e.country}`,
  }));

  return (
    <div className='Account-page'>
      <div className='Account-page-image'>
        <img src={logoBackground} className="logo-background" />
        <img
          src={divineLogo}
          style={{ position: 'absolute', left: '7%', width: '80%' }}
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
              isDisabled={state}
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
              isDisabled={state}
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
          </div>
          <div className="change">
            <button type="button" className='saveNedit' onClick={state ? editDetails : saveDetails}>
              {state ? 'Edit' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
