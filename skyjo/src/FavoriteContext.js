import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addToFavorites = (product) => {
        setFavoriteItems([...favoriteItems, product]);
    };

    const removeFromFavorites = (productName) => {
        const updatedFavorites = favoriteItems.filter(item => item.name_prod !== productName);
        setFavoriteItems(updatedFavorites);
    };

    return (
        <FavoriteContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};
