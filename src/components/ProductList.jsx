import React from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="listContainer">
      <ul className="list">
        {products.map((product) => (
          <li key={product.id}>
            <Product name={product.name} price={product.price} />
            <button
              className="addBtn"
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
