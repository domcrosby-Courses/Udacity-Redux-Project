import { combineReducers } from 'redux';
import auth from './ducks/auth';
import questions from './ducks/questions';

// Redux combines the reducers together
export default combineReducers({
  auth,
  questions
});
