import React from 'react';
import { useLocation } from 'react-router-dom';

function InformationsProd( ) {

    const location = useLocation();
    const {name_prod, img_prod, price, description, brand, category, stock, discount, rating, images} = location.state;

    

    return (
        <div>
            <h2>{location.state.name_prod}</h2>
            <h3>{location.state.brand}</h3>
            <img src={location.state.img_prod} alt="Product" />
            <p>{location.state.price}</p>
            <p>{location.state.description}</p>

            {location.state.images.map(image =>
                <img src={image} />
            )}

            <button className="Buy">Buy it now !</button>
            <button className="Like">LIKE</button>

            <p> Category : {location.state.category} </p>
            <p> Stock : {location.state.stock} </p>
            <h3>Discount : {location.state.discount}%</h3>
            <h3>Rate : {location.state.rating}/5</h3>
        </div>
    );
  }
  
  export default InformationsProd;
