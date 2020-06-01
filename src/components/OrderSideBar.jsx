import React from "react";
import "./OrderSideBar.css";

const OrderSideBar = (props) => {
  return (
    <div className="sideBar">
      <h1>Order list</h1>
      <ul className="OrderList"></ul>
    </div>
  );
};

export default OrderSideBar;
