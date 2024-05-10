import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';
import { FavoriteContext } from './FavoriteContext';
import like from './assets/like.png';
import likepress from './assets/likepress.png';
import './styles/Informations.css';

function InformationsProd() {
    const location = useLocation();
    const { addToCart } = useContext(CartContext);
    const { addToFavorites, removeFromFavorites, favoriteItems } = useContext(FavoriteContext);
    const [liked, setLiked] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        // Vérifie si le produit est déjà en favori
        const isLiked = favoriteItems.some(item => item.name_prod === location.state.name_prod);
        setLiked(isLiked);
    }, [favoriteItems, location.state.name_prod]);

    const handleAddToCart = () => {
        addToCart({
            name_prod: location.state.name_prod,
            img_prod: location.state.img_prod,
            price: location.state.price
        });
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 1000);
    };

    const handleLikeClick = () => {
        const isProductLiked = favoriteItems.some(item => item.name_prod === location.state.name_prod);
        setLiked(!isProductLiked);
        if (!isProductLiked) {
            addToFavorites({
                name_prod: location.state.name_prod,
                price: location.state.price
            });
        } else {
            removeFromFavorites(location.state.name_prod);
        }
    };

    return (
        <div className="container clearfix">
            <div className="info-section">
                <h2>{location.state.name_prod}</h2>
                <h3>{location.state.brand}</h3>
                <p className="category-info">Category: {location.state.category}</p>
                
                <p className="product-description">{location.state.description}</p>
                <p className="product-price">{location.state.price}</p>
                <p className="discount-info">Discount: {location.state.discount}%</p>
                <div className="action-buttons">
                    <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
                    <button className="like-button" onClick={handleLikeClick}>
                        <img className="like-icon" src={liked ? likepress : like} alt="Like" />
                    </button>
                    <p>Stock: {location.state.stock}</p>
                </div>
                
            </div>
            <div className="image-section">
                <img className="product-image" src={location.state.img_prod} alt="Product" />
            </div>
            <div className="image-gallery">
                {location.state.images.map(image =>
                    <img src={image} key={image} alt="Product" />
                )}
            </div>
        </div>
    );
}

export default InformationsProd;
