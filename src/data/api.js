// API is used so that you can rn as if reaching out to DB
// eslint-disable-next-line import/extensions
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA.js';

export default function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions
  }));
}

export function getUsers() {
  return Promise.all([_getUsers()]).then(([users]) => {
    return {
      users
    };
  });
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}
