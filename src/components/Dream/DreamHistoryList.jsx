import React, { useEffect, useState } from 'react';
import './DreamHistoryList.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function DreamHistoryList() {
    const navigate = useNavigate();
    const [dreams, setDreams] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchDreams = async () => {
            try {
                const response = await axios.get('https://divineconnection.co.in/api/dreams'); // Updated the API path
                setDreams(response.data);
            } catch (error) {
                console.error('Error fetching dreams:', error);
            }
        };
        fetchDreams();
    }, []);

    return (
        <div className='dreamhistory-list'>
            <div className='Head-Text'>
                <h1>Dream History</h1>
            </div>
            <div className="card-history-container">
                {dreams.map((dream) => (
                    <div className="card-history" key={dream._id} onClick={() => navigate(`/dream_history/${dream._id}`)}>
                        <div className='card-top-container'>
                            <h3 className="card-title">{dream.title}</h3>
                            <p>{new Date(dream.date).toLocaleDateString()}</p>
                        </div>
                        <div className='divider-history'></div>
                        <p className="card-description">{dream.content.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
