import React, { Component } from "react";

const navbar2 = () => (
  (1 == 2) ?
    <div></div> :
    <p>Error</p>
)



function useless4() {
  //console.log(x)
}
useless4()

// (function useless() {
//   let x= 9
//   console.log(x)
// })()


// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge padge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
