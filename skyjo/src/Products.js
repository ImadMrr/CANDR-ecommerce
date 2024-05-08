import './styles/Products.css'; 

import React from 'react';

function Products( {name_prod, img_prod, price} ) {
  return (
    <div class="containerProd" >
      <h2 class="nameProd" > {name_prod} </h2>
      <img class="imgProd" src = {img_prod} /> 
      <p class="priceProd" > {price} </p>
      <img class="likeProd" src = "https://cdn.worldvectorlogo.com/logos/like-2.svg" alt= "Error Image" /> 
      <img class="buyProd" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1xJNgFylvNetWjr_M6J3QSSptq5HmPVtNjKOwQQ-5w&s" alt= "Error Image" /> 
    </div>
  );
}

export default Products; // Assurez-vous d'exporter le composant Home
