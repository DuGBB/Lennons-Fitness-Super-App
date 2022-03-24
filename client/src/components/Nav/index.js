import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
const HeaderLogo = require("../../assets/fit.png");

function Nav(props) {
  if (Auth.loggedIn()) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/class-schedule">Sign Up for Classes</Link>
          </li>
          {/* <li className={`${classesSelected && "navActive"}`}>
            <a onClick={() => setClassesSelected(true)} href="#classes-signup">
              Sign Up For Classes
            </a>
          </li> */}
          <div id="image-div">
            <a href="/">
              <img id="header-img" src={HeaderLogo} alt="logo" />
            </a>
          </div>
          <li>
            <Link to="/benchmarks">Update Personal Bests</Link>
          </li>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </ul>
      </nav>
    );
  } else {
    return (
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <div id="image-div">
          <a href="/">
            <img id="header-img" src={HeaderLogo} alt="logo" />
          </a>
        </div>
        <li className="mx-1">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
