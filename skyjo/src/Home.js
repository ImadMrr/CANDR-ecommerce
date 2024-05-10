import React, {  useContext, useState, useEffect } from 'react';
import './styles/Home.css'

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
       
        setProducts(data.products);
      });
  }, []);

  
  const sortByRating = (a, b) => {
    return b.rating - a.rating;
  };

  
  const sortByDiscount = (a, b) => {
    return b.discount - a.discount;
  };

  
  const recommendations = products
    .sort(sortByRating)
    .slice(0, 4); 

  const discounts = products
    .sort(sortByDiscount)
    .slice(0, 4); 


    return (
      <div>
        <h2>Home</h2>
        <div className="recommendations">
          <h3>Recommandations</h3>
          <ul>
            {recommendations.map((product, index) => (
              <li key={index}><img className='imgHome' src={product.thumbnail}></img> - {product.title} - Rating: {product.rating}</li>
            ))}
          </ul>
        </div>
        <div className="discounts">
          <h3>Réductions</h3>
          <ul>
            {discounts.map((product, index) => (
              <li key={index}>{product.name} - Discount: {product.discount}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
export default Home;
