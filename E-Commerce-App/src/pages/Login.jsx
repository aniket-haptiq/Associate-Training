import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/productsApi'; 

const Login = () => {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const data = await loginUser({ username, password });
      dispatch(login({ user: data, token: data.token }));
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
    } catch (error) {
      
      if (!import.meta.env.PROD) {
        console.error('Login error (dev):', error.message || error);
      } else {
        console.error('Login error occurred');
      }

      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5 mb-5 bg-dark text-light text-center py-3 rounded" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4">Login</h3>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
