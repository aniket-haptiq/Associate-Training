import { useSelector } from 'react-redux';

const Billing = () => {
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Billing Summary</h2>
      {cart.length === 0 ? (
        <div className="container d-flex justify-content-center align-items-center min-vh-50">
        <div className="alert alert-info text-center w-100 w-md-75 w-lg-50" role="alert">
          <h5 className="mb-2">🛒 Your cart is empty</h5>
          <p className="mb-3">Looks like you haven’t added anything yet.</p>
          <a href="/products" className="btn btn-primary btn-sm"> Browse Products  </a>
    </div>
  </div>)  
  : (
        <>
          <ul className="list-group mb-4">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                {item.title}
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="align-content-end">
                      <h4>Grand Total : ₹{total}</h4>
          </div>


          <form className="mt-4 container mt-5 mb-5 bg-dark text-light text-center py-3">
            <h5>Shipping Details</h5>
            <input type="text" className="form-control mb-2" placeholder="Full Name" required />
            <input type="text" className="form-control mb-2" placeholder="Address" required />
            <input type="text" className="form-control mb-2" placeholder="City" required />
            <input type="int" className="form-control mb-2" placeholder="Phone No" required />
            <input type="int" className="form-control mb-2" placeholder="Pincode" required />
            <button className="btn btn-success mt-2" type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Billing;
