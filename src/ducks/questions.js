import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../data/api';

import { recieveUsers } from './auth';

// Enter actions here
const RECIEVE_QUESTIONS = 'get_questions';
const VOTE = 'vote';
const ADD_QUESTION = 'ADD_QUESTION';

// Set initial state
// TODO: Find a better way of doing selectedUser as null in options
const INITIAL_STATE = {};

// Action Creators
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

// this loads the question through the API and then updates state
export function handleAddQuestion(t1, t2) {
  return (dispatch, getState) => {
    const { user } = getState().auth;

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: t1,
      optionTwoText: t2,
      author: user
    }).then(res => {
      console.log(res);
      dispatch(addQuestion(res.question));
      dispatch(recieveUsers(res.users));
      dispatch(hideLoading());
    });
  };
}

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    payload: questions
  };
}

export function vote(user, questionID, voteID) {
  return {
    type: VOTE,
    user,
    questionID,
    voteID
  };
}

// TODO: should theoretically do an optimistic load
// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return { ...state, ...action.payload };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case VOTE:
      return {
        ...state,
        [action.questionID]: {
          ...state[action.questionID],
          [action.voteID]: {
            ...state[action.questionID][action.voteID],
            votes: state[action.questionID][action.voteID].votes.concat(action.user)
          }
        }
      };
    default:
      return state;
  }
}
