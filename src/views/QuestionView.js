import React, { Component } from 'react';
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
    const { id } = this.props;
    return (
      <div>
        <Question key={id} id={id} poll />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { id } = props.match.params;
  return { id };
}

export default connect(
  mapStateToProps,
  {}
)(HomeView);

HomeView.propTypes = propTypes;
HomeView.defaultProps = defaultProps;
