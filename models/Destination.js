// Destination.js

const mongoose = require('mongoose');

// Define the Destination schema
const destinationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Destination model
const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
