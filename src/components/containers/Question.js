import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleVote } from '../../ducks/questions';

// TODO: should expand proptype to cover contents
const propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  poll: PropTypes.bool,
  answered: PropTypes.bool.isRequired,
  voters: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired
};

const defaultProps = {
  poll: false
};

class Question extends Component {
  completed(option) {
    const { voters, user } = this.props;
    const votes = option.votes.length;
    const perc = Math.round((votes / voters) * 100);
    const selec = option.votes.includes(user) ? ' - selected' : '';
    return `${option.text} (${votes} / ${voters}) = ${perc}% ${selec}`;
  }

  // TODO: Change selection to tick box
  render() {
    // eslint-disable-next-line react/prop-types
    const { question, actionVote, user } = this.props;

    if (question === null) {
      return <p>This question does not exist</p>;
    }
    const { id, optionOne, optionTwo } = question;
    const { avatar, username, poll, answered } = this.props;
    return (
      <div className="question-info">
        <div className="question-title">{`${username} asks:`}</div>
        <div className="question-icon">
          <img src={avatar} alt={`Avatar of ${username}`} className="avatar-big" />
        </div>
        {poll && answered && (
          <div className="question-description">
            <p>Would you rather</p>
            <p>{this.completed(optionOne)}</p>
            <p>{this.completed(optionTwo)}</p>
          </div>
        )}
        {poll && !answered && (
          <div className="question-description">
            <p>Would you rather</p>

            <input
              type="radio"
              value="optionOne"
              onChange={() => {
                actionVote(user, id, 'optionOne');
              }}
            />
            {optionOne.text}
            <br />

            <input
              type="radio"
              value="optionTwo"
              onChange={() => {
                actionVote(user, id, 'optionTwo');
              }}
            />
            {optionTwo.text}
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
  const { questions } = state;
  const question = questions[id];
  const userObject = users[question.author];
  return {
    poll,
    question,
    user,
    avatar: userObject.avatarURL,
    username: userObject.name,
    answered: question.optionOne.votes.includes(user) || question.optionTwo.votes.includes(user),
    voters: question.optionOne.votes.length + question.optionTwo.votes.length
  };
}

export default connect(
  mapStateToProps,
  {
    actionVote: handleVote
  }
)(Question);

Question.propTypes = propTypes;
Question.defaultProps = defaultProps;
