import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./slices/package-slice";

export const store = configureStore({
  reducer: {
    package: packageReducer,
  },
});
