import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../ducks/questions';

const propTypes = {
  actionAddQuestion: PropTypes.func.isRequired
};

const defaultProps = {};

class NewView extends Component {
  state = {
    t1: '',
    t2: '',
    redirect: false
  };

  handleChange1 = e => {
    const text = e.target.value;

    this.setState(() => ({
      t1: text
    }));
  };

  handleChange2 = e => {
    const text = e.target.value;

    this.setState(() => ({
      t2: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { t1, t2 } = this.state;
    const { actionAddQuestion } = this.props;

    actionAddQuestion(t1, t2).then(() => {
      this.setState(() => ({
        t1: '',
        t2: '',
        redirect: true
      }));
    });
  };

  render() {
    const { t1, t2, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="question-info">
        <div className="question-title">New Question</div>
        <div className="question-description">
          <p className="center">Would you rather</p>
          <form className="new-tweet center oneH" onSubmit={this.handleSubmit}>
            <textarea
              placeholder="Enter text for Option 1"
              className="textarea"
              maxLength={280}
              value={t1}
              onChange={this.handleChange1}
            />
            <div className="center margin-20">OR</div>
            <textarea
              placeholder="Enter text for Option 2"
              className="textarea"
              maxLength={280}
              value={t2}
              onChange={this.handleChange2}
            />
            <button className="btn" type="submit">
              Add Question
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return { user };
}

export default connect(
  mapStateToProps,
  { actionAddQuestion: handleAddQuestion }
)(NewView);

NewView.propTypes = propTypes;
NewView.defaultProps = defaultProps;
