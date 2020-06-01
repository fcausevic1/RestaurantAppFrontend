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
        {orderItems.map(({ product, quantity }) => (
          <li className="orderItem" key={product.id}>
            {product.name} {product.price} qty: {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSideBar;
