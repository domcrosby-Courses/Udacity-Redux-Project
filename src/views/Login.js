import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn, logOut } from '../ducks/auth';
// import BookShelf from '../components/BookShelf';

const propTypes = {};

const defaultProps = {};

class Login extends Component {
  render() {
    return (
      <div>
        <p>You must log in to view the page</p>
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
  const { user } = state.auth;
  return { user };
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: user => dispatch(logIn(user)),
    logOut: () => dispatch(logOut())
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
