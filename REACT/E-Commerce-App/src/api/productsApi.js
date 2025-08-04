import axios from 'axios';

const BASE = 'https://dummyjson.com';

export const fetchProducts = async () => {
  const { data } = await axios.get(`${BASE}/products`);
  return data.products;
};

export const fetchCategories = async () => {
  const { data } = await axios.get(`${BASE}/products/categories`);
  return data;
};

export const fetchProductsByCategory = async (cat) => {
  const { data } = await axios.get(`${BASE}/products/category/${cat}`);
  return data.products;
};

export const searchProducts = async (q) => {
  const { data } = await axios.get(`${BASE}/products/search?q=${encodeURIComponent(q)}`);
  return data.products;
};
