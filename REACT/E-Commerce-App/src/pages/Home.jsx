import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, loadCategories, doSearch, loadByCategory } from '../features/productSlice';
import ProductList from '../components/ProductList';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.products.categories);
  const [term, setTerm] = useState('');

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, [dispatch]);

  const handleFilter = (cat) => dispatch(loadByCategory(cat));
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

      <div className="mb-4">
        {categories.map(cat => (
          <button key={cat.id} className="btn btn-outline-secondary me-2 mb-2" onClick={() => handleFilter(cat.id)}>
            {cat.name}
          </button>
        ))}
        <button className="btn btn-outline-primary mb-2" onClick={() => dispatch(loadProducts())}>
          All
        </button>
      </div>

      <ProductList />
    </div>
  );
};

export default Home;
