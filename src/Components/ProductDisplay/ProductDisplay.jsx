// src/Components/ProductDisplay.jsx

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'; // Import the ShopContext

const ProductDisplay = () => {
    const { products } = useContext(ShopContext); // Destructure the products from context

    if (!products || products.length === 0) {
        return <div>Loading products...</div>; // Handle loading or empty state
    }

    return (
        <div className="product-display">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">${product.new_price.toFixed(2)}</p>
                        <p className="product-old-price">
                            <del>${product.old_price.toFixed(2)}</del>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;