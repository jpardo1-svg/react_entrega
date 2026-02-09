import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  // Datos de ejemplo para las plantas
  const [plants] = useState([
    {
      category: "Plantas de Interior",
      items: [
        { name: "Helecho Boston", price: 15, image: "https://example.com/helecho.jpg", description: "Follaje exuberante y elegante." },
        { name: "Poto (Pothos)", price: 12, image: "https://example.com/poto.jpg", description: "Perfecta para principiantes, muy resistente." }
      ]
    },
    {
      category: "Suculentas",
      items: [
        { name: "Echeveria", price: 8, image: "https://example.com/echeveria.jpg", description: "Forma de roseta con colores vibrantes." },
        { name: "Planta de Jade", price: 10, image: "https://example.com/jade.jpg", description: "Símbolo de buena suerte y prosperidad." }
      ]
    }
  ]);

  const handleAddToCart = (plant) => {
    // Aquí iría la lógica para despachar la acción a Redux o actualizar el Contexto
    console.log(`Agregado al carrito: ${plant.name}`);
  };

  return (
    <div className="product-list-container">
      {plants.map((section, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{section.category}</h2>
          <div className="product-grid">
            {section.items.map((plant, idx) => (
              <div key={idx} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <p className="product-price">${plant.price}</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                >
                  Agregar al Carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;