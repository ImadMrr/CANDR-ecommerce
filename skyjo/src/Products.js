import './styles/Products.css'; 
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import like from './assets/like.png';
import likepress from './assets/likepress.png';
import { FavoriteContext } from './FavoriteContext';

function Products( {name_prod, img_prod, price, id, description, brand, category, stock, discount, rating, images} ) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { addToFavorites, removeFromFavorites, favoriteItems } = useContext(FavoriteContext);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    //produit present ?
    const isLiked = favoriteItems.some(item => item.name_prod === name_prod);
    setLiked(isLiked); //maj des like
  }, [name_prod, favoriteItems]);
  const handleAddToCart = () => {
      addToCart({ name_prod, img_prod, price });
      setAdded(true);
      setTimeout(() => {
          setAdded(false);
      }, 1000);
    };
  const handleLikeClick = () => {
    const isProductLiked = favoriteItems.some(item => item.name_prod === name_prod);
    setLiked(!isProductLiked);
    if (!isProductLiked) {
        addToFavorites({ name_prod, img_prod, price });
        localStorage.setItem(name_prod, 'true'); 
    } else { 
        removeFromFavorites(name_prod);
        localStorage.removeItem(name_prod);
    }
  };
  const goInfo = () => {
    navigate("/InformationsProd", { state: { name_prod, img_prod, price, id, description, brand, category, stock, discount, rating, images } });
  };
  return (
    <div className={`containerProd ${added ? 'added-to-cart' : ''}`} key = {id} > 
      <h2 className="nameProd" onClick={goInfo}  > {name_prod} </h2>
      <img className="imgProd" src = {img_prod} onClick={goInfo} />
      <p className="priceProd" > {price} </p>
      <img className="likeProd" src={liked ? likepress : like} alt="Like" onClick={handleLikeClick} />
      <img className="buyProd" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1xJNgFylvNetWjr_M6J3QSSptq5HmPVtNjKOwQQ-5w&s" alt="Buy" onClick={handleAddToCart}/>
    </div>
  );
}

export default Products;
