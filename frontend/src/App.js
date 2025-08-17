import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import './App.css'; // Add the CSS import here

function App() {
  return (
    <Router>
      <main>
        <Routes>
  <Route path="/" element={<HomeScreen />} />
  <Route path="/product/:id" element={<ProductScreen />} />
  <Route path="/login" element={<LoginScreen />} />
  <Route path="/register" element={<RegisterScreen />} />
</Routes>

      </main>
    </Router>
  );
}

export default App;