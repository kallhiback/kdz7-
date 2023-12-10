// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Массив товаров в корзине
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemExists = state.items.find((item) => item.id === id);

      if (itemExists) {
        state.items = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const itemToRemoveIndex = state.items.findIndex((item) => item.id === id);

      if (itemToRemoveIndex !== -1) {
        if (state.items[itemToRemoveIndex].quantity === 1) {
          state.items.splice(itemToRemoveIndex, 1);
        } else {
          state.items[itemToRemoveIndex].quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
