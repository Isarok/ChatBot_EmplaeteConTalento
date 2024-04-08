import React from 'react';
import './style.css';
import baileImage from '../../Images/baile.png';

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="face front">
        <img src={baileImage} alt="Baile" />
        <h2>Baile</h2>
      </div>
      <div className="face back">
      
        <h2>Baile</h2>
        <p>Mejora la coordinación física y mental, la perseverancia/disciplina, y la adaptación e improvisación.</p>
        <div className='link'></div>
        <a href="#">Jugar</a>
      </div>
    </div>
  );
};

export default Card;


