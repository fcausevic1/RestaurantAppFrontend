import React, { useState } from "react";
import "./Product.css";

import image from "./cevap.jpg";
const Proizvod = (props) => {
const state = {id:props.id};

  return (
    <div className="omotac" id="rcorners">
      <div className="slika">
        <img src={image}></img>
      </div>
      <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="price">
        <h1>{props.price}</h1>
      </div>
    </div>
  );
};

export default Proizvod;
