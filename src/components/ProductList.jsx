import React, { useState } from "react";
import Proizvod from "./Proizvod";
import "./ProductList.css";

const ProductList = (props) => {
  const products = [
    { product_name: "Nesto", product_price: "1KM" },
    { product_name: "Nesto22", product_price: "2KM" },
    { product_name: "Nesto33", product_price: "3KM" },
  ];

  return (
    <div>
      <ul className="list">
        {products.map((product) => (
          <li key={product.product_name}>
            <Proizvod
              naziv_proizvoda={product.product_name}
              cijena_proizvoda={product.product_price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
