import { useSelector } from "react-redux"
import { Navigate} from "react-router"

const ProtectedRoute = ({ children }) => {
    const user = useSelector(state => state.logon.user)
    return(
        user === undefined ? <Navigate to='/login' /> : children
    )
}
export default ProtectedRoute