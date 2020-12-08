import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export default store;
