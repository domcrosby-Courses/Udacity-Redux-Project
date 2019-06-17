import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../ducks/auth';

const propTypes = {
  actionLogOut: PropTypes.func.isRequired
};

const defaultProps = {};

class LogOutButton extends Component {
  componentDidMount() {}

  render() {
    const { actionLogOut } = this.props;
    return (
      <button
        type="submit"
        onClick={() => {
          actionLogOut();
        }}
      >
        Log Out
      </button>
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
