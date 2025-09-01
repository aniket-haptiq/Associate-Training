import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginService } from '../services/authService';


export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
return await loginService(credentials);
});


const authSlice = createSlice({
name: 'auth',
initialState: { user: null, token: null },
reducers: {
logout: (state) => {
state.user = null;
state.token = null;
localStorage.removeItem('token');
},
},
extraReducers: (builder) => {
builder.addCase(loginUser.fulfilled, (state, action) => {
state.user = action.payload.user;
state.token = action.payload.token;
localStorage.setItem('token', action.payload.token);
});
},
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;