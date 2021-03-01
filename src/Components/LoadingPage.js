import "../Components/LoadingPage.css";
import React from "react";
import { Spinner } from 'reactstrap';

export default function LoadingPage() {
  return (
    <div className="Loading">
        <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
        <h1>Loading Recipes...</h1>
    </div>
  );
}
