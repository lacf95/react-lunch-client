import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Axios from 'axios';
import Input from '../presentational/Input';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      userId: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Application - Sign in'
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password, userId } = this.state;
    const url = 'https://islunchtime.herokuapp.com/api/login';
    const method = 'POST';
    Axios({ url, method, data: { email, password } }).then(res => {
      this.setState({ userId: res.data['_id'] });
    }).catch(err => {
      console.error(err);
    })
  }

  render() {
    const { email, password, userId } = this.state;
    if (userId) {
      return (<Redirect to="/"/>);
    }

    return (
      <form id="user-form" onSubmit={ this.handleSubmit }>
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
