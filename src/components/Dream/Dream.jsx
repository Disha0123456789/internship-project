import React from 'react'
import './Dream.css';
import { useNavigate } from "react-router-dom";

export default function Dream() {
    return (
        <div className='dream'>
            <div className="Head-Text">
                <h1>Dream Interpretation</h1>
            </div>
            <div className='dream-container'>
                <DreamComponent imageSrc={'4throw/dream1-icon.png'} title="Dream Meaning" onClick="dream_meaning" />
                <DreamComponent imageSrc={'4throw/dream2-icon.png'} title="Dream Book"  onClick="dream_book" />
                <DreamComponent imageSrc={'4throw/dream3-icon.png'} title="Sleep Music" onClick="sleep_music"/>
            </div>
        </div>
    )
}

const DreamComponent = ({ imageSrc, title, onClick }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/${onClick}`)} className='dreamComponent'>
            <img src={imageSrc} alt="dream Image" className="dream-img" />
            <p className='dream-title'>{title}</p>
        </div>
    );
}
