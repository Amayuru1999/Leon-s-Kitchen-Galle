const Review = require("../model/review");

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("menuItem")
      .populate("customer", "name"); //thuk
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("menuItem")
      .populate("customer", "name");
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (review) {
      res.status(200).json({ message: "Review deleted successfully" });
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
