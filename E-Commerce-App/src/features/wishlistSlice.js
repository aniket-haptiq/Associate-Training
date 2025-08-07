import { createSlice } from '@reduxjs/toolkit';

const initial = { list: JSON.parse(localStorage.getItem('wishlist')) || [] };

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initial,
  reducers: {
    toggleWish(state, action) {
      const exists = state.list.some(p => p.id === action.payload.id);
      if (exists) state.list = state.list.filter(p => p.id !== action.payload.id);
      else state.list.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.list));
    },
  },
});
export const { toggleWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
