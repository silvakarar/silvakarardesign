import React, { Component } from 'react';
import Form from '../../components/forms/Form';
// import SquareAnimation from '../../components/square-animation/square-animation';
import './contact-form-page.styles.css';
import Particles from 'react-particles-js';

const parcticleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 900
      }
   }
  },
}


class ContactFormPage extends Component {

  render() {
    return (
      <div className=" row contact__page mx-2">
             <Particles
          className='particles'
          params={parcticleOptions}
          // style={{
          //   width: '100%',
          //   backgroundImage: `url(${logo})`,
          // }}
        />
        <div class="row">
          {/* <SquareAnimation /> */}

          <Form />
        </div>
      </div>
    );
  }
}

export default ContactFormPage;
