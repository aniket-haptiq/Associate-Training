import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(s => s.products.list.find(p => p.id.toString() === id));

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img src={product.images?.[0]} alt={product.title} className="img-fluid mb-3" />
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
    </div>
  );
};

export default ProductDetails;
