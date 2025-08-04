import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { toggleWish } from '../features/wishlistSlice';

const ProductList = () => {
  const products = useSelector(state => state.products.list);
  const wishlist = useSelector(state => state.wishlist.list);
  const dispatch = useDispatch();

  if (!products.length) {
  return (
    <div className="alert alert-warning alert-dismissible fade show text-center my-4 h-100" role="alert">
      <strong>No products found!</strong> Try adjusting your filters or check back later.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

  return (
    <div className="row">
      {products.map(product => {
        const inWishlist = wishlist.some(w => w.id === product.id);
        const imgSrc = product.thumbnail || product.images?.[0] || '/placeholder.png';

        return (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={imgSrc} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">₹{product.price}</p>
                {/* <p className="card-text">{product.}</p> */}
                <div className="mt-auto">
                  <button className="btn btn-primary me-2" onClick={() => dispatch(addItem(product))}>
                    Add to Cart
                  </button>
                  <button
                    className={`btn ${inWishlist ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={() => dispatch(toggleWish(product))}
                  >
                    {inWishlist ? 'Remove Wish' : 'Wishlist'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
