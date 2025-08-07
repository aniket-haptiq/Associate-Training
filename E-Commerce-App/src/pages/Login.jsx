import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/productsApi'; 

const Login = () => {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ username, password });
      dispatch(login({ user: data, token: data.token }));
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5 mb-5 bg-dark text-light text-center py-3 rounded" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4">Login</h3>
      <form onSubmit={handleLogin}>
        <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
