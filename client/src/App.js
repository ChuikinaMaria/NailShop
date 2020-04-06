import React from 'react';
import logo from './logo 1.png';
import './App.css';
import Appointments from './components/appointments'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Make an appointment!
        </p>
            
      <Appointments />
    </div>
    

  );
}

export default App;
