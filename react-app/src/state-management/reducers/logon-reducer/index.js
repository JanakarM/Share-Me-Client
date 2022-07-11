import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'logon',
    initialState: {
        logged_in: false,
        user: undefined
    },
    reducers: {
        login: (state, { payload }) => {
        },
        setLoggedInUser: (state, { payload }) => {
            return {logged_in: true, user: payload}
        },
        logout: (state) => {
            return {logged_in: false, user: undefined}
        }
    }
});
export const {login, logout, setLoggedInUser} = slice.actions;
export default slice.reducer;