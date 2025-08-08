import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import productReducer from '../features/productSlice';
import cartReducer from '../features/cartSlice';
import wishlistReducer from '../features/wishlistSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});


export default store;