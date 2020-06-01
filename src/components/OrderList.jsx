import React from "react";
import Order from "./Order.jsx";
import "./OrderList.css";

const OrderList = (props) => {
  const { orders } = props;

  return (
    <div className="tableContainer">
      <table className="table">
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
      </table>
    </div>
  );
};

export default OrderList;
