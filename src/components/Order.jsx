import React from "react";
import "./Order.css";
const Order = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.date}</td>
      <td>{props.completion}</td>
      <td>{props.user}</td>
      <td>{props.coupon}</td>
    </tr>
  );
};

export default Order;
