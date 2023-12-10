import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
