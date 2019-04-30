import { combineReducers } from 'redux';
import auth from './ducks/auth';

// Redux combines the reducers together
export default combineReducers({
  auth
});
