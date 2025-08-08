import React, { useState, useRef, useEffect } from 'react';
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
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 shadow-sm position-sticky top-0 z-3" role="navigation" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={vite} alt="HaptiqMart-Logo" className="d-inline-block align-top me-2" />
          HaptiqMart
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
            {user && <li className="nav-item"><Link className="nav-link" to="/cart">🛒 Cart ({cart.length})</Link></li>}
            {user && <li className="nav-item"><Link className="nav-link" to="/billing">Billing</Link></li>}
          </ul>

          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item dropdown" ref={profileRef}>
                <button className="btn btn-outline-light btn-sm me-2" onClick={toggleProfile}>
                  👤 {user.firstName}
                </button>

                {showProfile && (
                  <div className="position-absolute end-0 mt-2 p-3 bg-white text-dark rounded shadow" style={{ minWidth: '200px', zIndex: 1000 }}>
                    <div className="text-center mb-2">
                      <img
                        src={user.image}
                        alt="User Avatar"
                        className="rounded-circle"
                        style={{ width: '60px', height: '60px' }}
                      />
                    </div>
                    <p className="mb-1"><strong>{user.firstName} {user.lastName}</strong></p>
                    <p className="mb-1">{user.email}</p>
                    <p className="mb-2 text-muted" style={{ fontSize: '0.8em' }}>{user.username}</p>
                    <button className="btn btn-sm btn-outline-danger w-100" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </li>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
