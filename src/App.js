import './App.css';
import React from 'react';
import ContactFormPage from '../src/pages/contact-form-page/contact-form-page';
// import Form from './components/forms/Form';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import Particles from 'react-particles-js';
import { GiRabbit } from 'react-icons/gi';

const parcticleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }

  },
}



function App() {
 
  return (
    <div className="">
        <Particles
          className='particles'
          params={parcticleOptions}
  
        />
    
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/contact-form-page' component={ContactFormPage} />
    </Switch>
     
  
    </div>
  );
}

export default App;
