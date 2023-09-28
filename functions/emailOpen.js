const mongoose = require('mongoose');

// Define the EmailOpen Schema
const emailOpenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  userAgent: String,
  referer: String,
  authorization: String,
  contentType: String,
  accept: String,
  cookies: String,
  host: String,
  acceptLanguage: String,
  cacheControl: String,
  // Add other fields as needed
});

// Create the EmailOpen model
const EmailOpen = mongoose.model('EmailOpen', emailOpenSchema);

module.exports = EmailOpen;
