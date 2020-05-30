import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList.jsx';
import NavBar from './components/NavBar';
import SideBar from "./components/SideBar";

class App extends Component {
  render() {  
    return (
      <div>
      <NavBar></NavBar>
        <div>
          <ProductList></ProductList>
          <ProductList></ProductList>
          <ProductList></ProductList>
          <SideBar></SideBar>
        </div>
  
    </div>
    );
  } 
}

export default App;
