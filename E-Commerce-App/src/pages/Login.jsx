import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email,password })); // Simulated login
    navigate('/');
  };

  return (
    <div className="container mt-5 mb-5 bg-dark text-light text-center py-3 rounded" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleLogin}>
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
