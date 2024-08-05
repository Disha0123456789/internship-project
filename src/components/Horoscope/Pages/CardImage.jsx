import React from 'react';
import { useNavigate } from 'react-router-dom';
//import '../../../assets/horoscope.css';

export default function CardImage(props) {
  const { myLink, imagUrl, name } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(myLink);
  };

  return (
    <div className='mycard' onClick={handleClick}>
      <div className='img-ring'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img className='horo-card-image' src={imagUrl} alt={name} />
        </div>
      </div>
      <span className='img-name'>{name} </span>
    </div>
  );
}
