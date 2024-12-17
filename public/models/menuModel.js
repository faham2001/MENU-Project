const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
});

const menuSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  items: [menuItemSchema],
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
