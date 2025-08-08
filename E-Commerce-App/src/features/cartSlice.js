import { createSlice } from "@reduxjs/toolkit";

const initial = { items: JSON.parse(localStorage.getItem("cart")) || [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.qty += item.qty || 1;
      } else {
        state.items.push({ ...item, qty: item.qty || 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.qty = action.payload.qty;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});
export const { addItem, removeItem, updateQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
