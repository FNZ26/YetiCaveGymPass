import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: null,
        idToken: null,
        currentUser: null,
        payHistory: null,
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
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setPayHistory: (state, action) => {
            state.payHistory = action.payload;
        },
    },
})


export const { clearUser, setIdToken, setUser, setCurrentUser, setPayHistory } = authSlice.actions;

export default authSlice.reducer;


