// src/pages/AdminPanel.jsx
import { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    // Load existing products from localStorage
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(stored);
  }, []);

  const handleAddProduct = () => {
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
    setNewProduct({ title: '', description: '', price: '' });
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Title"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        /><br />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        /><br />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        /><br />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <div>
        <h3>All Products</h3>
        {products.map((prod, i) => (
          <div key={i} style={{ border: '1px solid #ddd', margin: 10, padding: 10 }}>
            <h4>{prod.title}</h4>
            <p>{prod.description}</p>
            <p>Price: ${prod.price}</p>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
