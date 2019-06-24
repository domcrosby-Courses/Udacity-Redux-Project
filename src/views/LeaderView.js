import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { User } from '../Components';
import 'react-tabs/style/react-tabs.css';

const propTypes = {};

const defaultProps = {};

class LeaderView extends Component {
  componentDidMount() {
    // TODO: add something in here
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { users } = this.props;
    return (
      <div className="dashboard-list">
        {users.map(user => (
          <User key={user.id} id={user.id} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state.auth;
  return {
    users: Object.values(users).sort(
      (a, b) =>
        b.questions.length +
        Object.keys(b.answers).length -
        a.questions.length -
        Object.keys(a.answers).length
    )
  };
}

export default connect(
  mapStateToProps,
  {}
)(LeaderView);

LeaderView.propTypes = propTypes;
LeaderView.defaultProps = defaultProps;
