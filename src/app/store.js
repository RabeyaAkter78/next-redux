import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/features/counters/counterSlice";
import postReducer from "@/Components/features/posts/postsSlice";
const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer,
  },
});
export default store;
