import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';
import { toggleWish } from '../features/wishlistSlice';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const products = useSelector(state => state.products.list);
  const wishlist = useSelector(state => state.wishlist.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qtyMap, setQtyMap] = useState({});

  const handleQtyChange = (id, value) => {
    setQtyMap(prev => ({ ...prev, [id]: parseInt(value) || 1 }));
  };

  const handleBuyNow = (product) => {
    const qty = qtyMap[product.id] || 1;
    navigate('/billing', { state: { directBuy: [{ ...product, qty }] } });
  };

  return (
    <div className="row">
      {products.map(product => {
        const inWishlist = wishlist.some(w => w.id === product.id);
        const imgSrc = product.thumbnail || product.images?.[0] || '/placeholder.png';
        const qty = qtyMap[product.id] || 1;

        return (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={imgSrc} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">₹{product.price}</p>
               <div className="input-group mb-2" style={{ maxWidth: '120px' }}>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleQtyChange(product.id, Math.max(1, qty - 1))}
                  >
                    -
                  </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={qty}
                          readOnly
                        />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleQtyChange(product.id, qty + 1)}
                  >
                    +
                  </button>
              </div>

                <div className="mt-auto">
                  <button className="btn btn-primary me-2" onClick={() => dispatch(addItem({ ...product, qty }))}>
                    Add to Cart
                  </button>
                  <button className="btn btn-success me-2" onClick={() => handleBuyNow(product)}>
                    Buy Now
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
