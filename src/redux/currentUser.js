import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCurrentUser = createAction("SET_CURRENT_USER");

const defaultState = null;

export default createReducer(defaultState, {
  [setCurrentUser]: (state, action) => action.payload,
});
