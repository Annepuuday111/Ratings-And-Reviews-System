import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import '../styles/ProductCard.css';
import defaultImage from '../assets/default-product.png';

function ProductCard({ product }) {
  const { id, name, description, image_url, avg_rating = 0, review_count = 0 } = product;

  return (
    <div className="product-card">
      <img
        src={image_url || defaultImage}
        alt={name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="rating-box">
          <FaStar color="#fbc02d" /> <span>{avg_rating.toFixed(1)} / 5</span>
          <span className="review-count">({review_count} reviews)</span>
        </div>
        <Link to={`/product/${id}`} className="details-button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
