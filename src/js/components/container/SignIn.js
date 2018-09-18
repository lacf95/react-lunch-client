import React, { Component } from 'react';
import Input from '../presentational/Input';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.title = 'Application - Sign in'
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form id="user-form">
        <fieldset>
          <legend>Sign in</legend>
          <Input
            text="Email:"
            label="email"
            type="email"
            id="email"
            value={ email }
            handleChange={ this.handleChange }
          />
          <Input
            text="Password:"
            label="password"
            type="password"
            id="password"
            value={ password }
            handleChange={ this.handleChange }
          />
          <input
            type="submit"
            value="Sign in"
          />
      </fieldset>
      </form>
    );
  }
}

export default SignIn;
