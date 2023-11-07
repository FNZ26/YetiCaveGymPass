import { configureStore } from "@reduxjs/toolkit";
import gymSlice from "./slices/gymSlice";
import { gymApi } from "../services/gymApi"

import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {

        gymSlice,
        [gymApi.reducerPath]: gymApi.reducer,
        authSlice,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gymApi.middleware),
});




