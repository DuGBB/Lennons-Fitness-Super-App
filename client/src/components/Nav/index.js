import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
    {/* NEEDS ACTUAL FUNCTIONALITY */}
                Sign Up For Classes
          </li>
          <li className="mx-1">
    {/* NEEDS ACTUAL FUNCTIONALITY */}
                Update Personal Bests
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
           {/* NEEDS ACTUAL FUNCTIONALITY */}
              Signup
           
          </li>
          <li className="mx-1">
            {/* NEEDS ACTUAL FUNCTIONALITY */}
              Login
            
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
            Gym App Name
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
