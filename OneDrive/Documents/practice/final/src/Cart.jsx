import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div id="cart">
      <h1>Cart</h1>
      
      <div id="product-container">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className='product-details'>
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      
      {cart.length > 0 && (
        <div className="cart-total">
          <h2>Cart Summary</h2>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          ))}
          <div className="total-amount">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
