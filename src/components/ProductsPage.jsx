import React, { useState } from "react";
import ProductList from "./ProductList.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";

const ProductsPage = (props) => {
  const tempProducts = [
    { product_name: "Nesto", product_price: "1KM", id: "1" },
    { product_name: "Nesto2", product_price: "2KM", id: "2" },
    { product_name: "Nesto3", product_price: "3KM", id: "3" },
    { product_name: "Nesto4", product_price: "1KM", id: "4" },
    { product_name: "Nesto5", product_price: "2KM", id: "5" },
    { product_name: "Nesto6", product_price: "3KM", id: "6" },
    { product_name: "Nesto7", product_price: "1KM", id: "7" },
    { product_name: "Nesto8", product_price: "2KM", id: "8" },
    { product_name: "Nesto9", product_price: "3KM", id: "9" },
  ];

  const [products, setProducts] = useState(tempProducts);
  const [orderedProducts, setOrderedProducts] = useState([]);

  const onAddProduct = (newProduct) => {
    var found = false;
    for (let i = 0; i < orderedProducts.length; i++) {
      if (newProduct.id === orderedProducts[i].product.id) {
        orderedProducts[i].quantity += 1;
        found = true;
        break;
      }
    }
    console.log(orderedProducts);

    setOrderedProducts(orderedProducts.concat());

    if (!found) {
      setOrderedProducts(
        orderedProducts.concat({ product: newProduct, quantity: 1 })
      );
    }
  };

  const removeItemFromList = (newProduct) => {
    var found;
    for (let i = 0; i < orderedProducts.length; i++) {
      if (newProduct.id === orderedProducts[i].product.id)
        found = orderedProducts[i];
    }
    if (found.quantity - 1 === 0) {
      console.log("NEMAGA");
      const newOrderedItems = orderedProducts.filter((item) => {
        return item.product.id !== newProduct.id;
      });
      setOrderedProducts(newOrderedItems);
    } else {
      found.quantity -= 1;
      setOrderedProducts(orderedProducts.concat());
    }
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
