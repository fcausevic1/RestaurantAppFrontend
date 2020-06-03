import React from "react";
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
              username={order.user.username}
              orderDate={order.orderDate}
              coupon={order.coupon.code}
              completed={order.completed}
              orderItems={order.orderItems}
            ></Order>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
