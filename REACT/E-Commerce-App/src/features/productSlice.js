import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchCategories, searchProducts } from '../api/productsApi';

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
    originalList: [],   // Master copy of all products
    list: [],           // Filtered and displayed products
    categories: [],
    status: 'idle',
  },
  reducers: {
    
    sortProducts: (state, action) => {
      const type = action.payload;
      if (type === 'title') {
        state.list.sort((a, b) => a.title.localeCompare(b.title));
      } else if (type === 'price') {
        state.list.sort((a, b) => a.price - b.price);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.originalList = action.payload;
        state.list = action.payload;
      })
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(doSearch.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  }
});

export const { sortProducts } = productSlice.actions;

export default productSlice.reducer;
