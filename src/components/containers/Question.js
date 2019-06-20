import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: should expand proptype to cover contents
const propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  poll: PropTypes.bool,
  answered: PropTypes.bool.isRequired
};

const defaultProps = {
  poll: false
};

class Question extends Component {
  componentDidMount() {}

  render() {
    // eslint-disable-next-line react/prop-types
    const { question } = this.props;

    if (question === null) {
      return <p>This question does not exist</p>;
    }
    const { id, optionOne } = question;
    const { avatar, username, poll, answered, voters } = this.props;
    return (
      <div className="question-info">
        <div className="question-title">{`${username} asks:`}</div>
        <div className="question-icon">
          <img src={avatar} alt={`Avatar of ${username}`} className="avatar-big" />
        </div>
        {poll && answered && (
          <div className="question-description">
            <p>{`...${optionOne.votes.length}...${voters}`}</p>
          </div>
        )}
        {poll && !answered && (
          <div className="question-description">
            <p>Would you rather</p>
            <p>{`...${optionOne.text}...`}</p>
          </div>
        )}
        {!poll && (
          <div className="question-description">
            <p>Would you rather</p>
            <p>{`...${optionOne.text}...`}</p>
            <Link to={`/question/${id}`} className="view-poll">
              View Poll
            </Link>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, { id, poll }) {
  const { user, users } = state.auth;
  const { questions } = state.questions;
  const question = questions[id];
  const userObject = users[question.author];
  return {
    poll,
    question,
    avatar: userObject.avatarURL,
    username: userObject.name,
    answered: question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user),
    voters: question.optionOne.votes.length + question.optionTwo.votes.length
  };
}

export default connect(mapStateToProps)(Question);

Question.propTypes = propTypes;
Question.defaultProps = defaultProps;
