import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import screen from '../pages/screen.jpg';
import Services from './Services';
import Contact from './Contact';
import About from './About';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='landing-page'>
          <div className='container landing-page'>
            <div className='row height-90 align-items-center justify-content-center'>
              <div className='col'>
                <div className='banner text-center'>
                  <h1 className='display-1 text-capitalize w-50 mx-auto'>
                    <strong className='text-nail'>Nail</strong> <br />
                    <br />
                    <small className='text-white'>Shop</small>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Link to='/services' className='btn header-link primary-color'>
            <i className='fas fa-arrow-down'></i>
          </Link>
        </div>

        <Services />
        <About />

        <Contact />
      </React.Fragment>
    );
  }
}
export default Home;
