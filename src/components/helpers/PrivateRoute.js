import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  user: PropTypes.string.isRequired
};

const defaultProps = {};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, user, redirecta, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user === 'unselected' ? (
        <Redirect
          to={{
            pathname: '/login',
            // eslint-disable-next-line react/prop-types
            state: { redirectUrl: redirecta ? props.location.pathname : '/' }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user };
};

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;
