import React from 'react';
import { Link } from 'react-router-dom';

//IMPORT PACKAGE FOR INVIEW
import { InView } from 'react-intersection-observer';

//IMPORT COMPONENT
import Skills from '../Components/Skills';

//IMPORT CSS FILE
import './About.css';

//IMPORT ANIMATIONS
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const About = () => {
  //ANIMATIONS
  const bounceAnimation = keyframes`${fadeInDown}`;
  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  return (
    <div>
      <div className='about-container'>
        <div className='container'>
          <div className='row'>
            <div className='left col-lg-6'>
              <BouncyDiv>
                <h1>Over Mij</h1>
              </BouncyDiv>
              <h2>
                Ik ben een Grafisch Vormgever en Front-End Developer uit
                Boortmeerbeek.
              </h2>
              <p>
                Zowel in het dagelijkse leven als op professioneel vlak streef
                ik naar perfectie. Mijn doel is elke dag bij te leren om mijn
                kennis en vaardigheden te blijven uitbreiden. Creativiteit is
                mijn ding. Mijn passie voor graphic design en webdesign hebben
                me gebracht tot waar ik nu sta. In mijn vrije tijd probeer ik
                mijn sportiviteit aan te wakkeren, kijk ik wel eens een goede
                film en sta ik graag achter het fornuis. Dat laatste gaf mij ook
                het idee voor deze applicatie.
              </p>
              <p>
                Contactgegevens en een link naar mijn persoonlijke portfolio
                website vindt u terug op mijn{' '}
                <Link className='link' to='/contact'>
                  <span>contact-pagina</span>
                </Link>
                .
              </p>
            </div>
            <div className='right col-lg-6'></div>
          </div>
        </div>
      </div>
      <InView>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Skills inview={inView} />
          </div>
        )}
      </InView>
    </div>
  );
};

export default About;
