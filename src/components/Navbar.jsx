import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItemCount = useSelector(state => {
    return state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
  });

  return (
    <nav>
      <div>МОЙ МАГАЗИН</div>
      <div>
        <ul>
          <li>
            <Link to="/">Домой</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart ({cartItemCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
