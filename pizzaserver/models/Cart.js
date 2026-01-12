const mongoose = require("mongoose");

const shoppingCartSchema = new mongoose.Schema({
  pizzaId: {
    type: String,
    required: true
  },
  name: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  },
  image: String,
  
});

module.exports = mongoose.model(
  "ShoppingCart",
  shoppingCartSchema,
  "shoppingcart"
);
