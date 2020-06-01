import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import AdminProductsPage from "./components/AdminProductsPage.jsx";
import AdminOrderPage from "./components/AdminOrderPage.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <AdminOrderPage></AdminOrderPage>
      </div>
    );
  }
}

export default App;
