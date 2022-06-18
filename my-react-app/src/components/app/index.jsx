import { Component } from "react";
import { Route, Routes } from "react-router";
import Banner from "../banner";
import "./styles.css";
import Login from '../login';
import ProtectedRoute from "../protected-route";
import bg_home from "../../assets/images/1.jpg";
import bg_service from "../../assets/images/2.jpg";
import bg_contact from "../../assets/images/3.png";
import bg_about from "../../assets/images/4.webp";

class App extends Component {
  state = {};
  render() {
    return (
      <Routes>
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
                <Banner
                style={{
                  backgroundImage: "url(" + bg_home + ")",
                }}
              >
                <h1 className="text-3xl font-bold underline">
                  Welcome to Home Page
                </h1>
              </Banner>
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Banner
              style={{
                backgroundImage: "url(" + bg_service + ")",
                textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
              }}
            >
              Welcome to Services Page
              </Banner>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Banner
              style={{
                backgroundImage: "url(" + bg_contact + ")",
              }}
            >
              Welcome to Contact Page
            </Banner>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <Banner
              style={{
                backgroundImage: "url(" + bg_about + ")",
              }}
            >
              Welcome to About Page
            </Banner>
            </ProtectedRoute>
          }
        />
      </Routes>
    );
  }
}

export default App;
