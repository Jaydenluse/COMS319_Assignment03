import React, { useState } from 'react';
import Toast from './Toast'
import 'react-toastify/dist/ReactToastify.css';

function AddProductForm() {
    const [product, setProduct] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: { rate: '' } 
    });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setProduct({ ...product, title: value });
        } else if (name === 'rate') {
            setProduct({ ...product, rating: { ...product.rating, rate: value } });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const productData = {
            ...product,
            image: product.image ? `http://127.0.0.1:4000/images/${product.image}.jpg` : ''
        };
    
        try {
            const response = await fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });
    
            if (response.ok) {
                setToastMessage('Product added successfully');
                setShowToast(true);
            } else {
                setToastMessage('Failed to add product');
                setShowToast(true);
            }
        } catch (error) {
            setToastMessage('Error: ' + error.message);
            setShowToast(true);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">Id</label>
                    <input type="number" name="id" id="id" required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" name="title" id="title" required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input type="number" name="price" id="price" required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" id="description" required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}></textarea>
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" name="category" id="category" required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input type="text" name="image" id="image"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rating</label>
                    <input type="number" name="rate" id="rate" step="0.1" min="0" max="5"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange} />
                </div>

                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default AddProductForm;