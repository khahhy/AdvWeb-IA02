import { configureStore } from "@reduxjs/toolkit";
import { photoApi } from "./api/photoApi";

export const store = configureStore({
  reducer: {
    [photoApi.reducerPath]: photoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
