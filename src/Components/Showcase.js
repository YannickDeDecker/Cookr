import React from 'react';

//Animation import items
import styled, { keyframes } from 'styled-components';
import { fadeInDown, slideInUp } from 'react-animations';

//Import CSS file
import './Showcase.css';

export default function Showcase() {
  //ANIMATIONS
  const bounceAnimation = keyframes`${fadeInDown}`;
  const slideAnimation = keyframes`${slideInUp}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  const SlideDiv = styled.div`
    animation: 2s ${slideAnimation};
  `;

  return (
    <div id='showcase-container'>
      <BouncyDiv>
        <h1>welkom bij cookr</h1>
      </BouncyDiv>
      <SlideDiv>
        <h2>Blader tussen mijn favoriete recepten</h2>
      </SlideDiv>
    </div>
  );
}
