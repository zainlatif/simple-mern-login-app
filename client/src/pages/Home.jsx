// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import Card from '../components/Card';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 🔄 Load product list from localStorage
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(stored);
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((prod, index) => (
          <Card
            key={index}
            title={prod.title}
            description={prod.description}
            price={prod.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
