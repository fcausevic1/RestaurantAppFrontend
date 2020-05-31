import React, { useState, useEffect } from "react";
import AdminProductList from "./AdminProductList.jsx";
import NavBar from "./NavBar.jsx";
import AdminSideBar from "./AdminSideBar.jsx";
import ProductsService from "./ProductsService.js";

const AdminProductsPage = (props) => {
  const [products, setProducts] = useState([]);
  const [orderedProducts, setOrderedProducts] = useState([]);

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

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <AdminProductList products={products}></AdminProductList>
        <AdminSideBar orderedProducts={orderedProducts}></AdminSideBar>
      </div>
    </div>
  );
};

export default AdminProductsPage;
