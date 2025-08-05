import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => dispatch(removeItem(id));

  const handleBuyAll = () => {
    if (cart.length) navigate('/billing', { state: { directBuy: cart } });
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center min-vh-50">
            <div className="alert alert-warning text-center w-100 w-sm-75 w-md-50 p-4 shadow-sm">
              <h4 className="alert-heading">🛒 Your Cart is Empty</h4>
              <p className="mb-3">Looks like you haven’t added any items yet.</p>
              <a href="/products" className="btn btn-primary btn-sm">
                Browse Products
              </a>
            </div>
          </div>
)
 : (
        <>
          <table className="table table-bordered table-hover mb-4 text-center">
              <thead className="table-light">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>₹{item.price}</td>
                    <td>₹{item.price * item.qty}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>

          <div className="text-end">
            <button className="btn btn-success" onClick={handleBuyAll}>Buy All</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;




