import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.cost.substring(1)) * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
        dispatch(removeItem(item.name));
    }
  };

  return (
    <div>
      <h2>Total Carrito: ${calculateTotalAmount()}</h2>
      {/* Mapeo de items con botones de incrementar, decrementar y eliminar */}
      <button onClick={() => alert('Próximamente')}>Checkout</button>
      <button onClick={onContinueShopping}>Continuar Comprando</button>
    </div>
  );
};

export default CartItem;
