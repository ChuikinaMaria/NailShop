import React, { Component } from 'react';

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // ADD PROCESS TO SERVER HERE //
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        name,

        phone,
        email,
        city,
        service,
        aptdate,
        apttime,
        about
      }
    } = this.props;

    return (
      <section className='confirm-page  py-5'>
        <div className='container'>
          <h2>Confirmation Page</h2>

          <div className='row'>
            <div className='col-sm-12 col-lg-6 '>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={name}
                  />
                </div>

                <div className='form-group '>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={phone}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={email}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={city}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={service}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={aptdate}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={apttime}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={about}
                  />
                </div>

                <div className='form-group'>
                  <button
                    className='btn btn-success'
                    type='submit'
                    label='Continue'
                    onClick={this.continue}
                  >
                    Confirm & Continue
                  </button>
                </div>
                <div className='form-group'>
                  <button
                    className='btn btn-primary'
                    type='submit'
                    label='Back'
                    onClick={this.back}
                  >
                    Go Back
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

export default Confirm;
