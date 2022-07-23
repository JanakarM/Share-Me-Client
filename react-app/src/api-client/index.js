import axios from 'axios'

export const getAllPosts= ()=> {
    return axios.get('/feed')
}

export const getPost= (id)=> {
    return axios.get(`/feed/${id}`)
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

export const getLoggedInUser= ()=> {
    return axios.get('/user/me').catch((err)=> {
        return { error_code: err.response.status }
    })
}

export const getUser= (id)=> {
    return axios.get(`/user/${id}`)
}

export const login= (token)=> {
    return axios.get('/user/login', {
        headers: {
            Authorization: "Bearer " + JSON.parse(JSON.stringify(token))
        }
    })
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