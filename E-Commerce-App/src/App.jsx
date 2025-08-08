import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Billing from './pages/Billing';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'products/:id', element: <ProductDetails /> },
      { path: 'login', element: <Login /> },

      {
        element: <PrivateRoute />,
        children: [
          { path: 'cart', element: <Cart /> },
          { path: 'billing', element: <Billing /> },
        ],
      },
    ],
  },
]);

export default App;
