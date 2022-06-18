import bg from '../../assets/videos/share.mp4'
import logo from '../../assets/images/logowhite.png'
import jwt_decode from 'jwt-decode'
import { login } from '../../state-management/reducers/logon-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Login = ()=>{
    const dispatch = useDispatch()
    const user = useSelector(state => state.logon.user)
    const responseGoogle = (response)=>{
        console.log('Google response success');
        console.log(response);
        const userObj = jwt_decode(response.credential)
        console.log(userObj)
        dispatch(login(userObj))
    }
    window.responseGoogle = responseGoogle
    return (
        user === undefined ? 
        <div className='h-screen'>
            <div className='w-full h-full'>
                <video
                    src={bg}
                    loop
                    muted
                    type='video/mp4'
                    autoPlay
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='absolute top-0 left-0 bg-blackOverlay w-full h-full flex flex-col items-center justify-center'>
                <div className='p-5'>
                    <img 
                        src={logo}
                        width='130px'
                        alt={"app-logo"}
                    />
                </div>
                <div className='shadow-2xl'>
                    <div id="g_id_onload"
                        data-client_id={process.env.REaCT_APP_GOOGLE_API_CLIENT_ID}
                        data-callback="responseGoogle">
                    </div>
                    <div className="g_id_signin" data-type="standard"></div>
                </div>
            </div>
        </div>
        : <Navigate to='/' />
    );
}

export default Login;