import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
    const { products } = useContext(ShopContext); // Destructure the products from context

    if (!products) {
        return <div>Loading...</div>; // Handle loading or empty state
    }

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} />
                    <p>${product.new_price}</p>
                </div>
            ))}
        </div>
    );
};

export default Product;