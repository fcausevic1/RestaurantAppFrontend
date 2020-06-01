import React, { useState } from "react";
import Order from "./Order.jsx";
import "./OrderList.css";

const OrderList = (props) => {
  const { orders } = props;

  return (
    <div className="tableContainer">
      <ul className="table">
        {orders.map((order) => (
          <li
            key={order.id}
            onClick={() => {
              props.setSelectedOrder(order);
            }}
          >
            <Order
              setSelectedOrder
              id={order.id}
              date={order.date}
              completion={order.completion}
              user={order.user}
              coupon={order.coupon}
              items={order.items}
            ></Order>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
