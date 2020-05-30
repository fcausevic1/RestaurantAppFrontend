import React, { useState } from 'react';
import ProducstList from './ProductList'
import './Navbar.css'

const NavBar = (props) => {
    return (
        <div className="omotac2">
        <div className="navbar">
            <ul  className="nbarlista">
  <li ClassName="nbar"><a href="default.asp">Home</a></li>
  <li ClassName="nbar"><a href="news.asp">News</a></li>
  <li ClassName="nbar"><a href="contact.asp">Contact</a></li>
  <li ClassName="nbar"><a href="about.asp">About</a></li>
            </ul> 
        </div>
    
        </div>
    )
}

export default NavBar;