import React, { useState, useEffect } from "react";
import AdminProductList from "../AdminProductList.jsx";
import NavBar from "../NavBar.jsx";
import AdminSideBar from "../AdminSideBar.jsx";
import ProductsService from "../ProductsService.js";

const AdminProductsPage = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  // const refreshSelected = (product) => {
  //   setSelectedProduct(product);
  // };

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
    var product = { name, price: parseInt(price), categoryId: 1, description: "desc" };
    ProductsService.addProduct(product);
    //setProducts(products.concat(product));
    getProducts()
  };

  const editProduct = (product, editedName, editedPrice) => {
    product.name = editedName;
    product.price = editedPrice;
    setProducts(products.concat());
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <AdminProductList
          products={products}
          removeItemFromList={removeItemFromList}
          setSelectedProduct={setSelectedProduct}
        ></AdminProductList>
        <AdminSideBar
          addProduct={addProduct}
          selectedProduct={selectedProduct}
          //refreshSelected={refreshSelected}
          editProduct={editProduct}
        ></AdminSideBar>
      </div>
    </div>
  );
};

export default AdminProductsPage;
