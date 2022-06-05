import Navbar from "../navbar";
import './styles.css'
import { Route } from "react-router";
import Banner from "../banner";
import bg_home from "../../assets/images/1.jpg";

const Main = ()=>{
    return (
        <div className="main">
          <Navbar />
          <div>
          <Banner path="/home"
                    style={{
                      backgroundImage: "url(" + bg_home + ")",
                    }}
                  >
                    <h1 className="text-3xl font-bold underline">
                      Welcome to Home Page
                    </h1>
                  </Banner>
          </div>
        </div>
    );
}

export default Main;