import { configureStore } from "@reduxjs/toolkit";
import userRepositoriesReducer from "./slice/UserRepository/ListSlice";

export default configureStore({
  reducer: {
    userRepositories: userRepositoriesReducer,
  },
});
