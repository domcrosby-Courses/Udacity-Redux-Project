import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import auth from './ducks/auth';
import questions from './ducks/questions';

// Redux combines the reducers together
export default combineReducers({
  auth,
  questions,
  loadingBar: loadingBarReducer
});
