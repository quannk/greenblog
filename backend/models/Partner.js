const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  logo: String
});

module.exports = mongoose.model('Partner', partnerSchema);
