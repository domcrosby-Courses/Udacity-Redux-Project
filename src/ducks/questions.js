// Enter actions here
const RECIEVE_QUESTIONS = 'get_questions';
const VOTE = 'vote';

// Set initial state
// TODO: Find a better way of doing selectedUser as null in options
const INITIAL_STATE = {};

// Action Creators

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
