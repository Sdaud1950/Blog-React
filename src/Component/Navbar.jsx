import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { ToggleContext } from "./Context"; // Import the context

const Navbar = () => {
  const { toggleView, setToggleView } = useContext(ToggleContext); // Use context instead of useState

  const handleToggle = () => {
    setToggleView(!toggleView); // Update context state
  };

  return (
    <div>
      <nav className={toggleView ? "dark" : "light"}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutus" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <button onClick={handleToggle} className="toggle-btn">
              {toggleView ? <FaToggleOn /> : <FaToggleOff />}
              {toggleView ? " Dark Mode" : " Light Mode"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
