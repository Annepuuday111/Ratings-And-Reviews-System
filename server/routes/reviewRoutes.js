const express = require('express');
const router = express.Router();
const controller = require('../controllers/reviewController');

router.get('/:id', controller.getReviews);
router.post('/', controller.submitReview);

module.exports = router;
