import React, { Component } from 'react';

class UserFormDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <section className='appt-form py-5'>
        <div className='container'>
          <div>
            <h1>Book For Appointment Here</h1>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-lg-6'>
              <form className='was-validated'>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Name'
                    name='name'
                    required
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                  />

                  <div className='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='tel'
                    placeholder='Phone Number'
                    name='phone'
                    required
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                  />

                  <div class='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Email'
                    name='email'
                    required
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                  />
                  <div class='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>

                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='City'
                    name='city'
                    required
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                  />
                  <div class='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>
                <div className='form-group'>
                  <label for='sel1'>Choose a service:</label>

                  <select
                    className='form-control'
                    id='sel1'
                    type='text'
                    name='service'
                    required
                    onChange={handleChange('service')}
                    defaultValue={values.service}
                  >
                    <option></option>
                    <option>Manucure</option>
                    <option>Manucure & Colors</option>
                    <option>Acrylic NewSet</option>
                    <option>Acrylic Retouch</option>
                    <option>Gel New NewSet</option>
                    <option>Gel Retouch</option>
                    <option>Shellac</option>
                    <option>Pedicure</option>
                    <option>Pedicure & Colors</option>
                    <option>Remove Nails</option>
                    <option>Nail Art </option>
                  </select>

                  <div class='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='datetime'
                    placeholder='Appointment Date'
                    name='aptdate'
                    required
                    onChange={handleChange('aptdate')}
                    defaultValue={values.aptdate}
                  />
                  <div class='valid-feedback'>Valid.</div>
                  <div class='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>
                <div className='form-group'>
                  <label for='sel1'>Select Time:</label>

                  <select
                    className='form-control'
                    id='sel1'
                    type='text'
                    name='apttime'
                    required
                    onChange={handleChange('apttime')}
                    defaultValue={values.apttime}
                  >
                    <option></option>
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                  </select>

                  <div class='invalid-feedback'>
                    Please fill out this field.
                  </div>
                </div>

                <div className='form-group'>
                  <textarea
                    className='form-control'
                    name='about'
                    onChange={handleChange('about')}
                    defaultValue={values.about}
                    placeholder='Special Request'
                  />
                </div>

                <div className='form-group'>
                  <button
                    className='btn btn-primary'
                    type='submit'
                    label='Continue'
                    onClick={this.continue}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserFormDetails;
