import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/reducers/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  return (
    <div>
      <h1>Корзина</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <div>
                  <p>{item.title}</p>
                  <p>Цена: {item.price}</p>
                  <p>Количество: {item.quantity}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPage;
