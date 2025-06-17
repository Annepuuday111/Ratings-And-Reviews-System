const db = require('./db');

const getReviewsByProductId = async (productId) => {
  const result = await db.query(`
    SELECT rating, comment, image_url
    FROM reviews
    WHERE product_id = $1
    ORDER BY created_at DESC
  `, [productId]);
  return result.rows;
};

const addReview = async ({ product_id, rating, comment, image_url }) => {
  const result = await db.query(`
    INSERT INTO reviews (product_id, rating, comment, image_url)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [product_id, rating, comment, image_url]);
  return result.rows[0];
};

module.exports = { getReviewsByProductId, addReview };
