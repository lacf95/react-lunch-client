import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input';

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <form id="user-form">
        <fieldset>
          <legend>Personal information</legend>
          <Input
            text="First name:"
            label="firstName"
            type="text"
            id="firstName"
            value={ firstName }
            handleChange={ this.handleChange }
          />
          <Input
            text="Last name:"
            label="lastName"
            type="text"
            id="lastName"
            value={ lastName }
            handleChange={ this.handleChange }
          />
          <Input
            text="Email:"
            label="email"
            type="email"
            id="email"
            value={ email }
            handleChange={ this.handleChange }
          />
      </fieldset>
      </form>
    );
  }
}

const wrapper = document.getElementById('create-user-form');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
