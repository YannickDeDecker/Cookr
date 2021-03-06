import React from "react";

//Import CSS file
import "./ContactForm.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xdoprqea"
        method="POST"
      >
        <div className="form-group">
        <div className="row">
          <div className="col-md-6">
            <label for="">Naam:</label>
            <input
              type="text"
              name="name"
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
            <label for="">Bedrijf:</label>
            <input
              type="text"
              name="company"
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
          </div>
          <div className="col-md-6">
            <label for="">E-mail:</label>
            <input
              type="text"
              name="email"
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
            <label for="">GSM:</label>
            <input
              type="text"
              name="phone"
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label for="">Bericht:</label>
            <textarea name="message" id=""></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="submitbtn" type="submit">
              Verzenden
            </button>
          </div>
        </div>
      </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
