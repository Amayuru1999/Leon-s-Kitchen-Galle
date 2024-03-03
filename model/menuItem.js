const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    availability: {
      type: Boolean,
      required: true,
      default: true, // Assume items are available unless specified otherwise
    },
    nutritionalInformation: {
      calories: String,
      protein: String,
      carbs: String,
      fat: String,
    },
    tags: [String], // Allows for multiple tags, e.g., ["Vegan", "Gluten-Free"]
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5, // Assuming a 5-star rating system
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MenuItem", menuItemSchema);
