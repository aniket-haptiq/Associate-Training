import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { toggleWish } from '../features/wishlistSlice';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.list);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlist.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img src={product.thumbnail || product.images?.[0]} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary me-2" onClick={() => dispatch(addItem(product))}>
                      Add to Cart
                    </button>
                    <button className="btn btn-danger" onClick={() => dispatch(toggleWish(product))}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
