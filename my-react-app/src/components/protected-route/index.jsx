import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import { useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const user = useSelector(state => state.logon.user)
    const location= useLocation()
    return(
        user === undefined ? <Navigate to={`/login/${location.pathname? location.pathname.substring(1) : ''}`} /> : children
    )
}
export default ProtectedRoute