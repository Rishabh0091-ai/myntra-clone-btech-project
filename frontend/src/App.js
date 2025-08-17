import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css'; // Add the CSS import here

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<HomeScreen />} />
          {/* Route for a single product page, using a dynamic ID */}
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;