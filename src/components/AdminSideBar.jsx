import React from "react";
import "./AdminSideBar.css";

const SideBar = (props) => {
  const { orderedProducts } = props;
  return (
    <div className="sideBar">
      <button className="addBtn">Add product</button>
    </div>
  );
};

export default SideBar;
