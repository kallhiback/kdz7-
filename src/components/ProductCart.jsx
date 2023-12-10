import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/reducers/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  const getItemQuantity = () => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    return itemInCart ? itemInCart.quantity : 0;
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <div className="cart-actions">
        <button onClick={handleAddToCart}>+</button>
        <span>{getItemQuantity()}</span>
        <button onClick={handleRemoveFromCart}>-</button>
      </div>
    </div>
  );
};

export default ProductCard;
