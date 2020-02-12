import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { fetchUsers, login } from '../ducks/users'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarPreview: '', 
    }

    this.handleAvatarPreview = this.handleAvatarPreview.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    return this.props.fetch();
  }

  handleLogin(evt) {
    const { target: { value } } = evt;
    const { login, users } = this.props;
    const targetUser = users[value];
    return targetUser && login(targetUser);
  }

  handleAvatarPreview(evt) {
    const { target } = evt;
    if (target) {
      const { selectedIndex } = target;
      const label = target[selectedIndex].text;
      const initials = (label.split(" ").map((n) => n[0]) || '');
      return this.setState({ avatarPreview: initials });
    }
  }

  render() {
    const {
      users: available,
    } = this.props;
    const { avatarPreview } = this.state;
    // console.log(props);
    return (
      <div className="LoginPage">
        <div className="card">
          <div className="card-header">
            Welcome to would-you-rather
          </div>

          <div className="card-content">
            <div className="fake-avatar">
              { avatarPreview }
            </div>

            <div className="user-selector">
              <select onChange={this.handleAvatarPreview}>
                {
                  available.map((user) => {
                    return (
                      <option value={user.id} key={`user-${user.id}`}>
                        { user.name }
                      </option>
                    );
                  })
                }
              </select>
            </div>

          </div>

          <div className="card-footer">
            <button
              onClick={this.handleLogin}
              className="btn btn-primary btn--full">
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    return dispatch(fetchUsers())
  },
  login(user) {
    return dispatch(login(user))
  }
});

const mapStateToProps = ({ users }) => ({
  users: (users.users || []),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));

