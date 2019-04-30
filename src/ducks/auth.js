// Enter actions here
const LOGIN_USER = 'login_user';
const LOGOUT_USER = 'logout_user';

// Set initial state
const INITIAL_STATE = { user: null };

// Action Creators
export function logIn(user) {
  return {
    type: LOGIN_USER,
    payload: user
  };
}

export function logOut() {
  return {
    type: LOGOUT_USER
  };
}

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      // make new object - you can't keep the old
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}
