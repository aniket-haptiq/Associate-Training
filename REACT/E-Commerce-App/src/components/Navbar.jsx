import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import vite from '../assets/vite.svg';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 shadow-sm position-sticky top-0 z-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={vite} alt="HaptiqMart-Logo" className="d-inline-block align-top me-2" />
          HaptiqMart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            {user && <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>}
            {user && <li className="nav-item"><Link className="nav-link" to="/cart"> 🛒Cart({cart.length})</Link></li>}
            {user && <li className="nav-item"><Link className="nav-link" to="/billing">Billing</Link></li>}
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
