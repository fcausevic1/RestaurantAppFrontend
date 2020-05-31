import React, { useState } from "react";
import ProductList from "./ProductList.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";

const ProductsPage = (props) => {
  const tempProducts = [
    { product_name: "Nesto", product_price: "1KM", id: "1" },
    { product_name: "Nesto2", product_price: "2KM", id: "2" },
    { product_name: "Nesto3", product_price: "3KM", id: "3" },
    { product_name: "Nesto4", product_price: "1KM" },
    { product_name: "Nesto5", product_price: "2KM" },
    { product_name: "Nesto6", product_price: "3KM" },
    { product_name: "Nesto7", product_price: "1KM" },
    { product_name: "Nesto8", product_price: "2KM" },
    { product_name: "Nesto9", product_price: "3KM" },
  ];

  const [products, setProducts] = useState(tempProducts);
  const [orderedProducts, setOrderedProducts] = useState([]);

  const onAddProduct = (newProduct) => {
    setOrderedProducts(orderedProducts.concat(newProduct));
  };

  const removeItemFromList = (newProduct) => {
    const newOrderedItems = orderedProducts.filter((item) => {
      return item !== newProduct;
    });
    setOrderedProducts(newOrderedItems);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <ProductList
          onAddProduct={onAddProduct}
          products={products}
        ></ProductList>
        <SideBar
          removeItemFromList={removeItemFromList}
          orderedProducts={orderedProducts}
        ></SideBar>
      </div>
    </div>
  );
};

export default ProductsPage;
