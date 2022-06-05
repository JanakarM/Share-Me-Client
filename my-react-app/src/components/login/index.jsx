import {GoogleLogin} from 'react-google-login';
import bg from '../../assets/videos/share.mp4'
import {FcGoogle} from 'react-icons/fc'
import logo from '../../assets/images/logowhite.png'

const responseGoogle = (response)=>{
    console.log('Google response');
    console.log(response);
}
const Login = ()=>{
    return (
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
                    />
                </div>
                <div className='shadow-2xl'>
                    <GoogleLogin
                        clientId={process.env.REaCT_APP_GOOGLE_API_CLIENT_ID}
                        render={(renderProps)=>(
                            <button
                                type='button'
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className='flex flex-row p-3 items-center justify-center bg-mainColor rounded-lg outline-none cursor-pointer'
                            >
                                <FcGoogle className='mr-4'/> 
                                Sign in with Google
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy='single_host_origin'
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;