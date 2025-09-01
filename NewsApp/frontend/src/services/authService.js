import axios from 'axios';
const API = import.meta.env.VITE_API_URL;


export const loginService = async (credentials) => {
const res = await axios.post(`${API}/auth/login`, credentials);
return res.data;
};


export const registerUser = async (userData) => {
await axios.post(`${API}/auth/register`, userData);
};