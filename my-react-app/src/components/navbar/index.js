import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed">
          <ul className="navbar-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li style={{ float: "right" }}>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
