import React from "react";
import "./Order.css";
const Order = (props) => {
  return (
    <ul>
      <li className="border">{props.id}</li>
      <li className="border">{props.date}</li>
      <li className="border">{props.completion}</li>
      <li className="border">{props.user}</li>
      <li className="border">{props.coupon}</li>
    </ul>
  );
};

export default Order;
