import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Numerology.css';

export default function Numerology() {
    const location = useLocation();
    const [lifePathNumber, setLifePathNumber] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if data is passed through location state
        if (location.state) {
            console.log("Received data from UserBirthInput:", location.state);
            const { dateOfBirth } = location.state;
            if (dateOfBirth) {
                const [year, month, day] = dateOfBirth.split('-');
                const lifePath = calculateLifePathNumber(day, month, year);
                setLifePathNumber(lifePath);
            }
        }
    }, [location.state]);

    const calculateLifePathNumber = (day, month, year) => {
        let total = parseInt(day) + parseInt(month) + parseInt(year);
        while (total > 9) {
            total = total.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return total;
    };

    const handleNumerologyCardClick = () => {
        console.log(lifePathNumber);
        if (lifePathNumber !== null) {
            navigate("/lifepathnumber", { state: { lifePathNumber } });
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
                        <img src="/4throw/num-icon.png" alt="Card Image" className="card-img" />
                        <div className="card-content">
                            <h3 className="card-title">Life Path Number <span className="clickhere">(click here)</span></h3>
                        </div>
                    </div>

                    <div className="lucky-container-wrapper">
                        <LuckyContainer imageSrc={"/4throw/lucky-no-icon.png"} title="Lucky Numbers" description="3, 4, 5, 6" />
                        <LuckyContainer imageSrc={"/4throw/lucky-color-icon.png"} title="Lucky Colors" description="Blue, Gray" />
                    </div>
                    <div className="lucky-container-wrapper">
                        <LuckyContainer imageSrc={"/4throw/lucky-days-icon.png"} title="Lucky Days" description="Sunday, Saturday" />
                        <LuckyContainer imageSrc={"/4throw/lucky-gem-icon.png"} title="Lucky Gemstones" description="Diamond, Coral, Pearl" />
                    </div>
                </div>
            </div>
        </div>
    )
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
