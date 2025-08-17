require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// This is where we initialize the 'app' variable
const app = express();

// Connect to the database
connectDB();

// Middleware setup (these must come after 'const app = express()')
app.use(express.json()); // Allows us to get JSON data from the body
app.use(cors());

// Main API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Basic route to test if the API is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});