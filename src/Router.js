import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const Router = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <Redirect exact path="/" to="/login" />
      <Route path="/" component={Layout}>
        <Switch>
          <Route exact path="/">
            {currentUser ? <HomePage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            {currentUser ? <Redirect to="/dashboard" /> : <LoginPage />}
          </Route>
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ users }) => ({
  currentUser: users.currentUser,
});

export default connect(mapStateToProps)(Router);
