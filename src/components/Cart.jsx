// Cart.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
