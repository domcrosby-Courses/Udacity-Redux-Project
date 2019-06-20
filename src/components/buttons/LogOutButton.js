import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../ducks/auth';

const propTypes = {
  actionLogOut: PropTypes.func.isRequired
};

const defaultProps = {};

class LogOutButton extends Component {
  componentDidMount() {}

  // TODO: Should replace navlink with a button
  render() {
    const { actionLogOut } = this.props;
    return (
      <NavLink
        to="/login"
        onClick={() => {
          actionLogOut();
        }}
      >
        Log Out
      </NavLink>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return { user };
}

// second field here is the mapDispatchToProps
export default connect(
  mapStateToProps,
  {
    actionLogOut: logOut
  }
)(LogOutButton);

LogOutButton.propTypes = propTypes;
LogOutButton.defaultProps = defaultProps;
