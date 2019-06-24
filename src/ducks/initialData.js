import { showLoading, hideLoading } from 'react-redux-loading';
import getInitialData from '../data/api';
import { receiveUsers, loadedUsers } from './auth';
import { receiveQuestions } from './questions';

// This works because you have Thunk as middleware
export default function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(loadedUsers());
      dispatch(hideLoading());
    });
  };
}
