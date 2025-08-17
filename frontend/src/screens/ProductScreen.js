import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductScreen = () => {
  // Get the ID from the URL using the useParams hook
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      // Make an API call to your backend with the product ID
      const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]); // The useEffect hook will run whenever the ID in the URL changes

  return (
    <div>
      {/* Check if the product data has been fetched */}
      {product.name ? (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} style={{ maxWidth: '400px' }} />
          <p>Description: {product.description}</p>
          <p>Price: ₹{product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.countInStock}</p>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductScreen;