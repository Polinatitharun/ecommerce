import React from 'react';
import './Home.css';
import Products from './Products';

const Home = () => {
  return (
    <div>
      <div className="head">
        <div className="head-txt">
          <h1>AMAZING</h1>
        </div>
        <div className="home-img">
          <img 
            src="https://media.istockphoto.com/id/1306668349/photo/isolated-of-shipping-paper-boxes-inside-blue-shopping-cart-trolley-on-tablet-with-blue.webp?b=1&s=170667a&w=0&k=20&c=X-0j1D_KcMg8V4tC8E3gxNkydta0O5yyrNXFLn7lc8A=" 
            alt="Fashion" 
          />
          <div className="img-text">
            <h1>Your Choice</h1>
            <p>We are here to provide you the latest Collections and the new Products</p>
          </div>
        </div>
      </div>
      <Products />
      <div className='foot'>
       Thanks for visiting
       <br></br>
       all rights reserved @ copyright<br/>
       Designed by Tharun
    </div>
    </div>
    
  );
}

export default Home;
