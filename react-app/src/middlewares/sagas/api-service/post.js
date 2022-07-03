import { call, put, takeEvery } from 'redux-saga/effects'
import { savePost, setCreatePinStatus, setFeeds, updateFeeds, createPost } from '../../../state-management/reducers/home-reducer'
import * as Api from '../../../api-client'

//handler function starts

function* fetchPostsHandler(action){
    const { data }= yield call(Api.getAllPosts)
    yield put(setFeeds(data))
}

function* createPostHanlder(action){
    const { status }= yield call(Api.createPost, action.payload)
    yield put(setCreatePinStatus(status))
}

//handler function ends

//watcher functions starts

export function* fetchPostsSaga(action){
    yield takeEvery([savePost.type, updateFeeds.type], fetchPostsHandler)
}

export function* createPostSaga(action){
    yield takeEvery([createPost.type], createPostHanlder)
}

//watcher functions ends