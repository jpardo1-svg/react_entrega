import React from 'react';

const ProductCard = ({ plant, addToCart }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={plant.image} alt={plant.name} />
        {plant.sale && <span className="sale-badge">Oferta</span>}
      </div>
      <div className="card-info">
        <p className="category">{plant.category}</p>
        <h3>{plant.name}</h3>
        <p className="description">{plant.description}</p>
        <div className="price-row">
          <span className="price">${plant.price}</span>
          <button className="add-btn" onClick={() => addToCart(plant)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
