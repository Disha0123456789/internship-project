import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './LifePathNumber.css';
import data from './data.json';

export default function LifePathNumber() {
    const location = useLocation();
    const lifePathNumber = location.state ? location.state.lifePathNumber : null;
    const [lifePathData, setLifePathData] = useState(null);

    useEffect(() => {
        if (lifePathNumber) {
            const matchedData = data.dob.find(item => item.id === lifePathNumber);
            setLifePathData(matchedData);
        }
    }, [lifePathNumber]);

    return (
        <div className='lifepathnumber'>
            {lifePathData && (
                <>
                    <div>
                        <p className='life-path-title'>Life Path Number</p>
                    </div>
                    <div className='life-number-container'>
                        <h1 className='life-number'>{lifePathNumber}</h1>
                    </div>
                    <div className="life-path-container">
                        <LifePathCards title={lifePathData.heading1} para={lifePathData.para1} imageSrc={"/4throw/description.png"} />
                        <LifePathCards title={lifePathData.heading2} para={lifePathData.para2} imageSrc={'4throw/positive.png'} />
                        <LifePathCards title={lifePathData.heading3} para={lifePathData.para3} imageSrc={'4throw/negative.png'} />
                        <LifePathCards title={lifePathData.heading4} para={lifePathData.para4} imageSrc={'4throw/profession.png'} />
                        <LifePathCards title={lifePathData.heading5} para={lifePathData.para5} imageSrc={'4throw/finance.png'} />
                        <LifePathCards title={lifePathData.heading6} para={lifePathData.para6} imageSrc={'4throw/relation.png'} />
                        <LifePathCards title={lifePathData.heading7} para={lifePathData.para7} imageSrc={'4throw/health.png'} />
                    </div>
                </>
            )}
        </div>
    );
}

const LifePathCards = ({ title, para, imageSrc }) => {
    return (
        <div className="lifepathcard">
            <div className="card-content">
                <div className='card-topline'>
                    <h3 className="card-title">{title}</h3>
                    <img src={imageSrc} alt="Card Image" className="image-card" />
                </div>
                <div className='divider'></div>
                <div className='card-description-container'>
                    <p className='card-description'>{para}</p>
                </div>
            </div>
        </div>
    );
}
