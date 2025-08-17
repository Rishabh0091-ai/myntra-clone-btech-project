import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
              <Link to={`/product/${product._id}`} key={product._id} className="product-item">
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
              </Link>
            ))
          )}
        </div>
      </header>
    </div>
  );
}

export default HomeScreen;