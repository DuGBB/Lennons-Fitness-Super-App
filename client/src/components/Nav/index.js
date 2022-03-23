import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
const HeaderLogo = require("../../assets/fit.png");

function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  return (
    <nav>
      <ul>
        <li>
          <a href="#store">Sign Up For Classes</a>
        </li>
        <div id="image-div">
          <a href="/">
            <img id="header-img" src={HeaderLogo} alt="logo" />
          </a>
        </div>
        <li>
          <a href="#tutorials">Update Personal Bests</a>
        </li>

        {/* <li className={`${contactSelected && "navActive"}`}>
          <a onClick={() => setContactSelected(true)} href="#Contact">
            Contact
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

// function Nav() {
//   // function showNavigation() {
//   return (
//     <ul className="flex-row">
//       <li className="mx-1">
//         {/* NEEDS ACTUAL FUNCTIONALITY */}
//         Sign Up For Classes
//       </li>
//       <li className="mx-1">
//         {/* NEEDS ACTUAL FUNCTIONALITY */}
//         Update Personal Bests
//       </li>
//       <li className="mx-1">
//         {/* <a href="/" onClick={() => Auth.logout()}> */}
//         <a href="/">Logout</a>
//       </li>
//     </ul>
//   );
//   //   if (Auth.loggedIn()) {
//   //     return (
//   //       <ul className="flex-row">
//   //         <li className="mx-1">
//   //           {/* NEEDS ACTUAL FUNCTIONALITY */}
//   //           Sign Up For Classes
//   //         </li>
//   //         <li className="mx-1">
//   //           {/* NEEDS ACTUAL FUNCTIONALITY */}
//   //           Update Personal Bests
//   //         </li>
//   //         <li className="mx-1">
//   //           <a href="/" onClick={() => Auth.logout()}>
//   //             Logout
//   //           </a>
//   //         </li>
//   //       </ul>
//   //     );
//   //   } else {
//   //     return (
//   //       <ul className="flex-row">
//   //         <li className="mx-1">
//   //           {/* NEEDS ACTUAL FUNCTIONALITY */}
//   //           Signup
//   //         </li>
//   //         <li className="mx-1">
//   //           {/* NEEDS ACTUAL FUNCTIONALITY */}
//   //           Login
//   //         </li>
//   //       </ul>
//   //     );
//   //   }
//   // }

//   // return (
//   //   <header className="flex-row px-1">
//   //     <h1>Gym App Name</h1>

//   //     <nav>{showNavigation()}</nav>
//   //   </header>
//   // );
// }

export default Nav;
