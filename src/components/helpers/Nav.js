import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogOutButton from '../buttons/LogOutButton';

const propTypes = {
  user: PropTypes.string.isRequired
};

const defaultProps = {};

// eslint-disable-next-line react/prop-types
class Nav extends Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData())
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/new">New Question</NavLink>
            </li>
            <li>
              <NavLink to="/leader">LeaderBoard</NavLink>
            </li>
            {user !== 'unselected' && (
              <li>
                <p>Welcome {user}</p>
                <LogOutButton />
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user };
};

export default connect(mapStateToProps)(Nav);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
