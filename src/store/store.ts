import { configureStore } from "@reduxjs/toolkit";
import { PropertyApi } from "./Api/proprertyApi";

export const store = configureStore({
  reducer: {
    [PropertyApi.reducerPath]: PropertyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PropertyApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
