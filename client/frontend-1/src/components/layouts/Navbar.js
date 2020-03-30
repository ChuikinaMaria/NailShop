import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment>
      <nav className='navbar sticky-top navbar-expand-lg navbar-light '>
        <Link className='navbar-brand ml-6' to='/'>
          <img
            src={logo}
            alt='logo'
            style={{ width: '200px', height: '80px' }}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span>
            <i className='fas fa-bars' style={{ color: '#fff' }} />
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto font-weight-bold'>
            <li className='nav-item active '>
              <Link className='nav-link text-dark text-uppercase ml-5' to='/'>
                Home&nbsp;<i className='fas fa-home'></i>
                <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-dark text-uppercase ml-5'
                to='/services'
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-dark text-uppercase ml-5'
                to='/about'
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-dark text-uppercase ml-5'
                to='/contact'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className='spinner-grow text-white' role='status'></div>
          <Link to='/appointment'>
            <button type='button' className='btn btn-dark btn-lg'>
              Book Now
            </button>
          </Link>
        </div>
        <div>
          <Link to='/cart' className='ml-auto'>
            <button className='btn btn-success btn-lg'>Booked Service</button>
          </Link>
        </div>
      </nav>

      <h3 className='mt-3 ml-3 font-weight-bold font-italic fixed'>
        Best Nail Shop Ever!
      </h3>
    </React.Fragment>
  );
}

export default Navbar;
