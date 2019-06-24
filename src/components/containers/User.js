import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// TODO: should expand proptype to cover contents
const propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  answered: PropTypes.number.isRequired,
  asked: PropTypes.number.isRequired
};

const defaultProps = {};

// eslint-disable-next-line react/prefer-stateless-function
class User extends Component {
  // TODO: Change selection to tick box
  render() {
    // eslint-disable-next-line react/prop-types
    const { avatar, username, asked, answered } = this.props;
    return (
      <div className="question-info">
        <div className="question-title">{username}</div>
        <div className="question-icon">
          <img src={avatar} alt={`Avatar of ${username}`} className="avatar-big" />
        </div>
        <div className="question-description">
          <p>{`Questions Asked: ${asked}`}</p>
          <p>{`Questions Answered: ${answered}`}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  const { users } = state.auth;
  const userObject = users[id];
  return {
    avatar: userObject.avatarURL,
    username: userObject.name,
    answered: Object.keys(userObject.answers).length,
    asked: userObject.questions.length
  };
}

export default connect(
  mapStateToProps,
  {}
)(User);

User.propTypes = propTypes;
User.defaultProps = defaultProps;
