import React, { useState } from 'react';
import './Proizvod.css';

 import image from './cevap.jpg'
const Proizvod = (props) => {
   const [nesto] = useState("Konj")
    return (
        
         <div class="omotac">
             <div clas="slika">
             <img src={image}></img>
             </div>
             <div class="naziv">
         <h1>{props.naziv_proizvoda}</h1>
            </div>
            <div class="cijena">
         <h1>{props.cijena_proizvoda}</h1>
            </div>
        </div>
    )
}

export default Proizvod;