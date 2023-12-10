import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
