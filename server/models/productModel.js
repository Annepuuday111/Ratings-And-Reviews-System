const db = require('./db');

const getAllProducts = async () => {
  const result = await db.query(`
    SELECT 
      p.id, 
      p.name, 
      p.description, 
      p.image_url,
      COALESCE(ROUND(AVG(r.rating), 1), 0) AS avg_rating,
      COUNT(r.id) AS review_count
    FROM products p
    LEFT JOIN reviews r ON p.id = r.product_id
    GROUP BY p.id
  `);
  return result.rows;
};
