const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String, // URL to the product image
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    // We can add more fields later, like 'user' or 'reviews'
  },
  {
    timestamps: true, // This adds 'createdAt' and 'updatedAt' fields automatically
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;