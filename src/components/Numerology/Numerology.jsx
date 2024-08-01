import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import './Numerology.css';
import data from './data.json';

export default function Numerology() {
    const location = useLocation();
    const navigate = useNavigate();
    const [lifePathNumber, setLifePathNumber] = useState(null);
    const [lifePathData, setLifePathData] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const dateOfBirth = searchParams.get('birthDate');
        
        if (dateOfBirth) {
            const [year, month, day] = dateOfBirth.split('-');
            const lifePath = calculateLifePathNumber(day, month, year);
            setLifePathNumber(lifePath);
        }
    }, [location.search]);

    useEffect(() => {
        if (lifePathNumber !== null) {
            const matchedData = data.dob.find(item => item.id === lifePathNumber);
            setLifePathData(matchedData);
        }
    }, [lifePathNumber]);

    const calculateLifePathNumber = (day, month, year) => {
        let total = parseInt(day) + parseInt(month) + parseInt(year);
        while (total > 9) {
            total = total.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return total;
    };

    const handleNumerologyCardClick = () => {
        if (lifePathNumber !== null) {
            navigate("/numerology/lifepathnumber", { state: { lifePathNumber } });
        }
    };

    return (
        <div className="numerology">
            <div className='Head-Text'>
                <h1>Numerology</h1>
            </div>
            <div className="numerology-main">
                <div className="numerology-container">
                    <div onClick={handleNumerologyCardClick} className="numerology-card">
                        <img src="/assets/4throw/Numerology/images/num-icon.png" alt="Card Image" className="card-img" />
                        <div className="card-content">
                            <h3 className="card-title">Life Path Number <span className="clickhere">(click here)</span></h3>
                        </div>
                    </div>

                    <div className="lucky-container-wrapper">
                        <LuckyContainer imageSrc={"/assets/4throw/Numerology/images/lucky-no-icon.png"} title="Lucky Numbers" description={lifePathData ? lifePathData.LuckyNumber : "N/A"} />
                        <LuckyContainer imageSrc={"/assets/4throw/Numerology/images/lucky-color-icon.png"} title="Lucky Colors" description={lifePathData ? lifePathData.LuckyColor : "N/A"} />
                    </div>
                    <div className="lucky-container-wrapper">
                        <LuckyContainer imageSrc={"/assets/4throw/Numerology/images/lucky-days-icon.png"} title="Lucky Days" description={lifePathData ? lifePathData.LuckyDays : "N/A"} />
                        <LuckyContainer imageSrc={"/assets/4throw/Numerology/images/lucky-gem-icon.png"} title="Lucky Gemstones" description={lifePathData ? lifePathData.LuckyGems : "N/A"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const LuckyContainer = ({ imageSrc, title, description }) => {
    return (
        <div className='lucky-container'>
            <div className="lucky-cards">
                <img src={imageSrc} alt="Card Image" className="lucky-icons" />
                <div className="lucky-img-content-container">
                    <p>{title}</p>
                    <h5 className="lucky-card-content">{description}</h5>
                </div>
            </div>
        </div>
    );
}
