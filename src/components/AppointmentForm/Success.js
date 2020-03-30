import React, { Component } from 'react';

export class Success extends Component {
  render() {
    return (
      <div className='container my-5 py-5'>
        <div className='col-sm-12 col-lg-6'>
          <h1>Successful</h1>
          <h3>Thank You! Appointment Received</h3>
          <p className='lead'>
            Hope To See You Soon. To Cancel Appointment, Please Call 24hours
            Before Your Appointment Time...
          </p>
        </div>
      </div>
    );
  }
}

export default Success;
