import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import handleInitialData from '../ducks/initialData';
import HomeView from '../views/HomeView';
import NewView from '../views/NewView';
import LeaderView from '../views/LeaderView';
import QuestionView from '../views/QuestionView';
import four04 from '../views/four04';
import Login from '../views/Login';
import '../App.css';
import { PrivateRoute, Nav } from '../Components';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  actionInitialData: PropTypes.func.isRequired
};

const defaultProps = {};

class App extends Component {
  componentDidMount() {
    const { actionInitialData } = this.props;
    actionInitialData();
  }

  // use fragment here to group
  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        <Nav />
        <div className="container">
          {loading === true ? null : (
            <div>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={HomeView} />
              <PrivateRoute exact path="/add" component={NewView} />
              <PrivateRoute exact path="/leaderboard" component={LeaderView} />
              <PrivateRoute exact path="/question/:id" component={QuestionView} redirecta />
              <PrivateRoute exact path="/404" component={four04} />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { user, loading } = state.auth;
  return { user, loading };
};

// second field here is the mapDispatchToProps
export default connect(
  mapStateToProps,
  {
    actionInitialData: handleInitialData
  }
)(App);

App.propTypes = propTypes;
App.defaultProps = defaultProps;
