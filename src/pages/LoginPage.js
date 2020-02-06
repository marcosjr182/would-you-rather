import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { fetchUsers } from '../ducks/users'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarPreview: '', 
    }
  }

  componentDidMount() {
    return this.props.fetch();
  }

  render() {
    const { users: available } = this.props;
    // console.log(props);
    return (
      <div className="LoginPage">
        <div className="card">
          <div className="card-header">
            Welcome to would-you-rather
          </div>

          <div className="card-content">
            <div className="fake-avatar">

            </div>

            <div className="user-selector">
              <select>
                {
                  available.map((user, i) => {
                    return (
                      <option key={`user-${i}`}>
                        { user.name }
                      </option>
                    );
                  })
                }
              </select>
            </div>

          </div>

          <div className="card-footer">
            <a href="#" className="btn btn-primary btn--full">
              ENTRAR
            </a>
          </div>
        </div>
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

