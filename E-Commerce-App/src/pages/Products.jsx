import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import {
  loadProducts,
  loadCategories,
  doSearch,
  sortProducts,
} from '../features/productSlice';
import ProductList from '../components/ProductList';

const Products = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, [dispatch]);

  const handleSearch = () => dispatch(doSearch(term));

  const handleSortByCategory = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  return (
    <div className="container">
      <div className="flex-wrap">
       <div className="my-4 d-flex gap-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search products..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>

        <select className="form-select w-auto ms-auto" onChange={handleSortByCategory}>
          <option value="">Sort By</option>
          <option value="title">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

    </div>

      <ProductList />
  </div>
  );
};

export default Products;
