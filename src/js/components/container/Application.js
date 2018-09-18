import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SignIn from './SignIn';

class Home extends Component {
  componentDidMount() {
    document.title = 'Application'
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

class Application extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Application'
    };
    document.title = this.state.title;
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
          </ul>
          <Route exact path="/" component={ Home }/>
          <Route path="/sign-in" component={ SignIn }/>
        </div>
      </Router>
    );
  }
}

const wrapper = document.getElementById('application');
wrapper ? ReactDOM.render(<Application />, wrapper) : false;

export default Application;
