import { _getUsers } from '../data/_DATA';

// Enter actions here
const LOGIN_USER = 'login_user';
const LOGOUT_USER = 'logout_user';
const GET_USERS = 'get_users';
const SELECT_USER = 'select_user';

// Set initial state
// TODO: Find a better way of doing selectedUser as null in options
const INITIAL_STATE = { user: 'unselected', selectedUser: 'unselected', users: {} };

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

// THUNKED as has timeout
export function getUsers() {
  return dispatch => {
    _getUsers().then(users => dispatch({ type: GET_USERS, payload: users }));
  };
}

export function selectUser(user) {
  return {
    type: SELECT_USER,
    payload: user
  };
}

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      // make new object - you can't keep the old
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null, selectedUser: 'unselected' };
    case GET_USERS:
      return { ...state, users: action.payload };
    case SELECT_USER:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
}
