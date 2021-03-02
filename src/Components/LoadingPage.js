import React from "react";
import { Spinner } from "reactstrap";

//import CSS file
import "../Components/LoadingPage.css";

export default function LoadingPage() {
  return (
    <div className="Loading">
      <Spinner style={{ width: "3rem", height: "3rem" }} />{" "}
      <h1>Recepten worden geladen...</h1>
    </div>
  );
}
