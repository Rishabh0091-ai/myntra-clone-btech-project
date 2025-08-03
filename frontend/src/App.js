import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Use state to store the fetched products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchProducts = async () => {
      try {
        // Make a GET request to your backend API
        const { data } = await axios.get('http://localhost:5000/api/products');

        // Set the products in state
        setProducts(data);

        // Log the data to the console to verify
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchProducts();
  }, []); // The empty array [] ensures this runs only once when the component mounts

return (
  <div className="App">
    <header className="App-header">
      <h1>Myntra Clone</h1>
      <h2>Products</h2>
      <div className="products-container">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-item">
              <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </header>
  </div>
);
}

export default App;