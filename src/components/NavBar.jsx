import React, { useState } from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div>
      <ul className="navBar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
