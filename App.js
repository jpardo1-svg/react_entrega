import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import './App.css';

const plantsData = [
  { id: 1, name: "Monstera Deliciosa", price: 25, category: "Interior", description: "Famosa por sus hojas con agujeros.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400" },
  { id: 2, name: "Pachira Acuática", price: 30, category: "Árbol", description: "El árbol del dinero para la buena suerte.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=400" },
  { id: 3, name: "Calathea Roseopicta", price: 18, category: "Interior", description: "Hojas vibrantes que se mueven de noche.", image: "https://images.unsplash.com/photo-1620191830362-5a2a444bc029?q=80&w=400" }
];

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('shop'); // 'shop' o 'cart'

  const addToCart = (plant) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === plant.id);
      return exists 
        ? prev.map(item => item.id === plant.id ? {...item, quantity: item.quantity + 1} : item)
        : [...prev, {...plant, quantity: 1}];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? {...item, quantity: item.quantity + delta} : item
    ));
  };

  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 onClick={() => setView('shop')}>Paradise Nursery 🌿</h1>
        <div className="nav-links">
          <button onClick={() => setView('shop')}>Tienda</button>
          <div className="cart-nav" onClick={() => setView('cart')}>
            🛒 <span className="badge">{totalItems}</span>
          </div>
        </div>
      </nav>

      <main className="content">
        {view === 'shop' ? (
          <section className="product-grid">
            {plantsData.map(plant => (
              <ProductCard key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
          </section>
        ) : (
          <section className="cart-section">
            <h2>Tu Carrito de Compra</h2>
            {cart.length === 0 ? (
              <div className="empty-msg">
                <p>No tienes plantas aún. ¡Ve a buscar una!</p>
                <button onClick={() => setView('shop')}>Volver a la tienda</button>
              </div>
            ) : (
              <div className="cart-container">
                <div className="items-list">
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
                  ))}
                </div>
                <div className="summary-card">
                  <h3>Resumen</h3>
                  <p>Plantas totales: {totalItems}</p>
                  <p className="total-price">Total: ${totalPrice}</p>
                  <button className="checkout-btn">Pagar Ahora</button>
                  <button className="continue-btn" onClick={() => setView('shop')}>Seguir Comprando</button>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
