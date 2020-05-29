import React, { useState } from 'react';
import Proizvod from './Proizvod';
import './ProductList.css'

const ProductList = (props) => {
    return (
        <div>
            <ul className="list">
                <li>
                <Proizvod naziv_proizvoda ="nesto" cijena_proizvoda="1KM"/>
                </li>
                <li>
                <Proizvod naziv_proizvoda ="nesto22" cijena_proizvoda="2KM"/>
                </li>
                <li>
                <Proizvod naziv_proizvoda ="nesto33" cijena_proizvoda="3KM"/>
                </li>
            </ul>
        </div>
    )
}

export default ProductList;