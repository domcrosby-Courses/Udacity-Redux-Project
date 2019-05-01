import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn, logOut, getUsers } from '../ducks/auth';
// import BookShelf from '../components/BookShelf';

const propTypes = {};

const defaultProps = {};

class Login extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <p>You must log in to view the page</p>
        <select>
          {Object.values(this.props.users).map(user => {
            return (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            this.props.logIn('Dominic');
          }}
        >
          Log in
        </button>
        <button
          onClick={() => {
            this.props.logOut();
          }}
        >
          Log Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, users, selectedUser } = state.auth;
  return { user, users, selectedUser };
}

// second field here is the mapDispatchToProps
export default connect(
  mapStateToProps,
  { logIn, logOut, getUsers }
)(Login);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
