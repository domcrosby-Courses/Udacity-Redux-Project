import { showLoading, hideLoading } from 'react-redux-loading';
import getInitialData from '../data/api';
import { recieveUsers } from './auth';
import { recieveQuestions } from './questions';

export default function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
