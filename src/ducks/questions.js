import { showLoading, hideLoading } from 'react-redux-loading';
import { saveQuestion, saveQuestionAnswer } from '../data/api';

import { receiveUsers } from './auth';

// Enter actions here
const RECEIVE_QUESTIONS = 'get_questions';
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
      dispatch(addQuestion(res.question));
      dispatch(receiveUsers(res.users));
      dispatch(hideLoading());
    });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
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

export function handleVote(authedUser, qid, answer) {
  return dispatch => {
    const answerInfo = { authedUser, qid, answer };

    return saveQuestionAnswer(answerInfo).then(res => {
      // dispatch(vote(authedUser, qid, answer));
      dispatch(receiveUsers(res.users));
      dispatch(receiveQuestions(res.questions));
    });
  };
}

// TODO: should theoretically do an optimistic load
// You could either call receiveQuestions or put state in twice
// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
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

// If you wanted to do optimistic updates you coulddo something like this
// export function handleToggleTweet (info) {
//   return (dispatch) => {
//     dispatch(toggleTweet(info))

//     return saveLikeToggle(info)
//       .catch((e) => {
//         console.warn('Error in handleToggleTweet: ', e)
//         dispatch(toggleTweet(info))
//         alert('The was an error liking the tweet. Try again.')
//       })
//   }
// }
