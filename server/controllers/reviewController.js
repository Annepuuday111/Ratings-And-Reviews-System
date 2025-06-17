const Review = require('../models/reviewModel');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.getReviewsByProductId(req.params.id);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get reviews' });
  }
};

exports.submitReview = async (req, res) => {
  try {
    const newReview = await Review.addReview(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
};
