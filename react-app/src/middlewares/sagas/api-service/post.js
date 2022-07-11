import { call, put, takeEvery } from 'redux-saga/effects'
import { savePost, setCreatePinStatus, setFeeds, updateFeeds, createPost, updateCategories, setCategories, deletePin, deletePost } from '../../../state-management/reducers/home-reducer'
import * as Api from '../../../api-client'

//handler function starts

function* fetchPostsHandler(action){
    const { data }= yield call(Api.getAllPosts)
    yield put(setFeeds(data))
}

function* fetchCategoriesHandler(action){
    const { data }= yield call(Api.getCategories)
    yield put(setCategories(data))
}

function* createPostHanlder(action){
    const { data }= yield call(Api.createPost, action.payload)
    yield put(setCreatePinStatus(data))
}

function* deletePostHanlder(action){
    yield call(Api.deletePost, action.payload)
    const { data }= yield call(Api.getAllPosts)
    yield put(setFeeds(data))
}

//handler function ends

//watcher functions starts

export function* fetchPostsSaga(action){
    yield takeEvery([savePost.type, updateFeeds.type], fetchPostsHandler)
}

export function* fetchCategoriesSaga(action){
    yield takeEvery([updateCategories.type], fetchCategoriesHandler)
}

export function* createPostSaga(action){
    yield takeEvery([createPost.type], createPostHanlder)
}

export function* deletePostSaga(action){
    yield takeEvery([deletePost.type], deletePostHanlder)
}

//watcher functions ends