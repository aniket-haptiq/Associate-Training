import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchCategories,searchProducts } from '../api/productsApi';

export const loadProducts = createAsyncThunk('products/load', async () => {
  return await fetchProducts();
});
export const loadCategories = createAsyncThunk('products/loadCats', async () => {
  return await fetchCategories();
});

export const doSearch = createAsyncThunk('products/search', async (term) => {
  return await searchProducts(term);
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    categories: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => { state.list = action.payload; })
      .addCase(loadCategories.fulfilled, (state, action) => { state.categories = action.payload; })
      .addCase(doSearch.fulfilled, (state, action) => { state.list = action.payload; });
  }
});

export default productSlice.reducer;
