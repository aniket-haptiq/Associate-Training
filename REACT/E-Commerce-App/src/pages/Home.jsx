import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, loadCategories } from '../features/productSlice';
import vite from '../assets/vite.svg';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  }, [dispatch]);

  const newArrivals = products.slice(-15); // last 5 as mock "New Arrivals"

  return (
<div className="container">

  <div className="card mb-5 border-0 shadow-sm bg-gradient bg-light">
    <div className="card-body text-center py-5">
      <h2 className="card-title mb-3 fw-bold text-dark">
        Welcome to <span className="text-primary">
          <img src={vite} alt="AniketMart-Logo" className="d-inline-block align-top me-2" width="32" />AniketMart
        </span>
      </h2>
      <p className="card-text fs-5 text-secondary">
        Your one-stop shop for <span className="text-success fw-semibold">electronics</span>, 
        <span className="text-danger fw-semibold"> fashion</span>, and 
        <span className="text-warning fw-semibold"> groceries</span>! <br />
        Experience <span className="text-info fw-bold">quality</span>, 
        <span className="text-success fw-bold"> affordability</span>, and 
        <span className="text-primary fw-bold"> 24x7 support</span>.
      </p>
    </div>
  </div>

  <h4 className="mb-3 text-dark">New Arrivals</h4>
  <div className="d-flex overflow-auto mb-5 px-1" style={{ gap: '1rem' }}>
    {newArrivals.map(product => (
      <div
        key={product.id}
        className="card border-1 shadow-sm bg-white"
        style={{
          minWidth: '225px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
        }}
      >
        <img
          src={product.thumbnail || product.images?.[0] || '/placeholder.png'}
          className="card-img-top rounded-top"
          alt={product.title}
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body p-2 text-center">
          <h6 className="card-title text-truncate text-dark fw-semibold">{product.title}</h6>
          <p className="card-text text-success fw-medium">₹{product.price}</p>
          <p className="card-text fw-medium">Rating | {product.rating}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Why Choose Us */}
  <h4 className="mb-3 text-dark">Why AniketMart?</h4>
  <div className="row mb-5">
    {[
      {
        icon: '🚚',
        title: 'Fast Delivery',
        desc: 'Get your products delivered quickly across India.',
        color: 'text-white',
        bg: 'bg-primary',
      },
      {
        icon: '💳',
        title: 'Secure Payments',
        desc: 'Multiple payment options with secure gateways.',
        color: 'text-white',
        bg: 'bg-success',
      },
      {
        icon: '🔄',
        title: 'Easy Returns',
        desc: 'Hassle-free return policy for all products.',
        color: 'text-white',
        bg: 'bg-warning text-dark',
      },
      {
        icon: '📞',
        title: '24x7 Support',
        desc: 'Our support team is always here to help.',
        color: 'text-white',
        bg: 'bg-info',
      },
    ].map((feature, idx) => (
      <div className="col-md-3 mb-3" key={idx}>
        <div className={`card h-100 text-center shadow border-0 ${feature.bg}`}>
          <div className="card-body d-flex flex-column justify-content-center">
            <div className={`fs-1 mb-2 ${feature.color}`}>{feature.icon}</div>
            <h6 className={`card-title fw-semibold ${feature.color}`}>{feature.title}</h6>
            <p className={`card-text small ${feature.color}`}>{feature.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

</div>


  );
};

export default Home;
