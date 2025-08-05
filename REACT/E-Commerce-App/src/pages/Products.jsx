import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts, loadCategories, doSearch} from '../features/productSlice';
import ProductList from '../components/ProductList';

const Products = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, [dispatch]);

  
  const handleSearch = () => dispatch(doSearch(term));

  return (
    <div className="container">
      <div className="my-4 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search products..."
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>


      <ProductList />
    </div>
  );
};

export default Products;
