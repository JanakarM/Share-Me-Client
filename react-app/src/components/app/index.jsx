import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./styles.css";
import Login from '../login';
import ProtectedRoute from "../protected-route";
import { getAuthToken, getUserFromToken } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser, login } from "../../state-management/reducers/logon-reducer";
import Home from "../home";

const App = ()=>{
    const [loading, setLoading]= useState(false)
    const user = useSelector(state => state.logon.user)
    const dispatch = useDispatch()
    const navigate= useNavigate()
    useEffect(()=>{ 
      setLoading(true)
      dispatch(getLoggedInUser())
      if(user === undefined){
          navigate('/login')
      }
      setLoading(false)
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
            path="/file/*"
            element={
              <Home />
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
