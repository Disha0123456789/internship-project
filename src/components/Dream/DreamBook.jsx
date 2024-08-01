import React, { useState, useEffect } from 'react';
//import './DreamBook.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DreamBook() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(''); 
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dreamTitle, setDreamTitle] = useState('');
    const [dreamContent, setDreamContent] = useState('');
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        // Retrieve auth token from local storage or other means
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuthToken(token);
        }
    }, []);

    const handleDateChange = date => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        setDay(day);
        setMonth(month);
        setYear(year);
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    const handleSaveDream = async () => {
        if (!authToken) {
            alert('Please login to use this feature');
            return;
        }

        try {
            const response = await axios.post('https://divineconnection.co.in/dreams', {
                date: selectedDate,
                title: dreamTitle,
                content: dreamContent
            }, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            if (response.status === 200) {
                console.log('Dream saved successfully:', response.data); 
                navigate('/dream/dream_history_list');
            }
        } catch (error) {
            console.error('Error saving dream:', error);
        }
    };

    return (
        <div className='dreambook'>
            <div className="Head-Text">
                <h1>Dream Book</h1>
            </div>
            <p className='dreambook-messg'>“Track, Analyze, and Explore your Dreams Anytime by Adding them to your Dream Book”</p>
            <div className='dream-input-containers'>
                <div className='dreamhistory-button-container'>
                    <button onClick={() => navigate("/dream/dream_history_list")} className="dream-history-btn">Dream History</button>
                </div>
                <div className='detail-wrapper'>
                    <div className='detail-container'>
                        <p className='detail-title'>Date*</p>
                        <div className='date-input-container '>
                            <p>{day} {month} {year}</p>
                            <img src={'/assets/4throw/Dream/images/calender-icon.png'} style={{ cursor: "pointer", height: "26px" }} onClick={() => setShowDatePicker(!showDatePicker)} />
                        </div>
                        <div className='react-datepicker-wrapper'>
                            {showDatePicker && (
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => handleDateChange(date)}
                                    inline
                                    className='react-datepicker'
                                />
                            )}
                        </div>
                    </div>
                    <div className='detail-container'>
                        <p className='detail-title'>Dream Title:</p>
                        <div className='date-input-container '>
                            <input type="text" className='dreamtitle-input' value={dreamTitle} onChange={e => setDreamTitle(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <p className='detail-title'>Write Your Dream:</p>
                        <div className='date-input-container '>
                            <textarea className='textarea' value={dreamContent} onChange={e => setDreamContent(e.target.value)} maxLength={10000} />
                        </div>
                    </div>
                    <div className="save-btn-container">
                        <button className="savedream-btn" onClick={handleSaveDream}>Save Dream</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
