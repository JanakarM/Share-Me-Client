import jwt_decode from 'jwt-decode'

export const setAuthToken = (token) => {
    document.cookie = `image_share_token=${token}`
}
export const getAuthToken = () => {
    const cookie = document.cookie
    const val = cookie.split("; ").find(val => {
        return val.indexOf("image_share_token=") !== -1
    })?.split("=")[1]
    return val === "undefined" ? undefined : val
}
export const getCsrfToken = () => {
    const cookie = document.cookie
    const val = cookie.split("; ").find(val => {
        return val.indexOf("XSRF-TOKEN=") !== -1
    })?.split("=")[1]
    return val === "undefined" ? undefined : val
}
export const getUserFromToken = (token) => {
    return jwt_decode(token)
}