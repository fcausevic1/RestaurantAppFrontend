import React, { useState } from 'react';
 //import logo from 'cevap.jpg'
const Proizvod = (props) => {
   const [nesto] = useState("Konj")
    return (
        
         <div>
             <div clas="slika">
             <img src={require('./cevap.jpg')} />
             </div>
             <div class="naziv">
         <h>{props.naziv_proizvoda}</h>
            </div>
            <div class="cijena">
         <h>{props.cijena_proizvoda}</h>
            </div>
        </div>
    )
}

export default Proizvod;