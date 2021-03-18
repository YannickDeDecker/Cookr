import React from 'react';

//Import CSS file
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='container'>
        <p>
          Deze website is gemaakt als eindwerk in het kader van de opleiding{' '}
          <span>Front-End Development</span> van <span>INTEC Brussel</span>.
        </p>
        <p>
          Ik bezit geen copyright op de recepten en foto's. Ontworpen met{' '}
          <span>React en Bootstrap</span>.
        </p>
        <p>&copy; Yannick De Decker | 2021</p>
      </footer>
    </div>
  );
};

export default Footer;
