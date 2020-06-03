import React from "react";
import "./OrderSideBar.css";

const OrderSideBar = (props) => {
  var orderItems;
  if (props.selectedOrder !== "") orderItems = props.selectedOrder.orderItems;
  else orderItems = [];
  return (
    <div className="sideBar">
      <h1>Order list</h1>
      <ul className="OrderList">
        {orderItems.map((orderItem) => (
          <li className="orderItem" key={orderItem.id}>
            {orderItem.id} qty: {orderItem.quantity}
          </li>
        ))}
      </ul>
      <button
        className="deleteBtn margin"
        onClick={(event) => {
          event.preventDefault();
          props.deleteOrder(props.selectedOrder);
        }}
      >
        Delete
      </button>
      <button className="completeBtn margin">Complete</button>
    </div>
  );
};

export default OrderSideBar;
