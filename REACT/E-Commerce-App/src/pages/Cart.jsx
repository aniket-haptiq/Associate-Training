import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(s => s.cart.items);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <ul className="list-group">
          {cart.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.title} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
