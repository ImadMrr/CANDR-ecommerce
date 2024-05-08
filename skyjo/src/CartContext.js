import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Vérifie si le produit est déjà dans le panier
    const existingProductIndex = cartItems.findIndex(item => item.name_prod === product.name_prod);

    if (existingProductIndex !== -1) {
      // Si le produit existe déjà dans le panier, augmentez simplement la quantité
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity++;
      setCartItems(updatedCart);
    } else {
      // Sinon, ajoutez le produit au panier avec une quantité de 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        setCartItems, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
