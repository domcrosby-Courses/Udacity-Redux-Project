import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { handleInitialData } from '../actions/shared'
import HomeView from '../views/HomeView';
import Login from '../views/Login';
import '../App.css';

class App extends React.Component {
  componentDidMount() {
    // this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/login"
          component={() => (
            // Renders the login page
            <Login />
          )}
        />
        <Route
          exact
          path="/"
          component={() => (
            // Renders the login page
            <HomeView />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user };
};

export default connect(mapStateToProps)(App);
