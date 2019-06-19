import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogOutButton from '../buttons/LogOutButton';

const propTypes = {
  username: PropTypes.string.isRequired
};

const defaultProps = {};

// eslint-disable-next-line react/prop-types
class Nav extends Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData())
  }

  render() {
    const { username } = this.props;
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
            {username !== 'unselected' && (
              <li>
                <p>
                  Hello,
                  {username}
                </p>
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
  const { username } = state.auth;
  return {
    username
  };
};

export default connect(mapStateToProps)(Nav);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
