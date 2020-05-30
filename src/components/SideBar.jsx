import React, { useState } from "react";
import "./SideBar.css";
import Proizvod from "./Product";

const removeItem = () => {
/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
   
  closebtns[i].parentElement.style.display = 'none';
};
}






const SideBar = (props) => {
  const { orderedProducts } = props;
  return (
    <div className="sideBar">
      <h1>Narudzba</h1>
      <ul className="OrderList">
        {orderedProducts.map((product) => (
          <li className="orderItem" key={product.product_name}>
            {product.product_name} {product.product_price} <span className="close" onClick={removeItem} >x</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar; 
