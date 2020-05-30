import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import ProductsPage from "./components/ProductsPage.jsx";

class App extends Component {
  render() {  
    return (
      <div>
        <ProductsPage></ProductsPage>
      </div>
    );
  } 
}

export default App;
