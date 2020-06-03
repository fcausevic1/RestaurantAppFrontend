import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import "./App.css";
import AdminProductsPage from "./components/Admin/AdminProductsPage.jsx";
import AdminOrderPage from "./components/Admin/AdminOrderPage.jsx";
import AdminUserPage from "./components/Admin/AdminUserPage.jsx";
import ProductsPage from "./components/User/ProductsPage.jsx";
import Form from "./components/Form.jsx";
import { AuthenticationService } from "./components/AuthenticationService.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    AuthenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    AuthenticationService.logout();
    history.push("/form");
  }

  render() {
    return (
      <Router>
        <Route path="/form" component={Form}></Route>
        <Route path="/user/products" component={ProductsPage}></Route>
        <Route path="/admin/products" component={AdminProductsPage}></Route>
        <Route path="/admin/users" component={AdminUserPage}></Route>
        <Route path="/admin/orders" component={AdminOrderPage}></Route>
      </Router>
    );
  }
}

export default App;
