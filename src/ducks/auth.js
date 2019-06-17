// Enter actions here
const LOGIN_USER = 'login_user';
const LOGOUT_USER = 'logout_user';
const RECIEVE_USERS = 'recieve_users';
const SELECT_USER = 'select_user';
const LOADED_USERS = 'loaded_users';

// Set initial state
// TODO: Find a better way of doing selectedUser as null in options
const INITIAL_STATE = { user: 'unselected', selectedUser: 'unselected', users: {}, loading: true };

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

export function recieveUsers(users) {
  return {
    type: RECIEVE_USERS,
    payload: users
  };
}

export function selectUser(user) {
  return {
    type: SELECT_USER,
    payload: user
  };
}

export function loadedUsers() {
  return {
    type: LOADED_USERS
  };
}

// Reducer - must be export default function reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      // make new object - you can't keep the old
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: 'unselected', selectedUser: 'unselected' };
    case RECIEVE_USERS:
      return { ...state, users: action.payload };
    case SELECT_USER:
      return { ...state, selectedUser: action.payload };
    case LOADED_USERS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
