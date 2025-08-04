import { useSelector } from 'react-redux';

const Billing = () => {
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Billing Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                {item.title}
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>

          <form className="mt-4">
            <h5>Shipping Details</h5>
            <input type="text" className="form-control mb-2" placeholder="Full Name" required />
            <input type="text" className="form-control mb-2" placeholder="Address" required />
            <input type="text" className="form-control mb-2" placeholder="City" required />
            <input type="text" className="form-control mb-2" placeholder="Pincode" required />
            <button className="btn btn-success mt-2" type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Billing;
