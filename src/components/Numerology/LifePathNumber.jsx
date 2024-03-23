import React from 'react'
import './LifePathNumber.css'

export default function LifePathNumber() {
    return (
        <div className='lifepathnumber'>
            <div>
                <p className='life-path-title'>Life Path Number</p>
            </div>
            <div className='life-number-container'>
                <h1 className='life-number'>7</h1>
            </div>
            <div className="life-path-container">
                <LifePathCards title="Description" imageSrc={"/4throw/description.png"} />
                <LifePathCards title="Positive Sides" imageSrc={'4throw/positive.png'} />
                <LifePathCards title="Negative Sides" imageSrc={'4throw/negative.png'} />
                <LifePathCards title="Profession" imageSrc={'4throw/profession.png'} />
                <LifePathCards title="Finance" imageSrc={'4throw/finance.png'} />
                <LifePathCards title="Relationship" imageSrc={'4throw/relation.png'} />
                <LifePathCards title="Health" imageSrc={'4throw/health.png'} />
            </div>
        </div>
    )
}

const LifePathCards = ({ title, imageSrc }) => {
    return (
        <div className="lifepathcard">
            <div className="card-content">
                <div className='card-topline'>
                    <h3 className="card-title">{title}</h3>
                    <img src={imageSrc} alt="Card Image" className="image-card" />
                </div>
                <div className='divider'></div>
                <div className='card-description-container'>
                    <p className='card-description'>In a past life, you were deeply committed to a partner who embodied
                        qualities of wisdom and compassion. Your union was characterized by
                        mutual respect and a shared sense of purpose. Together, you may have
                        experienced the joy of raising a family, nurturing strong bonds with your
                        children, and creating a harmonious household filled with love and
                        understanding.a shared sense of purpose. Together, you may have
                        experienced the joy of raising a family, nurturing strong bonds with your
                        children, and creating a harmonious household filled with love and
                        understanding.experienced the joy of raising a family, nurturing strong bonds with your
                        children, and creating a harmonious household filled with love and
                        understanding.experienced the joy of raising a family, nurturing strong bonds with your
                        children, and creating a harmonious household filled with love and
                        understanding.</p>
                </div>
            </div>
        </div>
    );
}