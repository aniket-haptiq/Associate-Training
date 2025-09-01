import axios from 'axios';
const API = import.meta.env.VITE_API_URL;


export const getTopNews = async () => {
const res = await axios.get(`${API}/news/top`);
return res.data;
};


export const searchNews = async (query) => {
const res = await axios.get(`${API}/news/search?q=${query}`);
return res.data;
};