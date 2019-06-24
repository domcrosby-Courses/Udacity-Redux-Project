import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogOutButton from '../buttons/LogOutButton';

const propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

const defaultProps = {};

// eslint-disable-next-line react/prop-types
class Nav extends Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData())
  }

  render() {
    const { username, avatar } = this.props;
    return (
      <div>
        <nav>
          <div className="navHolder">
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/add">New Question</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leader Board</NavLink>
              </li>
            </ul>
            {username !== 'unselected' && (
              <ul className="login">
                <li>
                  Hello,
                  {username}
                </li>
                <img src={avatar} alt="Avatar" className="avatar" />
                <LogOutButton />
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { username, avatar } = state.auth;
  return {
    username,
    avatar
  };
};

export default connect(mapStateToProps)(Nav);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
