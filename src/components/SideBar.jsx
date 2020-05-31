import React, { useState } from "react";
import "./SideBar.css";

const SideBar = (props) => {
  const { orderedProducts } = props;
  return (
    <div className="sideBar">
      <h1>Order list</h1>
      <ul className="OrderList">
        {orderedProducts.map(({ product, quantity }) => (
          <li className="orderItem" key={product.id}>
            {product.product_name} {product.product_price} {quantity}
            <span
              className="close"
              onClick={() => {
                props.removeItemFromList(product);
              }}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
