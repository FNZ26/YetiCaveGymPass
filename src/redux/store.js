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





// store es el almacenamiento de datos de toda mi app
// aca se guardan todos los estados (estilo usestate) de cada dato
// en la carpeta slices  van separadas las slice de cada parte de la app (gyms,  perfil, etc)

