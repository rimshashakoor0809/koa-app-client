
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./api/userSlice";
import api from './api/api';

export const store = configureStore({
  reducer: {
    api,
    [userSlice.reducerPath]: userSlice.reducer,


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userSlice.middleware)
});