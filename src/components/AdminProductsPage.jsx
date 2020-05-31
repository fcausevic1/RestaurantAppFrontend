import React, { useState, useEffect } from "react";
import AdminProductList from "./AdminProductList.jsx";
import NavBar from "./NavBar.jsx";
import AdminSideBar from "./AdminSideBar.jsx";
import ProductsService from "./ProductsService.js";

const AdminProductsPage = (props) => {
  const [products, setProducts] = useState([]);
  const [orderedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const refreshSelected = (product) => {
    setSelectedProduct(product);
  };

  const getProducts = () => {
    const fetchData = async () => {
      const data = await ProductsService.getProducts();
      setProducts(data);
    };
    fetchData();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const removeItemFromList = (newProduct) => {
    const newProducts = products.filter((item) => {
      return item.name !== newProduct.name;
    });
    setProducts(newProducts.concat());
  };

  const addProduct = (name, price) => {
    var product = { name, price };
    setProducts(products.concat(product));
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  const confirmEdit = (product) => {
    // poslat
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <AdminProductList
          products={products}
          removeItemFromList={removeItemFromList}
          editProduct={editProduct}
          setSelectedProduct={setSelectedProduct}
        ></AdminProductList>
        <AdminSideBar
          addProduct={addProduct}
          selectedProduct={selectedProduct}
          refreshSelected={refreshSelected}
        ></AdminSideBar>
      </div>
    </div>
  );
};

export default AdminProductsPage;
