import React from 'react';
import './Numerology.css';
import { useNavigate } from "react-router-dom";

export default function Numerology() {
    const navigate = useNavigate(); 
    return (
        <div className="numerology">
            <div className='Meditation-text'>
                <p>Numerology</p>
            </div>
            <div className="numerology-main">
                <div className="numerology-container">
                    <div className="numerology-card">
                        <img src="/4throw/num-icon.png" alt="Card Image" className="card-img" />
                        <div className="card-content" onClick={() => navigate("/lifepathnumber")}>
                            <h3 className="card-title">Life Path Number <span className="clickhere">(click here)</span></h3>
                        </div>
                    </div>

                    <div className="lucky-container-wrapper">
                        <LuckyContainer imageSrc={"/4throw/lucky-no-icon.png"} title="Lucky Numbers" description="3, 4, 5, 6" />
                        <LuckyContainer imageSrc={"/4throw/lucky-color-icon.png"} title="Lucky Colors" description="Blue, Gray" />
                    </div>
                    {/* <div className="divider"></div> */}
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
