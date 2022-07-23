import axios from 'axios'

const getMethod= async (url, config)=> {
    try {
        return await axios.get(url, config)
    } catch (err) {
        return { error_code: err.response.status }
    }
} 
export const getAllPosts= ()=> {
    return getMethod('/feed')
}
export const getSavedPostIds= ()=> {
    return getMethod('/feed/saved')
}

export const getPost= (id)=> {
    return getMethod(`/feed/${id}`)
}

export const getCategories= ()=> {
    return getMethod('/feed/categories')
}

export const createPost= async (feed)=> {
    try {
        return await axios.post('/feed/add', feed)
    } catch (err) {
        return { error_code: err.response.status }
    }
}
export const savePost= async (feedId)=> {
    try {
        return await axios.post('/feed/save', {feedId})
    } catch (err) {
        return { error_code: err.response.status }
    }
}
export const removeSavedPost= async (feedId)=> {
    try {
        return await axios.delete(`/feed/saved/remove?feedId=${feedId}`)
    } catch (err) {
        return { error_code: err.response.status }
    }
}
export const deletePost= (feedId)=> {
    return axios.delete(`/feed/${feedId}`)
}

export const getLoggedInUser= ()=> {
    return getMethod('/user/me')
}

export const getUser= (id)=> {
    return getMethod(`/user/${id}`)
}

export const login= (token)=> {
    return getMethod('/user/login', {
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
    return getMethod('/file/download?fileName='+fileName, config)
}