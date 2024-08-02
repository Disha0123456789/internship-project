//MatchMaking_backend
import React, { useState, useMemo, useCallback, useEffect} from 'react';
import Select from 'react-select';
import dummy from '../../Page/AccountPage/dummy.json';
//import './MatchMaking.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KundliRegister = () => {
  const navigate = useNavigate();
  const [boyName, setBoyName] = useState('');
  const [girlName, setGirlName] = useState('');
  const [boyDate, setBoyDate] = useState('');
  const [boyTime, setBoyTime] = useState('');
  const [girlDate, setGirlDate] = useState('');
  const [girlTime, setGirlTime] = useState('');
  const [boysCheckbox, setBoysCheckbox] = useState(false);
  const [girlsCheckbox, setGirlsCheckbox] = useState(false);
  const [boyVarna, setBoyVarna] = useState('');
  const [girlVarna, setGirlVarna] = useState('');
  const [boyNameError, setBoyNameError] = useState(false);
  const [girlNameError, setGirlNameError] = useState(false);
  const [boyDateError, setBoyDateError] = useState(false);
  const [girlDateError, setGirlDateError] = useState(false);

  const [state, setState] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
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

  const cityOptions = filteredData.map((e) => ({
    value: e.city,
    label: `${e.city}, ${e.country}`,
  }));

  const handleCityInput = useCallback(
    debounce((input) => {
      setCity(input);
    }, 300),
    []
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setBoyNameError(!boyName);
    setBoyDateError(!boyDate);
    setGirlNameError(!girlName);
    setGirlDateError(!girlDate);

    if (!boyName || !boyDate || !girlName || !girlDate) {
      return;
    }
    setState(true);

    const data = {
      boy: {
        name: boyName,
        birthDate: boyDate,
        birthTime: boyTime,
        varna: boyVarna || 'Brahmin'
      },
      girl: {
        name: girlName,
        birthDate: girlDate,
        birthTime: girlTime,
        varna: girlVarna || 'Shudra'
      }
    };

    try {
      const response = await axios.post('https://divineconnection.co.in/calculate-guna-milan-score', data);
      console.log('Server response:', response.data);

      navigate('/kundli/matchIndicator', { state: { score: response.data.score } });
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  return (
    <div className="match-container">
      <div className="kundliForm">
        <h1>Match Making</h1>
        <hr className='match-hr'/>
        <form onSubmit={handleFormSubmit}>
          <div className="match-form">
            <div className="boysForm">
              <div className="match-input-label">Boy's Detail</div>
              <div className="match-formInputField">
                <label className={`match-label ${boyNameError ? 'mandatory' : ''}`}>
                  Name{boyNameError && <span className="required">mendatory*</span>}
                </label>
                <br />
                <input type="text" className='match-input' value={boyName} onChange={(e) => setBoyName(e.target.value)} placeholder="Enter your name" />
                <br />
                <label className={`match-label ${boyDateError ? 'mandatory' : ''}`}>
                  Birth Date{boyDateError && <span className="required">mendatory*</span>}
                </label>
                <br />
                <input
                  type="date"
                  className='match-input'
                  value={boyDate}
                  onChange={(e) => setBoyDate(e.target.value)}
                  placeholder="DD-MM-YYYY"
                />
                <br />
                <label className='match-label'>Birth Time</label>
                <br />
                <input
                  type="time"
                  className='match-input'
                  value={boyTime}
                  onChange={(e) => setBoyTime(e.target.value)}
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
                <label className='match-label'>
                  Varna
                </label>
                <br />
                <select className='match-input' value={boyVarna} onChange={(e) => setBoyVarna(e.target.value)}>
                  <option value="">Select Varna</option>
                  <option value="Brahmin">Brahmin</option>
                  <option value="Kshatriya">Kshatriya</option>
                  <option value="Vaishya">Vaishya</option>
                  <option value="Shudra">Shudra</option>
                </select>
                <br />
                <label className='match-label'>Birth Place</label>
                <br />
                <Select
                  className="kundli-react-select-city"
                  options={cityOptions}
                  isDisabled={state}
                  placeholder="Search for city..."
                  isSearchable
                  onInputChange={handleCityInput}
                />
              </div>
            </div>
            <div className="girlsForm">
              <div className="match-input-label">Girl's detail</div>
              <div className="match-formInputField">
                <label className={`match-label ${girlNameError ? 'mandatory' : ''}`}>
                  Name{girlNameError && <span className="required">mendatory*</span>}
                </label>
                <br />
                <input type="text" className='match-input' value={girlName} onChange={(e) => setGirlName(e.target.value)} placeholder="Enter your name" />
                <br />
                <label className={`match-label ${girlDateError ? 'mandatory' : ''}`}>
                  Birth Date{girlDateError && <span className="required">mendatory*</span>}
                </label>
                <br />
                <input
                  type="date"
                  className='match-input'
                  value={girlDate}
                  onChange={(e) => setGirlDate(e.target.value)}
                  placeholder="DD-MM-YYYY"
                />
                <br />
                <label className='match-label'>Birth Time</label>
                <br />
                <input
                  type="time"
                  className='match-input'
                  value={girlTime}
                  onChange={(e) => setGirlTime(e.target.value)}
                  placeholder="hh:mm (24 hours)"
                />
                <div
                  onClick={() => setGirlsCheckbox(!girlsCheckbox)}
                  className="match-checkbox"
                >
                  {girlsCheckbox ? <span>&#9745;</span> : <span>&#9744;</span>}
                  <span className="match-checkboxContent">
                    Don't know my exact time of birth
                  </span>
                </div>
                <label className='match-label'>
                  Varna
                </label>
                <br />
                <select className='match-input' value={girlVarna} onChange={(e) => setGirlVarna(e.target.value)}>
                  <option value="">Select Varna</option>
                  <option value="Brahmin">Brahmin</option>
                  <option value="Kshatriya">Kshatriya</option>
                  <option value="Vaishya">Vaishya</option>
                  <option value="Shudra">Shudra</option>
                </select>
                <br />
                <label className='match-label'>Birth Place</label>
                <br />
                <Select
                  className="kundli-react-select-city"
                  options={cityOptions}
                  isDisabled={state}
                  placeholder="Search for city..."
                  isSearchable
                  onInputChange={handleCityInput}
                />
              </div>
            </div>
          </div>
          <div className="matchKundliBtn-div">
            <button type="submit" className="matchKundliBtn">Match Kundli</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KundliRegister;
