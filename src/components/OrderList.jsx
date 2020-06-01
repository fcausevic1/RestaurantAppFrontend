import React, { useState } from "react";
import Order from "./Order.jsx";

const OrderList = (props) => {
  const { orders } = props;

  return (
    <tbody>
      {" "}
      {orders.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          date={order.date}
          completion={order.completion}
          user={order.user}
          coupon={order.coupon}
          items={order.items}
        ></Order>
      ))}
    </tbody>
  );
};

export default OrderList;
