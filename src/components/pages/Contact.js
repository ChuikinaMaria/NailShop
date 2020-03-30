import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <section className='contact-page py-5'>
        <div className='container'>
          <div className='well well-sm'>
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <iframe
                src='https://www.google.com/maps/d/embed?mid=1d3_ypVE6RmyumVdFo5UPB7Cfz1ywuWRq'
                style={{
                  border: '0',
                  width: '100%',
                  height: '315px',
                  frameBorder: '0'
                }}
                allowFullScreen
              ></iframe>
            </div>
            <div className='col-md-6'>
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='tel'
                    className='form-control'
                    placeholder='Phone Number'
                  />
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      cols='30'
                      rows='3'
                      placeholder='Message'
                    />
                  </div>
                </div>
                <Link className='btn btn-outline-primary text-uppercase mt-1'>
                  <i className='fa fa-paper-plane-o' aria-hidden='true' />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
