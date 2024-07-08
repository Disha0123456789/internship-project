//accoutpage
import React, { useState, useMemo, useCallback } from 'react';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';
import dummy from './dummy.json';
import code from './code.json';
import divineLogo from './images/divine logo vertical.png';
import logoBackground from './images/pink_design_cutout.png';
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

  const editDetails = () => {
    setState(false);
  };

  const saveDetails = () => {
    setState(true);
  };

  const options = code.map((e) => ({
    value: e.dial_code,
    label: e.dial_code,
  }));

  // Options for city
  const cityOptions = filteredData.map((e) => ({
    value: e.city,
    label: `${e.city}, ${e.country}`,
  }));

  // Debounced city input handler
  const handleCityInput = useCallback(
    debounce((input) => {
      setCity(input);
    }, 300),
    []
  );

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
            <label htmlFor="name" className="label">
              NAME:-
            </label>
            <input type="text" className="Account-input" disabled={state} />
          </div>
          <div className="change">
            <label htmlFor="contact" className="label">
              Contact No :-
            </label>
            <Select
              className="react-select-container"
              options={options}
              isDisabled={state}
              placeholder="+91"
            />
            <input type="number" className="number-input" disabled={state} />
          </div>
          <div className="change">
            <label htmlFor="E-mail" className='label'>E-Mail :-</label>
            <input type="email" className="Account-input" name="" id="" disabled={state} />
          </div>
          <div className="change">
            <label htmlFor="date" className='label'>Date Of Birth :-</label>
            <input type="date" className="Account-input" name="" id="" disabled={state} />
          </div>
          <div className="change">
            <label htmlFor="place" className='label'>Place Of Birth :-</label>
            <Select
              className="react-select-city"
              options={cityOptions}
              isDisabled={state}
              placeholder="Search for city..."
              isSearchable
              onInputChange={handleCityInput}
            />
          </div>
          <div className="change">
            <label htmlFor="gender" className='label'>Gender :-</label>&nbsp;
            <input type="radio" className="Account-input" name="gender" id="" disabled={state}/>  Male
            <input type="radio" className="Account-input" name="gender" id="" disabled={state} /> female
          </div>
          <div className="change">
            <button type="button" className='saveNedit' onClick={saveDetails}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
