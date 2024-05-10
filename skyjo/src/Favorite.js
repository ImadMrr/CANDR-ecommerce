import React, { useContext } from 'react';
import { FavoriteContext } from './FavoriteContext';
import './styles/Favorite.css'

function Favorite() {
    const { favoriteItems, removeFromFavorites } = useContext(FavoriteContext);

    const handleRemoveFavorite = (productName) => {
        removeFromFavorites(productName);
    };

    return (
        <div className="favorite-items">
            <h2>Favorite Items</h2>
            <ul>
                {favoriteItems.map((item, index) => (
                    <li key={index}>
                       <span><img src={item.img_prod} alt="Product" className='img_fav' /></span> - <span>{item.name_prod}</span> - <span>{item.price}</span>
                        <button onClick={() => handleRemoveFavorite(item.name_prod)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorite;
