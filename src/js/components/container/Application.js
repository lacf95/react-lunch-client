import React, { Component } from 'react';
import styles from '../../../css/application.sass';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <div className={ styles.gridContainer }>
          <div className={ styles.gridItem, styles.sidebar }>
            <h1>App</h1>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/sign-in"><li>Sign In</li></Link>
            </ul>
          </div>
          <div className={ styles.gridItem, styles.main }>
            <Route exact path="/" component={ Home }/>
            <Route path="/sign-in" component={ SignIn }/>
          </div>
        </div>
      </Router>
    );
  }
}

const wrapper = document.getElementById('application');
wrapper ? ReactDOM.render(<Application />, wrapper) : false;

export default Application;
