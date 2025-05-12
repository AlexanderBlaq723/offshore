import React, { useState, useEffect } from 'react';
import './styles/dark.css';

const Laptop = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLaptops() {
      try {
        const response = await fetch('https://dummyjson.com/products/category/laptops'); // Removed the limit parameter
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLaptops(data.products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchLaptops();
  }, []);

  if (loading) {
    return <p>Loading laptop data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleBuyClick = (laptop) => {
    alert(`Added "${laptop.title}" to your cart! (Price: $${laptop.price})`);
    console.log('Buy button clicked for:', laptop);
  };

  return (
    <>
      <p id='lie'>Laptops</p>
      <div className="child">
        {laptops.map((laptop) => (
          <div className='laptop-item' key={laptop.id}>
            <center>
              <img src={laptop.thumbnail} alt={laptop.title} className="laptop-image" />
            </center>
            <div className="laptop-details">
              <p className="star-rating">
                <span className="gt">&#9733; </span>
                <span className="gt1">{laptop.rating}</span>
              </p>
              <p className="laptop-title">{laptop.title}</p>
              <p className="laptop-price">Price: ${laptop.price}.00</p>
              <p className="laptop-brand">Brand: {laptop.brand}</p>
              <button className="buy-button" onClick={() => handleBuyClick(laptop)}>Buy Now</button>
            </div>
          </div>
        ))}
        <div className='phones'>
          <center>
            <p id="str">
              <a href="#">more</a>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}

export default Laptop;