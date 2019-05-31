import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn, logOut, getUsers, selectUser } from '../ducks/auth';
// import BookShelf from '../components/BookShelf';

const propTypes = {
  actionGetUsers: PropTypes.func.isRequired,
  actionSelectUser: PropTypes.func.isRequired,
  actionLogIn: PropTypes.func.isRequired,
  actionLogOut: PropTypes.func.isRequired,
  selectedUser: PropTypes.string.isRequired,
  users: PropTypes.objectOf(PropTypes.object).isRequired
};

const defaultProps = {};

class Login extends Component {
  componentDidMount() {
    const { actionGetUsers } = this.props;
    actionGetUsers();
  }

  // This is the correct way of calling a helper function
  change = event => {
    const { actionSelectUser } = this.props;
    actionSelectUser(event.target.value);
  };

  render() {
    const { selectedUser, users, actionLogIn, actionLogOut } = this.props;
    return (
      <div>
        <p>You must log in to view the page</p>
        <select onChange={this.change} value={selectedUser}>
          <option disabled value="unselected">
            Choose here
          </option>
          {Object.values(users).map(user => {
            return (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          onClick={() => {
            actionLogIn(selectedUser);
          }}
        >
          Log in
        </button>
        <button
          type="submit"
          onClick={() => {
            actionLogOut();
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
  {
    actionLogIn: logIn,
    actionLogOut: logOut,
    actionGetUsers: getUsers,
    actionSelectUser: selectUser
  }
)(Login);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
