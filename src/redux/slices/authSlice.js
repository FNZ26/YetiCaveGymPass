import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "authSlice",

    initialState: {
        user: null,
        idToken: null,

    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },
        clearUser: (state) => {
            (state.user = null),
                (state.idToken = null);

        }
    },
})


export const { clearUser, setIdToken, setUser } = authSlice.actions;

export default authSlice.reducer;


