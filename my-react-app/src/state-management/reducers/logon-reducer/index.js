import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'logon',
    initialState: {
        logged_in: false,
        user: undefined
    },
    reducers: {
        login: (state, { payload }) => {
            return {logged_in: true, user: payload}
        },
        logout: (state) => {
            return {logged_in: false}
        }
    }
});
export const {login, logout} = slice.actions;
export default slice.reducer;