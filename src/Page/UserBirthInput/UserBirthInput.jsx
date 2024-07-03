import React, { useState, useMemo, useCallback } from 'react';
import Select from 'react-select';
//import code from './code.json';
import dummy from '../AccountPage/dummy.json';
import './UserBirthInput.css';
import { useNavigate } from 'react-router-dom';

const UserBirthInput = ({ nextPage }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [nameError, setNameError] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState(false);

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

    const saveDetails = () => {
        // Check for empty fields
        setNameError(!name);
        setDateOfBirthError(!dateOfBirth);

        if (!name || !dateOfBirth) {
            return;
        }

        // Construct the data object to pass to the next page
        const userData = {
            name: name,
            dateOfBirth: dateOfBirth,
            birthTime: birthTime,
            placeOfBirth: placeOfBirth
        };
        setState(true);
        console.log(userData);
        // Navigate to the next page with the user data
        navigate(nextPage || '/', { state: userData });
    };

    return (
        <div className="UserBirthInput-container">
            <form className="UserBirthInput-form">
                <h3 className='UserBirthHead'>Enter Your details</h3>
                <div className="changes">
                    <label htmlFor="name" className={`user-label ${nameError ? 'mandatory' : ''}`}>
                        NAME :
                    </label>
                    {nameError && <span className="required">mendatory*</span>}
                    <br />
                    <input type="text" className='user-Input' value={name} onChange={(e) => setName(e.target.value)} disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="date" className={`user-label ${dateOfBirthError ? 'mandatory' : ''}`}>
                        Date Of Birth :
                    </label>
                    {dateOfBirthError && <span className="required">mendatory*</span>}
                    <br />
                    <input type="date" className='user-Input' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="boyBirthTime" className="user-label">Birth Time :</label>
                    <br />
                    <input type="time" className='user-Input' value={birthTime} onChange={(e) => setBirthTime(e.target.value)} placeholder="hh:mm(24 hours)" id="boyBirthTime" required />
                </div>

                <div className="changes">
                    <label htmlFor="place" className="user-label">Place Of Birth :</label>
                    <br />
                    <Select
                        className="select-city"
                        options={cityOptions}
                        isDisabled={state}
                        placeholder="Search for city..."
                        isSearchable
                        onInputChange={handleCityInput}
                    />
                </div>

                <div className="changes-button">
                    <button type="button" className='user-profile-btn'>Use default profile</button>
                    <button type="button" className='user-profile-submit' onClick={saveDetails}>Submit</button>
                    <button type="button" className='user-profile-btn'>Save as default</button>
                </div>
            </form>
        </div>
    );
};

export default UserBirthInput;
