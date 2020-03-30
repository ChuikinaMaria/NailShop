import React, { Component } from 'react';
import nicelaptop from './membersImages/nicelaptop.jpg';
import akader from './membersImages/akader.jpeg';
import dena from './membersImages/dena.jpeg';
import masha from './membersImages/masha.jpeg';
import mustapha from './membersImages/mustapha.jpeg';
import Team from './TeamInfo/Team';

class About extends Component {
  render() {
    return (
      <div className='about-page py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 my-4 text-dark'>
              <h1 className='text-uppercase display-3'>About Us!</h1>

              <h3>
                We are <strong>Hack Your Future Belgium </strong>students of
                class #6.
              </h3>
              <p>
                Our team consist of four members,two women and two men. After
                6-7 months of learning to code from the famous Hack Your Future
                Belgium and it's wonderful and supporting coaches, we studied
                very hard at least 4-5 hours per day,we have chosen to create
                this Nail Beauty Shop as our final project.
              </p>
              <p>
                Our thanks and gratitude goes to all Hack Your Future founders
                especially Mr.Dries,and all HYF staffs...Evans,Maite,Manon,Lien
                and all our wonderful coaches supporting us from beginning to
                the end.
              </p>
              <h2>WE SAY A BIG THANK YOU ALL!</h2>
              <p>For More Information About Nail Shop Team Members</p>
              <button className='btn main-btn my-4 text-capitalize'>
                Our Team{' '}
              </button>
            </div>
            <div className='col-md-6  about-pictures my-4 d-none d-lg-block'>
              <img
                src={akader}
                alt='akader'
                className='img-1 img-thumbnail about-image'
              />
              <img
                src={nicelaptop}
                alt='laptop'
                className='img-2 img-thumbnail about-image'
              />
              <img
                src={masha}
                alt='masha'
                className='img-3 img-thumbnail about-image'
              />
              <img
                src={mustapha}
                alt='mustapha'
                className='img-4 img-thumbnail about-image'
              />
              <img
                src={dena}
                alt='dena'
                className='img-5 img-thumbnail about-image'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
