import React, { createContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  //useState init cart of localstorage
  const [favoriteItems, setFavoriteItems] = useState(
    JSON.parse(localStorage.getItem('favoriteItems')) || []
  );
  //save cart in localstorage each update
  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);
  const addToFavorites = (product) => {
    setFavoriteItems([...favoriteItems, product]);
  };
  const removeFromFavorites = (productName) => {
    const updatedFavorites = favoriteItems.filter(
      (item) => item.name_prod !== productName
    );
    setFavoriteItems(updatedFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
