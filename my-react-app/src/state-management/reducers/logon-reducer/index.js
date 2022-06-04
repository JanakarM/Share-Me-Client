import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'logon',
    initialState: {
        logged_in: false
    },
    reducers: {
        login: (state) => {
            return {logged_in: !state.logged_in}
        },
        logout: (state) => {
            return {logged_in: false}
        }
    }
});
export const {login, logout} = slice.actions;
export default slice.reducer;