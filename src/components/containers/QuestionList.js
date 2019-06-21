import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';

const propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

const defaultProps = {};

class QuestionList extends Component {
  componentDidMount() {}

  render() {
    const { questions } = this.props;
    return (
      <div className="dashboard-list">
        {questions.map(question => (
          <Question key={question.id} id={question.id} />
        ))}
      </div>
    );
  }
}

// Notes: you could use object.keys here to get just ID's but sorting would be harder
function mapStateToProps(state, { answered }) {
  const { user } = state.auth;
  const { questions } = state;
  return {
    user,
    questions: Object.values(questions)
      .filter(aQuestion => {
        return (
          (aQuestion.optionOne.votes.includes(user) || aQuestion.optionTwo.votes.includes(user)) ===
          answered
        );
      })
      .sort((a, b) => b.timestamp - a.timestamp)
  };
}

// second field here is the mapDispatchToProps
export default connect(
  mapStateToProps,
  {}
)(QuestionList);

QuestionList.propTypes = propTypes;
QuestionList.defaultProps = defaultProps;
