// import { getrPosts } from "./postsApi";

import { getrPosts } from "./postsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getrPosts();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error?.message;
    });
  },
});

export default postsSlice.reducer;
