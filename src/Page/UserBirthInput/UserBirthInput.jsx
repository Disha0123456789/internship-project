import React, { useState } from 'react';
import Select from 'react-select';
//import code from './code.json';
//import dummy from './dummy.json';
import './UserBirthInput.css';
import { useNavigate } from 'react-router-dom';

const UserBirthInput = ({ nextPage }) => {
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');

    const sortedProducts = dummy.sort((a, b) => {
        return a.city.localeCompare(b.city);
    });
    const filteredData = sortedProducts.filter((item) => {
        return item.city.toLowerCase().includes(placeOfBirth.toLowerCase());
    });

    const saveDetails = () => {
        // Construct the data object to pass to the next page
        const userData = {
            name: name,
            dateOfBirth: dateOfBirth,
            birthTime: birthTime,
            placeOfBirth: placeOfBirth
        };
        console.log(userData);
        // Navigate to the next page with the user data
        navigate(nextPage || '/', { state: userData });
    };

    const cityOptions = filteredData.map((e) => ({
        value: e.city,
        label: e.city,
    }));
    return (
        <div className="UserBirthInput-container">
            <form className="UserBirthInput-form">
                <h3 className='UserBirthHead'>Enter Your details</h3>
                <div className="changes">
                    <label htmlFor="name" className="user-label">
                        NAME:-
                    </label>
                    <br />
                    <input type="text" className='user-Input' value={name} onChange={(e) => setName(e.target.value)} disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="date" className="user-label">Date Of Birth :-</label>
                    <br />
                    <input type="date" className='user-Input' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="boyBirthTime" className="user-label">Birth Time:</label>
                    <br />
                    <input type="time" className='user-Input' value={birthTime} onChange={(e) => setBirthTime(e.target.value)} placeholder="hh:mm(24 hours)" id="boyBirthTime" required />
                </div>

                <div className="changes">
                    <label htmlFor="place" className="user-label">Place Of Birth :-</label>
                    <br />
                    <Select
                        className="select-city"
                        options={cityOptions}
                        isDisabled={state}
                        placeholder="Search for city..."
                        isSearchable
                        value={placeOfBirth}
                        onChange={(selectedOption) => setPlaceOfBirth(selectedOption.value)}
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
}
export default UserBirthInput;
