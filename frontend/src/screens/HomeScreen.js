import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import App.css or create a new HomeScreen.css
import '../App.css'; 

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

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

export default HomeScreen;