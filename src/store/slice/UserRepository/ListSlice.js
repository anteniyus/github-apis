import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUserRepositories } from "../../../screens/userRepository/service/UserRepositoryService";

export const getUserRepositories = createAsyncThunk(
  "userRepositories",
  (data) => GetUserRepositories(data)
);

const listSlice = createSlice({
  name: "userRepositories",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserRepositories.pending, (state) => {
        state.isLoading = true;
        state.data = [];
        state.error = null;
      })
      .addCase(getUserRepositories.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getUserRepositories.rejected, (state, { error }) => {
        state.data = [];
        state.error = error?.message;
        state.isLoading = false;
      });
  },
});

export default listSlice.reducer;
