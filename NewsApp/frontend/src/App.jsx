import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
return (
<div className="min-h-screen bg-gray-50">
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/search" element={<Search />} />
<Route path="/saved" element={<Saved />} />
{/* <Route path="/dashboard" element={<Dashboard />} /> */}
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
</Routes>
</div>
);
}


export default App;