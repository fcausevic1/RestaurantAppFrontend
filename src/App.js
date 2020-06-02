import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import AdminProductsPage from "./components/AdminProductsPage.jsx";
import AdminOrderPage from "./components/AdminOrderPage.jsx";
import UsersList from "./components/UsersList.jsx";
import AdminUserPage from "./components/AdminUserPage.jsx";
class App extends Component {
  render() {
    return (
      <div>
        <AdminProductsPage></AdminProductsPage>
      </div>
    );
  }
}

export default App;
