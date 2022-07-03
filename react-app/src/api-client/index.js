import axios from 'axios'

export const getAllPosts= ()=> {
    return axios.get('/posts')
}

export const createPost= (pin)=> {
    console.log('pin' + pin)
    return axios.post('/createPost', pin)
}