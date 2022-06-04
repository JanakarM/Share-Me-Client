import { configureStore } from '@reduxjs/toolkit';
import logonReducer from '../reducers/logon-reducer'

const store = configureStore({
    reducer: {
        logon: logonReducer
    }
});

store.subscribe(()=>{
    console.log(store.getState());
})

export default store;