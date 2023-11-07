import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url_database } from '../firebase/database'

export const gymApi = createApi({
    reducerPath: "gymApi",
    baseQuery: fetchBaseQuery({ baseUrl: url_database }),


    //aca se declara la data de la bbdd (url+/gymList por ej) y en slice se hace la  carga y descarga de data
    // hay un ejemplo en  la  pagina de redux toolkit con lo de pokemon que sirve para  las fechas


    endpoints: (builder) => ({
        getGymList: builder.query({
            query: () => "gymsList.json",

        }),

        getClass: builder.query({
            query: () => "class.json",

        }),

        getTest: builder.query({
            query: () => "test.json",


        }),
        addClass: builder.mutation({
            query: ({ fecha, numeroClase, nuevaClase }) => ({
                url: `class/${fecha}/${numeroClase}.json`,
                method: 'POST',
                body: nuevaClase,
            }),
        }),

    }),
});

export const { useGetGymListQuery, useGetClassQuery, useGetTestQuery, useAddClassMutation } = gymApi;