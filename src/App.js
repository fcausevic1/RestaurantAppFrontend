import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList.jsx';
import NavBar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
     
        <NavBar></NavBar>
        <ProductList></ProductList>
      </div>
    );
  }
}

export default App;
