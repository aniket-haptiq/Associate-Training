import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';


function Navbar() {
const { user } = useSelector(state => state.auth);
const dispatch = useDispatch();


return (
<nav className="bg-blue-600 text-white p-4 flex justify-between">
<div className="font-bold text-xl">
<Link to="/">DailyNews</Link>
</div>
<div className="flex gap-4">
<Link to="/">Home</Link>
<Link to="/search">Search</Link>
{user && <Link to="/saved">Saved</Link>}
{user && <Link to="/dashboard">Dashboard</Link>}
{!user ? (
<>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</>
) : (
<button onClick={() => dispatch(logout())}>Logout</button>
)}
</div>
</nav>
);
}


export default Navbar;