import React, { useState } from 'react';
import Select from 'react-select';
import './AccountPage.css';
import code from './code.json';
import dummy from './dummy.json';
import divineLogo from './images/divine logo vertical.png';
import logoBackground from './images/pink_design_cutout.png';
const Form = () => {
  const [state, setState] = useState(false);
  const [city, setCity] = useState('');
  const sortedProducts = dummy.sort((a, b) => {
    return a.city.localeCompare(b.city);
  });
  const filteredData = sortedProducts.filter((item) => {
    return item.city.toLowerCase().includes(city.toLowerCase());
  });

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
    label: e.city,
  }));

  return (
  <div className='Account-page'>
    <div className='Account-page-image'>
        <img src={logoBackground} style={{ height: '100%', width:'100%' }} />
        <img
          src={divineLogo}
          style={{ position: 'absolute', top: '10%', left: '7%', width: '450px', height: '70%'}}
        />
    </div>
    <div className='Account-page-details'>
      <h3>Create Your Account With Divin Connection</h3>
      <form className="form">
        <div className="change">
          <label htmlFor="name" className="label">
            NAME:-
          </label>
          <input type="text" disabled={state} />
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
        <label htmlFor="otp" className='label'>OTP :-</label>
         <input type="number"disabled={state}  />
        </div>
        <div className="change">
        <label htmlFor="E-mail" className='label'>E-Mail :-</label>
        <input type="email" name="" id="" disabled={state}/>
        </div>
        <div className="change">
        <label htmlFor="date" className='label'>Date Of Birth :-</label>
        <input type="date" name="" id=""disabled={state} />
        </div>
        
        <div className="change">
          <label htmlFor="place" className='label'>Place Of Birth :-</label>
          <Select
            className="react-select-city"
            options={cityOptions}
            isDisabled={state}
            placeholder="Search for city..."
            isSearchable
          />
        </div>
        <div className="change">
        <label htmlFor="gender" className='label'>Gender</label>&nbsp;
        <input type="radio" name="gender" id="" disabled={state}/>  Male
            <input type="radio" name="gender" id="" disabled={state} /> feMale
        </div>
        <div className="change">
          <button onClick={saveDetails}>Save</button>
          <button onClick={editDetails}>Edit</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Form;
