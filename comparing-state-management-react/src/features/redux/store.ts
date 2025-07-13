// In Redux,everything essentially happens through a store. So we have one main store. And we can use a
// bunch of reducers to actually combine our store out of simple slices of reducers.

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

export const store = configureStore({
  // Can add multiple reducers
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// store
// reducers
// then call it on the app
// in Redux, the  access data from a store, use selectors
// you don't need to use react to use redux, redux is standalone
