import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to use 'useNavigate' instead of 'useHistory'
import './Dashboard.css';

function Dashboard({ cart, addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (category = '') => {
    try {
      const url = category ? `https://fakestoreapi.in/api/products/category?type=${category}` : 'https://fakestoreapi.in/api/products';
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div id="dashboard">
      <h1>Select the Category here</h1>
      <div id="category-buttons">
        <button onClick={() => handleCategoryClick('audio')}>Audio</button>
        <button onClick={() => handleCategoryClick('gaming')}>Gaming</button>
        <button onClick={() => handleCategoryClick('appliances')}>Appliances</button>
      </div>
      <div id="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <div className="product-price">
              <p>Price: ${product.price}</p>
              {isInCart(product) ? (
                <button onClick={() => navigate('/cart')}>Go to Cart</button>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
