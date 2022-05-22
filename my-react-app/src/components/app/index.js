import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "../banner";
import Navbar from "../navbar";
import "./styles.css";
import bg_home from "../../assets/images/1.jpg";
import bg_service from "../../assets/images/2.jpg";
import bg_contact from "../../assets/images/3.png";
import bg_about from "../../assets/images/4.webp";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Banner
                  style={{
                    backgroundImage: "url(" + bg_home + ")",
                  }}
                >
                  Welcome to Home Page
                </Banner>
              }
            />
            <Route
              path="/services"
              element={
                <Banner
                  style={{
                    backgroundImage: "url(" + bg_service + ")",
                    textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
                  }}
                >
                  Welcome to Services Page
                </Banner>
              }
            />
            <Route
              path="/contact"
              element={
                <Banner
                  style={{
                    backgroundImage: "url(" + bg_contact + ")",
                  }}
                >
                  Welcome to Contact Page
                </Banner>
              }
            />
            <Route
              path="/about"
              element={
                <Banner
                  style={{
                    backgroundImage: "url(" + bg_about + ")",
                  }}
                >
                  Welcome to About Page
                </Banner>
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
