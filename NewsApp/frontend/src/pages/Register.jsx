import { useState } from 'react';
import { registerUser } from '../services/authService';


function Register() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = async (e) => {
e.preventDefault();
await registerUser({ email, password });
alert('User registered, please login!');
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
<button className="bg-blue-600 text-white p-2">Register</button>
</form>
);
}


export default Register;