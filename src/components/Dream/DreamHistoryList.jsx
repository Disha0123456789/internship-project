import React, { useEffect, useState } from 'react';
//import './DreamHistoryList.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function DreamHistoryList() {
    const navigate = useNavigate();
    const [dreams, setDreams] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedDreams, setSelectedDreams] = useState(new Set());

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchDreams = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const response = await axios.get('https://divineconnection.co.in/dreams', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setDreams(response.data);
            } catch (error) {
                console.error('Error fetching dreams:', error);
            }
        };
        fetchDreams();
    }, []);

    const handleSelectClick = () => {
        setIsSelecting(!isSelecting);
        setSelectedDreams(new Set()); // Clear selection when toggling
    };

    const handleCheckboxChange = (dreamId) => {
        setSelectedDreams((prevSelected) => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(dreamId)) {
                newSelected.delete(dreamId);
            } else {
                newSelected.add(dreamId);
            }
            return newSelected;
        });
    };

    const handleDeleteClick = async () => {
        try {
            const token = localStorage.getItem("authToken");
            await Promise.all([...selectedDreams].map(id => 
                axios.delete(`https://divineconnection.co.in/dreams/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
            ));
            // Refresh the dream list
            const response = await axios.get('https://divineconnection.co.in/dreams', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setDreams(response.data);
            setIsSelecting(false);
            setSelectedDreams(new Set());
        } catch (error) {
            console.error('Error deleting dreams:', error);
        }
    };

    return (
        <div className='dreamhistory-list'>
            <div className='Head-Text'>
                <h1>Dream History</h1>
            </div>
            {dreams.length === 0 ? (
                <div className='no-dreams-message'>
                    <p>No dreams found in history. Save the first dream to make it a memory.</p>
                </div>
            ) : (
                <>
                <div className='dream-delete-btn-container'>
                    <button className='select-button' onClick={isSelecting ? handleDeleteClick : handleSelectClick} style={{ backgroundColor: 'lightgray' }}>
                        {isSelecting ? 'Delete' : 'Select'}
                    </button>
                </div>
                <div className="card-history-container">
                    {dreams.slice().reverse().map((dream) => (
                        <div className="card-history" key={dream._id} onClick={() => !isSelecting && navigate(`/dream/dream_history/${dream._id}`)}>
                            {isSelecting && (
                                <input 
                                    type="checkbox" 
                                    checked={selectedDreams.has(dream._id)} 
                                    onChange={() => handleCheckboxChange(dream._id)} 
                                    style={{ marginLeft: '10px' }}
                                />
                            )}
                            <div className='card-top-container'>
                                <h3 className="card-title">{dream.title}</h3>
                                <p>{new Date(dream.date).toLocaleDateString()}</p>
                            </div>
                            <div className='divider-history'></div>
                            <p className="card-description">{dream.content.substring(0, 100)}...</p>
                        </div>
                    ))}
                </div>
                </>
            )}
        </div>
    );
}
