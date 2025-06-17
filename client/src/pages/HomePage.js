import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';
import { fetchProducts } from '../utils/api';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error("Failed to load products", err);
      });
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-title">Available Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
