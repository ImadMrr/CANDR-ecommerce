import React from 'react';
import { useLocation } from 'react-router-dom';

function InformationsProd( ) {

    const location = useLocation();
    const {name_prod, img_prod, price} = location.state;

    return (
        <div>
            <h2>{location.state.name_prod}</h2>
            <img src={location.state.img_prod} alt="Product" />
            <p>{location.state.price}</p>
        </div>
    );
  }
  
  export default InformationsProd;
  