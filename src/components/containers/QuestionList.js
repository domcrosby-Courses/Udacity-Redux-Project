import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  questions: PropTypes.objectOf(PropTypes.object).isRequired,
  answered: PropTypes.bool.isRequired
};

const defaultProps = {};

class QuestionList extends Component {
  render() {
    const { questions, answered } = this.props;
    return (
      <ul className="dashboard-list">
        {questions
          .filter(question => {
            return question.answered === answered;
          })
          .map(question => (
            <li key={question.id}>
              <p id={question.id} />
            </li>
          ))}
      </ul>
    );
  }
}

// TODO: add in method to sort
function mapStateToProps(state) {
  const { user } = state.auth;
  const { questions } = state.questions;
  return {
    user,
    questions: Object.values(questions).map(aQuestion => {
      const answered =
        aQuestion.optionOne.votes.includes(user) || aQuestion.optionTwo.votes.includes(user);
      return { ...aQuestion, answered };
    })
  };
}

// second field here is the mapDispatchToProps
export default connect(
  mapStateToProps,
  {}
)(QuestionList);

QuestionList.propTypes = propTypes;
QuestionList.defaultProps = defaultProps;
