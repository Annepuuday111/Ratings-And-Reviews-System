-- Drop tables if they exist
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS products;

-- Create Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT
);

-- Create Reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  comment TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO products (name, description, image_url) VALUES
('Wireless Headphones', 'High quality wireless over-ear headphones with noise cancellation.', 'https://via.placeholder.com/300x180?text=Headphones'),
('Smartphone X12', 'Flagship smartphone with a stunning camera and performance.', 'https://via.placeholder.com/300x180?text=Smartphone'),
('Gaming Keyboard', 'RGB backlit mechanical keyboard for gaming enthusiasts.', 'https://via.placeholder.com/300x180?text=Keyboard');
