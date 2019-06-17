import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import handleInitialData from '../ducks/initialData';
import HomeView from '../views/HomeView';
import Login from '../views/Login';
import '../App.css';
import { PrivateRoute, Nav } from '../Components';

const propTypes = {};

const defaultProps = {};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={HomeView} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user };
};

export default connect(mapStateToProps)(App);

App.propTypes = propTypes;
App.defaultProps = defaultProps;
