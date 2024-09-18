import React, { useEffect, useRef, useState } from 'react';
import './Popular.css';
import all_product from '../Assets/all_product'; // Ensure this path is correct
import { Item } from '../Item/Item'; // Ensure this path is correct

export const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Filter to include only women’s category products
  const womenProducts = all_product.filter(item => item.category === 'women');

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      const autoRotateSlider = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % womenProducts.length);
      };

      intervalRef.current = setInterval(autoRotateSlider, 3000);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [womenProducts.length]);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.style.transform = `translateX(-${currentIndex * 230}px)`; // Adjust based on item width and margin
    }
  }, [currentIndex]);

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(prevIndex => 
      (prevIndex - 1 + womenProducts.length) % womenProducts.length
    );
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % womenProducts.length
    );
  };

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-slider-container">
        <div
          className="popular-collections"
          ref={sliderRef}
        >
          {womenProducts.map((item) => (
            <div className="item" key={item.id}>
              <Item 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            </div>
          ))}
        </div>
        <button className="prev-slide" onClick={handlePrev}>&#10094;</button>
        <button className="next-slide" onClick={handleNext}>&#10095;</button>
      </div>    
    </div>
  );
};