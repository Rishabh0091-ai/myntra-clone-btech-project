require('dotenv').config();
const connectDB = require('./config/db');
const Product = require('./models/Product');
const productData = require('./data/products');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({}); // Delete all existing products
    await Product.insertMany(productData); // Insert the dummy products

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error with data import: ' + error);
    process.exit(1);
  }
};

importData();