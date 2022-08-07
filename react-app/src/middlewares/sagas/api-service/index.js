import * as posts from '../api-service/post'
import * as users from '../api-service/user'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga(action){
    yield all([
        ...Object.values(posts),
        ...Object.values(users)
    ].map(fork))
}