import React, { useState } from "react";
import Proizvod from "./Proizvod";
import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="listContainer">
      <ul className="list">
        {products.map((product) => (
          <li key={product.product_name}>
            <Proizvod
              naziv_proizvoda={product.product_name}
              cijena_proizvoda={product.product_price}
            />
            <button
              type="button"
              onClick={() => {
                props.onAddProduct(product);
              }}
            >
              Add to order
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
