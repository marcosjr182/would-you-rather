import React, { Component } from 'react';
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
          homepage
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    return dispatch(fetchUsers())
  }
});

const mapStateToProps = ({ users }) => ({
  users: (users.users || []),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));

