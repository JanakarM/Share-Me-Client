import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../state-management/reducers/logon-reducer";
import { setAuthToken } from "../../utils";
import "./styles.css";

const Navbar = () => {
  const dispatch = useDispatch()
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
                onClick={(event) => {
                  setAuthToken(undefined)
                  dispatch(logout())
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }

export default Navbar;
