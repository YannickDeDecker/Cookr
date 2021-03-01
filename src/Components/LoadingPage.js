import "../Components/LoadingPage.css";
import React from "react";
import loadingGIF from '../Images/loadingpage-gif.gif';

export default function LoadingPage() {
  return (
    <div className="Loading">
        <img src={loadingGIF} alt="Cute cat eating chips" />
        <h1>Loading Recipes...</h1>
    </div>
  );
}
