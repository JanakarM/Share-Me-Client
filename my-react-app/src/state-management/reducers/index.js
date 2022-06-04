import {combineReducers} from 'redux'
import logonReducer from './logon-reducer'

const allReducers = combineReducers({
    logon : logonReducer
})

export default allReducers;