import React from 'react';
import { Alert } from 'reactstrap';

//Import CSS file
import './ContactForm.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;

    //ALERT INLINE STYLING
    const alertStyle = {
      backgroundColor: '#fbbe88',
      border: 'none',
      color: 'white',
      padding: '0.35rem 0.75rem',
      borderRadius: '0',
    };

    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/f/xdoprqea'
        method='POST'
      >
        {status === 'ERROR' && (
          <div>
            {' '}
            <Alert style={alertStyle}>
              Er ging iets verkeerds. Heb je alle velden ingevuld?
            </Alert>
          </div>
        )}
        <div className='form-group'>
          <div className='row'>
            <div className='col-md-6'>
              <label for=''>Naam:</label>
              <input
                type='text'
                name='name'
                id=''
                className='form-control'
                placeholder=''
                aria-describedby='helpId'
                required
              ></input>
              <label for=''>Bedrijf:</label>
              <input
                type='text'
                name='company'
                id=''
                className='form-control'
                placeholder=''
                aria-describedby='helpId'
              ></input>
            </div>
            <div className='col-md-6'>
              <label for=''>E-mail:</label>
              <input
                type='text'
                name='email'
                id=''
                className='form-control'
                placeholder=''
                aria-describedby='helpId'
                required
              ></input>
              <label for=''>GSM:</label>
              <input
                type='text'
                name='phone'
                id=''
                className='form-control'
                placeholder=''
                aria-describedby='helpId'
              ></input>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <label for=''>Bericht:</label>
              <textarea name='message' id='' required></textarea>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              {status === 'SUCCESS' ? (
                <div>
                  <Alert style={alertStyle}>
                    Bedankt voor je bericht. Ik zal u zo snel mogelijk contacteren.
                  </Alert>
                </div>
              ) : (
                <div className='btn-container'>
                  <button className='submitbtn' type='submit'>
                    Verzenden
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
