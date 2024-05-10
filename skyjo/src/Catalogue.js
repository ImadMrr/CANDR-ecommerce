import React, {  useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import Products from './Products';
import './styles/Catalogue.css';
import Home from './Home';


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

            setProducts(data.products);
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
                            description={product.description}
                            brand={product.brand}
                            category={product.category}
                            stock={product.stock}
                            discount={product.discountPercentage}
                            rating={product.rating}
                            images={product.images}

                            addToCart={() => handleAddToCart(
                                { name_prod: product.title, img_prod: product.thumbnail, price: product.price })}
                        />
                    ))}
            </div>
            
        </div>
       
    );
}


export default Catalogue;