import React, {  useContext } from 'react';
import { CartContext } from './CartContext';
import Products from './Products';
import './styles/Catalogue.css';
import { useState, useEffect } from 'react'; //importation pour l'utilisation d'API


function Catalogue() {

    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]); 
    
    const handleAddToCart = (product) => {
       addToCart(product);
    }

    useEffect(() => {

        //Get products with API
        fetch('https://dummyjson.com/products').then((response) => {

        return response.json();
        })
                                                                        //Use of promesses
        .then((data) => {

            //console.log(data);
            setProducts(data.products);
            //console.log("PRODUITS 0000 : " + products);
        });
    
    }, []);

    //useEffect(() => {
      //  console.log("PRODUITS : ", products);
    //}, [products]); // Déclenche l'effet à chaque fois que products change

    console.log("PRODUITS [0] : " + products[0]);

    return (

        <div className="titleCatalogue"> 
            <h1> Our Products </h1>
            <div className='catalogue' >
                {products.map(product => (
                        <Products 
                            id={product.id}
                            img_prod={product.thumbnail}
                            name_prod={product.title}
                            price={product.price + '$'}
                            addToCart={() => handleAddToCart(
                                { name_prod: name_prod, img_prod: img_prod, price: price })}
                        />
                    ))}
            </div>
        </div>
    );
}


export default Catalogue;