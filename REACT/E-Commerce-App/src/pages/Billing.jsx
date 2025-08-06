import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Billing = () => {
  const cart = useSelector(state => state.cart.items);
  const { state } = useLocation();
  const items = state?.directBuy || cart;

  const grandTotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const currentDate = new Date().toLocaleString();

  return (
    <div className="container mt-4">
      <h2>Invoice Summary</h2>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Image</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td><img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                      />
              </td>
              <td>{item.qty}</td>
              <td>${item.price}</td>
              <td>${item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="4"><h3>Grand Total</h3></th>
            <th><h3>${grandTotal}</h3></th>
          </tr>
          <tr>
            <td colSpan="5" className="text-start">Date: {currentDate}</td>
          </tr>
        </tfoot>
      </table>

      <form className="mt-5 bg-dark text-light p-4 rounded">
        <h5 className="text-center mb-3">Shipping Details</h5>
        <input type="text" className="form-control mb-2" placeholder="Full Name" required />
        <input type="text" className="form-control mb-2" placeholder="Address" required />
        <input type="text" className="form-control mb-2" placeholder="City" required />
        <input type="text" className="form-control mb-2" placeholder="Phone No" required />
        <input type="text" className="form-control mb-3" placeholder="Pincode" required />
        <button className="btn btn-success w-100" type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Billing;
