import * as api from '../api/_DATA';

export const LIST_USERS = 'LIST_USERS';
export const LIST_USERS_ERROR = 'LIST_USERS_ERROR';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


/* Reducer */

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_USERS_ERROR:
      return ({ ...state, error: action.payload });
    
    case LIST_USERS:
      return ({ ...state, users: action.payload });

    case LOGIN:
      return ({ ...state, currentUser: action.payload });

    case LOGOUT:
      return ({ ...state, currentUser: undefined });

    default:
      return state;
  }
}

/* Actions */

const loginAction = (payload) => ({
  type: LOGIN,
  payload: payload
});

const logoutAction = () => ({
  type: LOGOUT,
  payload: undefined
});

const listUsersAction = (payload) => ({
  type: LIST_USERS,
  payload: payload
})

const listUsersErrorAction = (payload) => ({
  action: LIST_USERS_ERROR,
  payload: payload
})

/* Fetchers */

export const fetchUsers = () => (dispatch) => {
  return api._getUsers()
    .then((users) => dispatch(listUsersAction(Object.values(users))))
    .catch((error) => dispatch(listUsersErrorAction(error)))
}

export const login = (user) => (dispatch) => {
  return dispatch(loginAction(user));
}

export const logout = () => (dispatch) => {
  return dispatch(logoutAction());
}
