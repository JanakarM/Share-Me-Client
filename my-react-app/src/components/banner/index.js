import {login} from '../../state-management/reducers/logon-reducer'
import "./styles.css";
import {useDispatch} from 'react-redux';

const Banner = ({ className, children, style })=>{
  const dispatch = useDispatch();  
  return (
    <>
        <div className={`container banner ${className}`} style={style} onClick={(e)=>dispatch(login())}>
          {children}
        </div>
      </>
  )
}

export default Banner;
