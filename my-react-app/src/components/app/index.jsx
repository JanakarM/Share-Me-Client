import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./styles.css";
import Login from '../login';
import ProtectedRoute from "../protected-route";
import { getAuthToken, getUserFromToken } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state-management/reducers/logon-reducer";
import Home from "../home";

const App = ()=>{
    const user = useSelector(state => state.logon.user)
    const dispatch = useDispatch()
    useEffect(()=>{
      const token = getAuthToken()
      if(token !== undefined && user === undefined){
        dispatch(login(getUserFromToken(token)))
      }
    }, [])
    return (
      <div>
        <Routes>
          <Route
            path="/login/:route/:id"
            element={
              <Login />
            }
          />
          <Route
            path="/login/:route"
            element={
              <Login />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> 
            }
          />
        </Routes>
      </div>
    );
  }

export default App;
