import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'home',
    initialState: {
        toggleSidebar: false,
        searchTerm: '',
        categories: [
            {name: 'Animals'},
            {name: 'Plants'},
            {name: 'Food'},
            {name: 'Sports'},
            {name: 'Studies'},
            {name: 'Celebrity'},
            {name: 'other'}
        ],
        feeds: [
        ],
        createPinStatus: undefined
    },
    reducers: {
        setToggleSidebar: (state, { payload }) => {
            return {...state, toggleSidebar: payload}
        },
        setSearchTerm: (state, { payload }) => {
            return {...state, searchTerm: payload}
        },
        setFeeds: (state, { payload }) => {
            return {...state, feeds: payload}
        },
        savePost: (state, { payload }) => {
            
        },
        unSavePost: (state, { payload }) => {
            
        },
        createPost: (state, { payload }) => {
            
        },
        updateFeeds: (state, { payload }) => {
            
        },
        setCreatePinStatus: (state, { payload }) => {
            return {...state, createPinStatus: payload}
        }
    }
});
export const { setToggleSidebar, setSearchTerm, setFeeds, savePost, unSavePost, createPost, updateFeeds, setCreatePinStatus } = slice.actions;
export default slice.reducer;