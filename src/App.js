import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/login" component={LoginPage} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
