import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Donde el verde cobra vida</p>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Comenzar
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
