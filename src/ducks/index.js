import { reducer as usersReducer } from './users';
import { combineReducers } from 'redux';

export default combineReducers({
  users: usersReducer
});
