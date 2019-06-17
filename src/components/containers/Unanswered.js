import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Unanswered extends Component {
  componentDidMount() {
    const { user } = this.props;
    actionGetQuestions(user);
  }

  render() {
    return <React.Fragment />;
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return { user };
}

// second field here is the mapDispatchToProps
export default connect(
  mapStateToProps,
  {
    actionGetQuestions: getQuestions
  }
)(Unanswered);

Unanswered.propTypes = propTypes;
Unanswered.defaultProps = defaultProps;
