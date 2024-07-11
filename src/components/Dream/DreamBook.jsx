import React, { useState } from 'react'
import './DreamBook.css'
import DatePicker from 'react-datepicker'; // Import the date picker component
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles for the date picker
import { useNavigate } from "react-router-dom";

export default function DreamBook() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(''); // State variable to store the selected date
    const [showDatePicker, setShowDatePicker] = useState(false); // State variable to toggle the visibility of the date picker
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    // Function to handle date selection
    const handleDateChange = date => {
        // Update the selectedDate state
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        // setSelectedDate(date);
        setDay(day);
        setMonth(month);
        setYear(year);
        console.log(day);
        console.log(year);
        setShowDatePicker(false); // Hide the date picker after selecting a date
    };
    return (
        <div className='dreambook'>
            <div className="Head-Text">
                <h1>Dream Book</h1>
            </div>
            <p className='dreambook-messg'>“Track , Analyze, and Explore your Dreams Anytime by Adding them to your Dream Book”</p>
            <div className='dream-input-containers'>
                <div className='dreamhistory-button-container'>
                    <button onClick={() => navigate("/dream_history_list")} className="dream-history-btn">Dream History</button>
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
                            <input type="text" className='dreamtitle-input' />
                        </div>
                    </div>

                    <div>
                        <p className='detail-title'>Write Your Dream:</p>
                        <div className='date-input-container '>
                            <textarea className='textarea' />
                        </div>
                    </div>

                    <div className="save-btn-container">
                        <button className="savedream-btn">Save Dream</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
