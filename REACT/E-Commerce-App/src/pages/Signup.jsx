import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(login({ email, name })); // Simulated sign up
    navigate('/');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4">Sign Up</h3>
      <form onSubmit={handleSignup}>
        <input type="text" className="form-control mb-3" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" required />
        <button className="btn btn-success w-100" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
