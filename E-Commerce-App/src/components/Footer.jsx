import { Link } from 'react-router-dom';
import vite from '../assets/vite.svg';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col-md-4">
            <img src={vite} alt="HaptiqMart-Logo" width="75" height="75" className="d-inline-block align-top me-2" />
            <h5>HaptiqMart</h5>
            <p>Your one-stop shop for all your needs.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5><hr />
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/login" className="text-light text-decoration-none">Login</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5><hr />
            <p>Email: support@haptiqmart.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <hr className="border-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} HaptiqMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
