import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Question } from '../Components';

const propTypes = {
  id: PropTypes.string.isRequired
};

const defaultProps = {};

class HomeView extends Component {
  componentDidMount() {
    // TODO: add something in here
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { id, questions } = this.props;
    if (questions[id] === undefined) {
      return <Redirect to="/404" />;
    }
    return (
      <div>
        <Question key={id} id={id} poll />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { id } = props.match.params;
  const { questions } = state;
  return { id, questions };
}

export default connect(
  mapStateToProps,
  {}
)(HomeView);

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;
