import React, { Component } from 'react';
import { db } from '../../firebase/firebase.utils';
import './Form.style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    db.collection('contacts')
      .add({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })
      .then(() => {
        alert('message has been submitted');
      })
      .catch(error => {
        alert(error.message);
      });

    this.setState({
      name: '',
      email: '',
      message: '',
    })
  };



  render() {
    return (
      <form className="form">
                <h1>Contact me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores dolorum repellendus deserunt laborum fugiat expedita
              voluptatum tenetur obcaecati esse, animi, saepe ut pariatur odit,
        
            </p>
        <label htmlFor="name"> Name</label>
        <div className="field">
          <input
            id="name"
            className="form-input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <label htmlFor="email">Email</label>
        <div className="field">
          <input
            id="email"
            className="form-input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
          ></textarea>
        </div>
        <div className="">
          <button onSubmit={this.handleSubmit} type="submit" className="button">
           Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
