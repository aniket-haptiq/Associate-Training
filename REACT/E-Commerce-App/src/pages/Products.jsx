import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../features/productSlice';
import ProductList from '../components/ProductList';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2 className="my-4">All Products</h2>
      <ProductList />
    </div>
  );
};

export default Products;
