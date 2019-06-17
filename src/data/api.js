// eslint-disable-next-line import/extensions
import { _getUsers, _getQuestions } from './_DATA.js';

export default function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions
  }));
}
