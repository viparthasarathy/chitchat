const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: "Anonymous" }
});

module.exports = mongoose.model('User', userSchema);
