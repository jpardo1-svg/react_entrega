import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="item-price">${item.price} c/u</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
        <span className="qty-number">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
      <p className="subtotal-item">${item.price * item.quantity}</p>
      <button className="delete-btn" onClick={() => removeItem(item.id)}>🗑️</button>
    </div>
  );
};

export default CartItem;
