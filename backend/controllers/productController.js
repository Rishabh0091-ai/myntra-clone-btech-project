const Product = require('../models/Product'); // Import the Product model

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Find all products in the database
    res.json(products); // Send them as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getProducts };