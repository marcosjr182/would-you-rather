import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { fetchUsers } from '../ducks/users'

class LoginPage extends Component {
  componentDidMount() {
    return this.props.fetch();
  }

  render(props) {
    console.log(props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    return dispatch(fetchUsers())
  }
})

const mapStateToProps = ({ users }) => {
  console.log(users);
  return ({
    users: (users.users || []),
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));

