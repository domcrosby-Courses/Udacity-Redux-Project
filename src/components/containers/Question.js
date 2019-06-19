import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  question: PropTypes.objectOf(PropTypes.object).isRequired
};

const defaultProps = {};

class Question extends Component {
  componentDidMount() {}

  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This question does not exist</p>;
    }
    const { id, author, optionOne, optionTwo, timestamp } = question;
    return (
      <Link to={`/question/${id}`} className="tweet">
        <div className="tweet-info">
          <div>
            <span>{author}</span>
            <div>{timestamp}</div>
            <p>
              {optionOne.text}
              OR
              {optionTwo.text}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

function mapStateToProps(state, { id }) {
  const { user } = state.auth;
  const { questions } = state.questions;
  return {
    user,
    question: questions[id]
  };
}

export default connect(mapStateToProps)(Question);

Question.propTypes = propTypes;
Question.defaultProps = defaultProps;
