import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import AdminProductsPage from "./components/Admin/AdminProductsPage.jsx";
import AdminOrderPage from "./components/Admin/AdminOrderPage.jsx";
import AdminUserPage from "./components/Admin/AdminUserPage.jsx";
import ProductsPage from "./components/User/ProductsPage.jsx";
import Login from "./components/Login.jsx";
import AuthService from "./components/auth.service";

const App = () => {
  const [showAdminProducts, setShowAdminProducts] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminProducts(user.role === 1);
      setShowUsers(user.role === 1 || user.role === 2);
      setCurrentUser(user.role === 1 || user.role === 2);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/products" component={ProductsPage}></Route>
        <Route path="/admin/products" component={AdminProductsPage}></Route>
        <Route path="/admin/users" component={AdminUserPage}></Route>
        <Route path="/admin/orders" component={AdminOrderPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
