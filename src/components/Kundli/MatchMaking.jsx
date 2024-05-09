import React, { useState } from 'react';
import './MatchMaking.css';
import { useNavigate } from 'react-router-dom';
const KundliRegister = () => {
  const navigate = useNavigate();
  const [boyDate, setBoyDate] = useState('');
  const [boyTime, setBoyTime] = useState('');
  const [girlDate, setGirlDate] = useState('');
  const [girlTime, setGirlTime] = useState('');
  const [boysCheckbox, setBoysCheckbox] = useState(false);
  const [girlsCheckbox, setGirlsCheckbox] = useState(false);

  const setBoyDateFunction = (e) => {
    setBoyDate(e.target.value);
  };

  const setBoyTimeFunction = (e) => {
    setBoyTime(e.target.value);
  };

  const setGirlDateFunction = (e) => {
    setGirlDate(e.target.value);
  };

  const setGirlTimeFunction = (e) => {
    setGirlTime(e.target.value);
  };

  return (
      <div className="match-container">
        <div className="kundliForm">
          <h1>Match Making</h1>
          <hr className='match-hr'/>
          <form action="#">
            <div className="match-form">
              <div className="boysForm">
                <div className="match-input-label">Boy's Detail</div>
                <div className="match-formInputField">
                  <label className='match-label'>Name</label>
                  <br />
                  <input type="text" className='match-input' placeholder="Enter your name" />
                  <br />
                  <label className='match-label'>Birth Date</label>
                  <br />
                  <input
                    type="date"
                    className='match-input'
                    value={boyDate}
                    onChange={(e) => setBoyDateFunction(e)}
                    placeholder="DD-MM-YYYY"
                  />
                  <br />
                  <label className='match-label'>Birth Time</label>
                  <br />
                  <input
                    type="time"
                    className='match-input'
                    value={boyTime}
                    onChange={(e) => setBoyTimeFunction(e)}
                    placeholder="hh:mm (24 hours)"
                  />
                  <div
                    onClick={() => setBoysCheckbox(!boysCheckbox)}
                    className="match-checkbox"
                  >
                    {boysCheckbox ? <span>&#9745;</span> : <span>&#9744;</span>}
                    <span className="match-checkboxContent">
                      Don't know my exact time of birth
                    </span>
                  </div>
                  <label className='match-label'>Birth Place</label>
                  <br />
                  <input
                    type="text"
                    className='match-input'
                    placeholder="Enter birth city name"
                  />
                </div>
              </div>
              <div className="girlsForm">
                <div className="match-input-label">Girl's detail</div>
                <div className="match-formInputField">
                  <label className='match-label'>Name</label>
                  <br />
                  <input type="text" className='match-input' placeholder="Enter your name" />
                  <br />
                  <label className='match-label'>Birth Date</label>
                  <br />
                  <input
                    type="date"
                    className='match-input'
                    value={girlDate}
                    onChange={(e) => setGirlDateFunction(e)}
                    placeholder="DD-MM-YYYY"
                  />
                  <br />
                  <label className='match-label'>Birth Time</label>
                  <br />
                  <input
                    type="time"
                    className='match-input'
                    value={girlTime}
                    onChange={(e) => setGirlTimeFunction(e)}
                    placeholder="hh:mm (24 hours)"
                  />
                  <div
                    onClick={() => setGirlsCheckbox(!girlsCheckbox)}
                    className="match-checkbox"
                  >
                    {girlsCheckbox ? (
                      <span>&#9745;</span>
                    ) : (
                      <span>&#9744;</span>
                    )}
                    <span className="match-checkboxContent">
                      Don't know my exact time of birth
                    </span>
                  </div>
                  <label className='match-label'>Birth Place</label>
                  <br />
                  <input
                    type="text"
                    className='match-input'
                    placeholder="Enter birth city name"
                  />
                </div>
              </div>
            </div>
            <div className="matchKundliBtn-div">
              <button 
                onClick={() => navigate('/matchIndicator')}
                className="matchKundliBtn">Match Kundli</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default KundliRegister;
