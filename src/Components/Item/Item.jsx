import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  // State to manage whether the image is enlarged or not
  const [isEnlarged, setIsEnlarged] = useState(false);

  // Function to toggle enlargement
  const toggleEnlargement = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className="item">
      {/* Apply the enlarged class conditionally */}
      <Link to={`/product/${props.id}`}>
        <img 
          src={props.image} 
          alt={props.name} 
          className={isEnlarged ? 'item-image enlarged' : 'item-image'} 
          onClick={toggleEnlargement} 
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}