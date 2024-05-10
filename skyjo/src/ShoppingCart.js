import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './styles/ShoppingCart.css'

function ShoppingCart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };
  const handleIncrementQuantity = (index) => {
    incrementQuantity(index);
  };
  const handleDecrementQuantity = (index) => {
    decrementQuantity(index);
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  return (
    <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
            {cartItems.map((item, index) => (
                <li key={index}>
                    <img className="product-image" src={item.img_prod} alt={item.name_prod} />
                    <span>{item.name_prod}</span> - <span>{item.price}</span> - Quantity : <span>{item.quantity}</span>
                    <button onClick={() => handleDecrementQuantity(index)}>-</button>
                    <button onClick={() => handleIncrementQuantity(index)}>+</button>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </li>
            ))}
        </ul>
        <div className="total-price">
            Total: {totalPrice.toFixed(2)}$
        </div>
        <button className="pay-button">Pay now !</button>
    </div>
  );
}

export default ShoppingCart;
