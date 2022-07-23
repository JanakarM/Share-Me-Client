import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'logon',
    initialState: {
        logged_in: false,
        user: undefined,
        checkingLoginStatus: true
    },
    reducers: {
        login: (state, { payload }) => {
        },
        setLoggedInUser: (state, { payload }) => {
            return {logged_in: true, user: payload, checkingLoginStatus: false}
        },
        logout: (state) => {
            return {logged_in: false, user: undefined}
        },
        getLoggedInUser: (state) => {
            return {...state, checkingLoginStatus: true}
        }
    }
});
export const {login, logout, setLoggedInUser, getLoggedInUser} = slice.actions;
export default slice.reducer;