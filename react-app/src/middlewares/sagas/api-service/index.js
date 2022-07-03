import * as posts from '../api-service/post'
import { all, call, fork } from 'redux-saga/effects'

export default function* rootSaga(action){
    yield all([
        ...Object.values(posts)
    ].map(fork))
}