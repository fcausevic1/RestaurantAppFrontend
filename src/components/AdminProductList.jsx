import React from "react";
import Product from "./Product";
import "./AdminProductList.css";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="listContainer">
      <ul className="list">
        {products.map((product) => (
          <li key={product.id}>
            <Product name={product.name} price={product.price} />
            <button
              className="delBtn"
              type="button"
              onClick={() => {
                props.onAddProduct(product);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
