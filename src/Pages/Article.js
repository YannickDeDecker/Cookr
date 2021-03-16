import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faClock,
  faAward,
} from '@fortawesome/free-solid-svg-icons';

//IMPORT CSS FILE
import './Article.css';

//ANIMATIONS
import styled, { keyframes } from 'styled-components';
import { fadeInDown, slideInUp } from 'react-animations';

//LOADING SCREEN SPINNER
import { Spinner } from 'reactstrap';

function Article() {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState();

  //ICONS
  const element = <FontAwesomeIcon className='icon' icon={faCheckCircle} />;
  const elementTwo = <FontAwesomeIcon className='icon' icon={faClock} />;
  const elementThree = <FontAwesomeIcon className='icon' icon={faAward} />;

  //ANIMATION
  const bounceAnimation = keyframes`${fadeInDown}`;
  const slideAnimation = keyframes`${slideInUp}`;

  const BouncyDiv = styled.div`
    animation: 2s ${bounceAnimation};
  `;

  const SlideDiv = styled.div`
    animation: 2s ${slideAnimation};
  `;

  let { name } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/recipes/${name}`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className='article-loading'>
        <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
        <h1>Loading Recipes...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div
          id='showcase-recipe-article'
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BACKEND}/${recipe.imgmain})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='content'>
            <BouncyDiv>
              <h1>{recipe.name}</h1>
            </BouncyDiv>
            <SlideDiv>
              <ul id='tag-list'>
                {recipe.tags.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            </SlideDiv>
          </div>
        </div>
        <div className='container'>
          <div id='main-recipe-container' className='row'>
            <div id='col-left' className='col-lg-3'>
              <div id='white-background'>
                <div id='default-list' className='d-flex'>
                  <p>
                    {elementTwo} {recipe.time}
                  </p>
                  <p>
                    {elementThree} {recipe.difficulty}
                  </p>
                </div>
                <h3>Ingrediënten</h3>
                <ul id='ingredients-list'>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>
                      {' '}
                      {element} {item}{' '}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id='col-right' className='col-lg-9'>
              <h3>Instructies</h3>
              <ul id='instructions-list'>
                {recipe.instructions.map((item, index) => (
                  <li key={index}>
                    {' '}
                    <span>{index + 1}</span> {item}{' '}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
