import React from "react";
import "./Order.css";
const Order = (props) => {
  return (
    <ul className="Order">
      <li className="numberBorder">{props.id}</li>
      <li className="border">{props.username}</li>
      <li className="border dateBorder">{props.orderDate}</li>
      <li className="border">{props.coupon}</li>
      <li className="border">{props.completed + ""}</li>
    </ul>
  );
};

export default Order;
