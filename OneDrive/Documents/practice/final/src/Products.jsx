import React from 'react';

const Products = () => {
  return (
    <div className='products'>
      <div className="container">
        <div className="text">
          <h1>Different products we have :</h1>  
        </div>
        <div className="list">
          <div className="list-detail">
            <div className="image">
              <img src="https://icon-library.com/images/gaming-icon/gaming-icon-2.jpg" alt="Mens Wear" />
            </div>
            <div className="text">
              <h2>Gaming things</h2>
            </div>
          </div>
          <div className="list-detail">
            <div className="image">
              <img src="https://i0.wp.com/www.domesblissity.com/wp-content/uploads/2020/05/AdobeStock_212121143-scaled.jpeg?fit=1200%2C800&ssl=1" alt="Ladies Wear" />
            </div>
            <div className="text">
              <h2>Home appliances</h2> 
            </div>
          </div>
          <div className="list-detail">
            <div className="image">
              <img src="https://ae01.alicdn.com/kf/HTB15UAbBByWBuNkSmFPq6xguVXao/EASYIDEA-headphones-Wireless-Bluetooth-Headphone-With-Microphone-High-Quality-headphone-For-sport-Super-Bass-Recharge-Headphone.jpg"/>
            </div>
            <div className="text">
              <h2>Wireless Audio</h2>
            </div>
          </div>
          <div className="list-detail">
            <div className="image">
              <img src="https://tse1.mm.bing.net/th?id=OIP.vDVmIcGpcBhUa1doOrBl5gHaE8&pid=Api&P=0&h=180" alt="Backpacks" />
            </div>
            <div className="text">
              <h2>More and more</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
