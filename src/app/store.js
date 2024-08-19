import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/features/counters/counterSlice";
import postsReducer from "@/Components/features/posts/postsSlice";
const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});
export default store;
