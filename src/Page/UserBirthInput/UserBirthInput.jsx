import React, { useState, useMemo, useCallback } from 'react';
import Select from 'react-select';
import axios from 'axios';
import dummy from '../AccountPage/dummy.json';
import './UserBirthInput.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

const UserBirthInput = ({ nextPage }) => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [boysCheckbox, setBoysCheckbox] = useState(false);
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [nameError, setNameError] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState(false);
    const [state, setState] = useState(false);
    const [city, setCity] = useState('');

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

    const saveDetails = () => {
        setNameError(!name);
        setDateOfBirthError(!dateOfBirth);

        if (!name || !dateOfBirth) {
            return;
        }

        const userData = {
            name: name,
            dateOfBirth: dateOfBirth,
            birthTime: birthTime,
            placeOfBirth: placeOfBirth
        };
        setState(true);
        console.log(userData);
        navigate(nextPage || '/', { state: userData });
    };

    const useDefaultProfile = async () => {
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
            const user = response.data;
            setName(`${user.first_name} ${user.last_name}`);
            setDateOfBirth(user.dob);
            setPlaceOfBirth(user.birth_place);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className="UserBirthInput-container">
            <form className="UserBirthInput-form">
                <h3 className='UserBirthHead'>Enter Your details</h3>
                <div className="changes">
                    <label htmlFor="name" className={`user-label ${nameError ? 'mandatory' : ''}`}>
                        NAME :
                    </label>
                    {nameError && <span className="required">mandatory*</span>}
                    <br />
                    <input type="text" className='user-Input' value={name} onChange={(e) => setName(e.target.value)} disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="date" className={`user-label ${dateOfBirthError ? 'mandatory' : ''}`}>
                        Date Of Birth :
                    </label>
                    {dateOfBirthError && <span className="required">mandatory*</span>}
                    <br />
                    <input type="date" className='user-Input' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="boyBirthTime" className="user-label">Birth Time :</label>
                    <br />
                    <input type="time" className='user-Input' value={birthTime} onChange={(e) => setBirthTime(e.target.value)} placeholder="hh:mm(24 hours)" id="boyBirthTime" required />
                </div>

                <div className="changes" onClick={() => setBoysCheckbox(!boysCheckbox)}>
                    {boysCheckbox ? <span>&#9745;</span> : <span>&#9744;</span>}
                    <span className="match-checkboxContent">
                        Don't know my exact time of birth
                    </span>
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
                    <button type="button" className='user-profile-btn' onClick={useDefaultProfile}>Use default profile</button>
                    <button type="button" className='user-profile-submit' onClick={saveDetails}>Submit</button>
                    <button type="button" className='user-profile-btn'>Save as default</button>
                </div>
            </form>
        </div>
    );
};

export default UserBirthInput;
