import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { logIn, selectUser } from '../ducks/auth';
// import BookShelf from '../components/BookShelf';

const propTypes = {
  actionSelectUser: PropTypes.func.isRequired,
  actionLogIn: PropTypes.func.isRequired,
  selectedUser: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  users: PropTypes.objectOf(PropTypes.object).isRequired
};

const defaultProps = {};

class Login extends Component {
  // This is the correct way of calling a helper function
  change = event => {
    const { actionSelectUser } = this.props;
    actionSelectUser(event.target.value);
  };

  // TODO: You should move some of these components into container components
  render() {
    // eslint-disable-next-line react/prop-types
    const { selectedUser, users, actionLogIn, user, location } = this.props;
    const { state } = location;
    let redirectURL = '/';
    if (state !== undefined) {
      redirectURL = state.redirectUrl;
    }
    if (user !== 'unselected') {
      return <Redirect to={redirectURL} />;
    }
    return (
      <div>
        <p>You must log in to view the page</p>
        <select onChange={this.change} value={selectedUser}>
          <option disabled value="unselected">
            Choose here
          </option>
          {Object.values(users).map(aUser => {
            return (
              <option value={aUser.id} key={aUser.id}>
                {aUser.name}
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
    actionSelectUser: selectUser
  }
)(Login);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
