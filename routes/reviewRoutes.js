const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController"); // Adjust

// POST request to add a new review
router.post("/", reviewController.createReview);

// GET request to fetch all reviews
router.get("/", reviewController.getAllReviews);

// GET request to fetch a single review by ID
router.get("/:id", reviewController.getReviewById);

// PUT request to update a review by ID
router.put("/:id", reviewController.updateReview);

// DELETE request to delete a review by ID
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
