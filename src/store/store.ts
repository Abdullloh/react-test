import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "../features/account/slice";

export const store = configureStore({
  reducer: {
    [accountSlice.name]: accountSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
