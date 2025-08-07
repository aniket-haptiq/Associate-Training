import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(s => s.products.list.find(p => p.id.toString() === id));

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="container mt-3">
      <div className="row gap-5">

        <div className="col-sm-5 text-center border">
          <img src={product.images?.[0]} alt={product.title} className="img-fluid rounded shadow-sm" />
          <Link to="/products" className="btn btn-outline-primary mt-2 mb-1">← Back to Products</Link>
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">${product.price}</h4>

          <div className="d-flex gap-5">
            <div>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Discount:</strong> {product.discountPercentage}%</p>
              <p><strong>Rating:</strong> ⭐ {product.rating} / 5</p>
              <p><strong>SKU:</strong> {product.sku}</p>
              <p><strong>Weight:</strong> {product.weight}g</p>
            </div>
            <div>
              <p><strong>Dimensions:</strong> {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</p>
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
              <p><strong>Shipping:</strong> {product.shippingInformation}</p>
              <p><strong>Availability:</strong> {product.availabilityStatus}</p>
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
              <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
            </div>
          </div>

          <div className="mt-3 d-flex align-items-center gap-5">
              {product.tags && product.tags.length > 0 && (        
                  <div>
                    <h6>Tags:</h6>
                    {product.tags.map((tag, i) => (
                      <span key={i} className="badge bg-secondary me-2">{tag}</span>
                    ))}
                  </div>
              )}            
              <div>
                <h6>Barcode:</h6>
                <p>{product.meta?.barcode}</p>
              </div>
              <div>
                <h6>QR Code:</h6>
                <img src={product.meta?.qrCode} alt="QR Code" style={{ height: '80px' }} />
              </div>
            </div>
        </div>
      </div>


      <div className="mt-3">
        <h4 className="mb-4">Customer Reviews</h4>

        {product.reviews?.length === 0 ? (
          <p className="text-muted">No reviews yet.</p>
        ) : (
          <div className="row">
            {product.reviews.map((review, index) => (
              <div key={index} className="col-sm-4 mb-4">
                <div className="card h-100 shadow-sm border-1">
                  <div className="card-body">
                    <h5 className="card-title mb-1">{review.reviewerName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{review.reviewerEmail}</h6>
                    <div className="mb-2">
                      <strong>Rating:</strong> ⭐ {review.rating} / 5
                    </div>
                    <p className="card-text">{review.comment}</p>
                  </div>
                  <div className="card-footer bg-transparent border-top-0 text-end">
                    <small className="text-muted">
                      Reviewed on {new Date(review.date).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
