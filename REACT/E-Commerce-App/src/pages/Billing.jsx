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
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.qty}</td>
              <td>₹{item.price}</td>
              <td>₹{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3">Grand Total</th>
            <th>₹{grandTotal}</th>
          </tr>
          <tr>
            <td colSpan="4" className="text-end">Date: {currentDate}</td>
          </tr>
        </tfoot>
      </table>

      <form className="mt-4 bg-dark text-light p-4 rounded">
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



// import { useSelector } from 'react-redux';

// const Billing = () => {
//   const cart = useSelector(state => state.cart.items);
//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="container mt-4">
//       <h2>Billing Summary</h2>
//       {cart.length === 0 ? (
//         <div className="container d-flex justify-content-center align-items-center min-vh-50">
//         <div className="alert alert-info text-center w-100 w-md-75 w-lg-50" role="alert">
//           <h5 className="mb-2">🛒 Your cart is empty</h5>
//           <p className="mb-3">Looks like you haven’t added anything yet.</p>
//           <a href="/products" className="btn btn-primary btn-sm"> Browse Products  </a>
//     </div>
//   </div>)  
//   : (
//         <>
//           <ul className="list-group mb-4">
//             {cart.map(item => (
//               <li key={item.id} className="list-group-item d-flex justify-content-between">
//                 {item.title}
//                 <span>₹{item.price}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="d-flex text-align-right align-content-end">
//                       <h4>Grand Total : ₹{total}</h4>
//           </div>


//           <form className="mt-4 container bg-dark text-light text-center py-3">
//             <h5>Shipping Details</h5>
//             <input type="text" className="form-control mb-2" placeholder="Full Name" required />
//             <input type="text" className="form-control mb-2" placeholder="Address" required />
//             <input type="text" className="form-control mb-2" placeholder="City" required />
//             <input type="integer" className="form-control mb-2" placeholder="Phone No" required />
//             <input type="integer" className="form-control mb-2" placeholder="Pincode" required />
//             <button className="btn btn-success mt-2" type="submit">Place Order</button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Billing;
