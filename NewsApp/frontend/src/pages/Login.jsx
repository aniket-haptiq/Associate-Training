import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authSlice';


function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();


const handleSubmit = (e) => {
e.preventDefault();
dispatch(loginUser({ email, password }));
};


return (
<form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto flex flex-col gap-4">
<input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="border p-2"
/>
<input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="border p-2"
/>
<button className="bg-blue-600 text-white p-2">Login</button>
</form>
);
}


export default Login;