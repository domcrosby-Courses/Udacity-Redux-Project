import { showLoading, hideLoading } from 'react-redux-loading';
import getInitialData from '../data/api';
import { recieveUsers, loadedUsers } from './auth';
import { recieveQuestions } from './questions';

// This works because you have Thunk as middleware
export default function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
      dispatch(loadedUsers());
      dispatch(hideLoading());
    });
  };
}
