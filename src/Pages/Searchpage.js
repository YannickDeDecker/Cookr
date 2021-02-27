import React from 'react';
import CardContainer from '../Components/CardContainer';
import { useParams } from "react-router-dom";

function Searchpage() {
    let { query } = useParams();

    return (
        <div>
            <CardContainer counter={true} url={`${process.env.REACT_APP_BACKEND}/search?q=${query}`}/>
        </div>
    )
}

export default Searchpage;
