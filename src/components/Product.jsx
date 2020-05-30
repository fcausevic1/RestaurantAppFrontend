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
      <div className="naziv">
        <h1>{props.naziv_proizvoda}</h1>
      </div>
      <div className="cijena">
        <h1>{props.cijena_proizvoda}</h1>
      </div>
    </div>
  );
};

export default Proizvod;
