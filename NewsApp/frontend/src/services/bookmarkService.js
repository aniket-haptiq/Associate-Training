import axios from 'axios';
const API = import.meta.env.VITE_API_URL;


export const getBookmarks = async () => {
const token = localStorage.getItem('token');
const res = await axios.get(`${API}/bookmarks`, {
headers: { Authorization: `Bearer ${token}` },
});
return res.data;
};