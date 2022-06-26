import { configureStore } from '@reduxjs/toolkit';
import { LogonReducer, HomeReducer} from '../reducers';

const store = configureStore({
    reducer: {
        logon: LogonReducer,
        home: HomeReducer
    }
});

// store.subscribe(()=>{
//     console.log(store.getState());
// })

export default store;