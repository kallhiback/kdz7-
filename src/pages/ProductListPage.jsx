import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/reducers/cartSlice';
import axios from 'axios';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        // Загрузка товаров с внешней ссылки
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке товаров:', error);
      });
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Список товаров</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
