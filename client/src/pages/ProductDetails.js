import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import StarRating from '../components/StarRating';
import { fetchProductDetails, fetchReviews } from '../utils/api';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  const loadData = useCallback(async () => {
    try {
      const prod = await fetchProductDetails(id);
      const revs = await fetchReviews(id);
      setProduct(prod);
      setReviews(revs);
    } catch (err) {
      console.error('Failed to load product/reviews', err);
    }
  }, [id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="product-detail-container">
      {product ? (
        <>
          <div className="product-header">
            <img
              src={product.image_url}
              alt={product.name}
              className="detail-image"
            />
            <div className="detail-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <StarRating value={product.avg_rating} readonly />
              <p>{product.review_count} total reviews</p>
            </div>
          </div>

          <ReviewForm productId={product.id} onSubmitted={loadData} />

          <h3>All Reviews</h3>
          <div className="reviews-section">
            {reviews.length > 0 ? (
              reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <StarRating value={r.rating} readonly />
                  <p>{r.comment}</p>
                  {r.image_url && (
                    <img
                      src={r.image_url}
                      alt="Review"
                      className="review-image"
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
