import React from 'react';
import CardContainer from '../Components/CardContainer';
import { useParams } from 'react-router-dom';
import './Searchpage.css';

function Searchpage() {
  let { query } = useParams();

  return (
    <div className='searchpage'>
      <CardContainer
        counter={true} //Search results counter
        url={`${process.env.REACT_APP_BACKEND}/search?q=${query}`}
      />
    </div>
  );
}

export default Searchpage;
