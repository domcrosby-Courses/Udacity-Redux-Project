import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { QuestionList } from '../Components';

const propTypes = {};

const defaultProps = {};

class HomeView extends Component {
  componentDidMount() {
    // TODO: add something in here
  }

  render() {
    return (
      <div>
        <QuestionList answered />
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
  {}
)(HomeView);

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;
