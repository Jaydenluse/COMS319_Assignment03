import React, { useState } from 'react';
import Toast from './Toast'; 


function DeleteProductForm() {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [toastMessage, setToastMessage] = useState(''); 
    const [showToast, setShowToast] = useState(false); 

    const handleFetchProduct = async () => {
        // Fetch product details from the server
        const response = await fetch(`/products/${productId}`);
        if (response.ok) {
            const data = await response.json();
            setProduct(data);
        } else {
            console.error('Failed to fetch product');
            // Handle error
        }
    };

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:4000/products/${productId}`, { method: 'DELETE' });
        if (response.ok) {
            setToastMessage('Product deleted successfully');
            setShowToast(true);
            setProduct(null);
        } else {
            console.error('Failed to delete product');
            setToastMessage('Failed to delete product');
            setShowToast(true);
        }
    };


    return (
        <div className="flex justify-center">
            <div className="max-w-lg mx-auto mt-10">
            <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
                <input
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Enter Product ID"
                    className="border border-gray-300 p-2 w-full"
                />
                <button onClick={handleFetchProduct} className="bg-blue-500 text-white p-2 mt-2 w-full">Fetch Product</button>
                
                {product && (
                    <div className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden mt-4">
                        <img
                            className="w-full h-70 object-cover"
                            src={product.image}
                            alt={product.title}
                        />
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                            <p>{product.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-blue-800 px-3 py-1 text-sm font-semibold">
                                    ${parseFloat(product.price).toFixed(2)}
                                </span>
                                <span className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold">
                                    {product.category}
                                </span>
                            </div>
                            <div className="border-t border-gray-200 pt-2">
                                <span className="text-sm text-gray-600">
                                    Rating: {product.rating.rate}
                                </span>
                            </div>
                            {!showConfirmation ? (
                                <button onClick={() => setShowConfirmation(true)} className="bg-red-500 text-white p-2 mt-4 w-full">Delete Product</button>
                            ) : (
                                <div className="mt-4 mb-4">
                                    <p className="mt-4 mb-4 font-bold items-center">Are you sure you want to delete this product?</p>
                                    <button onClick={handleDelete} className="bg-red-500 text-white p-2 w-full">Confirm Delete</button>
                                    <button onClick={() => setShowConfirmation(false)} className="bg-gray-500 text-white p-2 mt-2 w-full">Cancel</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DeleteProductForm;