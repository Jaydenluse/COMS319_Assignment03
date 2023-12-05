import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDescription from './ProductDescription'; 
import Toast from './Toast';

const ProductsList = ({ isAdmin, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState(''); 
  const [showToast, setShowToast] = useState(false); 

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products', error);
      });
  }, []);

  const handleUpdatePriceClick = async (productId, newPrice) => {
    if (newPrice === null || isNaN(newPrice)) {
      return; 
    }
    if (newPrice < 0) {
      setErrors({ ...errors, [productId]: 'Invalid price' });
      return;
    }

    const updatedProducts = products.map(product =>
      product._id === productId ? { ...product, price: newPrice } : product
    );
    setProducts(updatedProducts);

    try {
      await axios.put(`/products/${productId}/update-price`, { newPrice });
      setErrors({ ...errors, [productId]: '' });
      setToastMessage('Price updated successfully'); // Set success message
      setShowToast(true); // Show toast notification
    } catch (error) {
      console.error('Error updating product price:', error);
      setErrors({ ...errors, [productId]: 'Update failed' });
      setProducts(products);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product._id} className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <ProductDescription description={product.description} />
              <div className="flex justify-between items-center mb-4">
              {isAdmin ? (
                    <button
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold"
                      onClick={() => {
                        const newPrice = prompt('Enter new price for ' + product.title, product.price);
                        handleUpdatePriceClick(product._id, parseFloat(newPrice));
                      }}
                    >
                      ${parseFloat(product.price).toFixed(2)}
                    </button>
                  ) : (
                    <span className="text-blue-800 px-3 py-1 text-sm font-semibold">
                      ${parseFloat(product.price).toFixed(2)}
                    </span>
                  )}
                {errors[product._id] && <span className="font-bold error text-xs text-red-500 ml-3">{errors[product._id]}</span>}
                
                <span className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold">
                  {product.category}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <span className="text-sm text-gray-600">
                  Rating: {product.rating.rate} 
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );}

export default ProductsList;