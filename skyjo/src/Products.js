import './styles/Products.css'; 
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Products({ name_prod, img_prod, price }) {

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
      addToCart({ name_prod, img_prod, price });
    };

  return (
    <div class="containerProd">
      <h2 class="nameProd">{name_prod}</h2>
      <img class="imgProd" src={img_prod} alt={name_prod} />
      <p class="priceProd">{price}</p>
      <img class="likeProd" src="https://cdn.worldvectorlogo.com/logos/like-2.svg" alt="Like" />
      <img className="buyProd" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1xJNgFylvNetWjr_M6J3QSSptq5HmPVtNjKOwQQ-5w&s" alt="Buy" onClick={handleAddToCart}/>
    </div>
  );
}

export default Products;
