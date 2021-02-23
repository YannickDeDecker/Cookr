import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6">
            <label for="">Voornaam:</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
            <label for="">Achternaam:</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
            <label for="">Bedrijf:</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
            <label for="">E-mail:</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
            <label for="">GSM:</label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
          </div>
          <div className="col-md-6">
            <label for="">Bericht:</label>
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="submitbtn" type="submit">Verzenden</button>
          </div>
        </div>
      </div>
    </div>
  );
}
