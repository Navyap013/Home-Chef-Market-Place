const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  specialties: [String],
  image: String
});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
