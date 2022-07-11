import { call, put, takeEvery } from "redux-saga/effects";
import * as Api from '../../../api-client'
import { login, setLoggedInUser } from "../../../state-management/reducers/logon-reducer";

function* addUserHandler(action){
    const {data}= yield call(Api.addUser, action.payload)
    yield put(setLoggedInUser(data))
}

export function* loginUserSaga(action){
    yield takeEvery([login.type], addUserHandler)
}