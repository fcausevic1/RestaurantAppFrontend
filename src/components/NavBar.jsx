import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <ul className="navBar">
        <li>
          <Link to="/user/products">User Products</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
