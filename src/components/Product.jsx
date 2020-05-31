import React from "react";
import "./Product.css";

import image from "./cevap.jpg";
const Proizvod = (props) => {
  return (
    <div className="omotac" id="rcorners">
      <div className="slika">
        <img src={image} alt=""></img>
      </div>
      <div className="naziv">
        <h1>{props.name}</h1>
      </div>
      <div className="cijena">
        <h1>{props.price}</h1>
      </div>
    </div>
  );
};

export default Proizvod;
