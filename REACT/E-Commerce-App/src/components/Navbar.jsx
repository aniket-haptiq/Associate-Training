import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">ShopEasy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            {user && <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>}
            {user && <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cart.length})</Link></li>}
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item">
                <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
