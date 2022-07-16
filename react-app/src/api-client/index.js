import axios from 'axios'

export const getAllPosts= ()=> {
    return axios.get('/feed')
}

export const getCategories= ()=> {
    return axios.get('/feed/categories')
}

export const createPost= (feed)=> {
    return axios.post('/feed/add', feed)
}
export const deletePost= (feedId)=> {
    return axios.delete(`/feed/${feedId}`)
}

export const addUser= (user)=> {
    return axios.post('/user/add', user)
}

export const downloadImage= (fileName)=> {
    let config = {
        headers: {
            Accept: 'image/**'
        },
        responseType: 'blob'
      }
    return axios.get('/file/download?fileName='+fileName, config)
}