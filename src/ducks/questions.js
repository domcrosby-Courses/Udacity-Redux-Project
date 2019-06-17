// Enter actions here
const RECIEVE_QUESTIONS = 'get_questions';

// Set initial state
// TODO: Find a better way of doing selectedUser as null in options
const INITIAL_STATE = { questions: {} };

// Action Creators

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    payload: questions
  };
}

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}
