import React, { useState } from "react";
import "./SideBar.css";
import Proizvod from "./Proizvod";

const SideBar = (props) => {
  const { orderedProducts } = props;
  return (
    <div className="sideBar">
      <h1>Narudzba</h1>
      <ul>
        {orderedProducts.map((product) => (
          <li className="orderItem" key={product.product_name}>
            {product.product_name} {product.product_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
