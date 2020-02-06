import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Redirect path="" to="/login" />
        <Route path="/" component={Layout}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
