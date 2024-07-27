import React, { useEffect, useState } from 'react';
import './DreamHistory.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DreamHistory() {
    const { id } = useParams();
    const [dream, setDream] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchDream = async () => {
            try {
                const response = await axios.get(`https://divineconnection.co.in/api/dreams/${id}`); // Updated the API path
                setDream(response.data);
            } catch (error) {
                console.error('Error fetching dream:', error);
            }
        };
        fetchDream();
    }, [id]);

    if (!dream) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dream-result">
            <div className="Head-Text">
                <h1>Dream History</h1>
            </div>
            <div className='dreamcard-container'>
                <div className="dream-result-card">
                    <h2 className="title">{dream.title}</h2>
                    <p className="description">{dream.content}</p>
                </div>
            </div>
            <div className='margin-div'></div>
        </div>
    )
}
