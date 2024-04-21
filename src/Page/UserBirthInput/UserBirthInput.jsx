import React, { useState } from 'react';
import Select from 'react-select';
//import code from './code.json';
import dummy from './dummy.json';
import './UserBirthInput.css';
const UserBirthInput = () =>{
    const [state, setState] = useState(false);
    const [city, setCity] = useState('');
    const sortedProducts = dummy.sort((a, b) => {
        return a.city.localeCompare(b.city);
    });
    const filteredData = sortedProducts.filter((item) => {
        return item.city.toLowerCase().includes(city.toLowerCase());
    });

    const saveDetails = () => {
        setState(true);
    };

    // Options for 10px;
    const cityOptions = filteredData.map((e) => ({
        value: e.city,
        label: e.city,
    }));
    return(
        <div className="UserBirthInput-container">
            <form className="UserBirthInput-form">
                <h3 className='UserBirthHead'>Enter Your details</h3>
                <div className="changes">
                    <label htmlFor="name" className="user-label">
                        NAME:-
                    </label>
                    <br/>
                    <input type="text" className='user-Input' disabled={state} />
                </div>
        
                <div className="changes">
                    <label htmlFor="date" className="user-label">Date Of Birth :-</label>
                    <br/>
                    <input type="date" className='user-Input' name="" id=""disabled={state} />
                </div>

                <div className="changes">
                    <label htmlFor="boyBirthTime" className="user-label">Birth Time:</label>
                    <br/>
                    <input type="time" className='user-Input' placeholder="hh:mm(24 hours)" id="boyBirthTime" required />
                </div>
        
                <div className="changes">
                    <label htmlFor="place" className="user-label">Place Of Birth :-</label>
                    <br/>
                    <Select
                        className="select-city"
                        options={cityOptions}
                        isDisabled={state}
                        placeholder="Search for city..."
                        isSearchable
                    />
                </div>
                
                <div className="changes-button">
                <button type="button" className='user-profile-btn' onClick={saveDetails}>Use default profile</button>
                    <button type="button" className='user-profile-submit' onClick={saveDetails}>Submit</button>
                    <button type="button" className='user-profile-btn' onClick={saveDetails}>Save as default</button>
                </div>
            </form>
        </div>
    );
}
export default UserBirthInput;
