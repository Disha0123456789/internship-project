import React from 'react'
import './DreamInterpretation.css'
import { useNavigate } from "react-router-dom";

function DreamInterpretation() {
    const navigate = useNavigate();
    return (
            <div className="dream-interpretation">
                <div className="Head-Text">
                    <h1>Dream Meaning</h1>
                </div>
                <div className="container">
                    <textarea className="textInput" placeholder="Describe your dream in detail and know what the dream is trying to tell you...." size="40"></textarea>
                    <div className="button-container">
                        <button onClick={() => navigate("/dream_result")} className="submitButton">Interpret Your Dream</button>
                    </div>
                </div>
            </div>
    )
}

export default DreamInterpretation