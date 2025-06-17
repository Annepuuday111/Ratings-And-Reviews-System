import React, { useState } from 'react';
import StarRating from './StarRating';
import { submitReview } from '../utils/api';
import '../styles/ProductDetails.css';

function ReviewForm({ productId, onSubmitted }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === '') return alert('All fields are required');

    try {
      await submitReview({ product_id: productId, rating, comment, image_url: image });
      setRating(0);
      setComment('');
      setImage('');
      onSubmitted();
    } catch (err) {
      alert('Failed to submit review');
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Write a Review</h3>
      <StarRating value={rating} setValue={setRating} />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review"
        rows={3}
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL (optional)"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
