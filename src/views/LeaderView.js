import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { QuestionList } from '../Components';
import 'react-tabs/style/react-tabs.css';

const propTypes = {};

const defaultProps = {};

class LeaderView extends Component {
  componentDidMount() {
    // TODO: add something in here
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Unanswered Questions</Tab>
          <Tab>Answered Questions</Tab>
        </TabList>

        <TabPanel>
          <QuestionList answered={false} />
        </TabPanel>
        <TabPanel>
          <QuestionList answered />
        </TabPanel>
      </Tabs>
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
)(LeaderView);

LeaderView.propTypes = propTypes;
LeaderView.defaultProps = defaultProps;
