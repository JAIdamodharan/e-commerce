import React, { useEffect, useRef, useState, useCallback } from 'react';
import './NewCollections.css';
import all_product from '../Assets/all_product'; 
import { Item } from '../Item/Item'; 

const getFilteredProducts = (category, count) => {
  const filtered = all_product.filter(product => product.category === category);
  return filtered.slice(0, count);
};

export const NewCollections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const itemWidth = useRef(0);

  const categories = ['women', 'men', 'kids']; // Update as needed
  const itemsPerCategory = 3;
  const slides = categories.flatMap(category => getFilteredProducts(category, itemsPerCategory));

  const calculateItemWidth = useCallback(() => {
    const items = sliderRef.current ? sliderRef.current.children : [];
    if (items.length > 0) {
      itemWidth.current = items[0].offsetWidth;
    }
  }, []);

  const updateSliderPosition = useCallback(() => {
    if (sliderRef.current && itemWidth.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * itemWidth.current}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    calculateItemWidth();
    updateSliderPosition();

    const handleResize = () => {
      calculateItemWidth();
      updateSliderPosition();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateItemWidth, updateSliderPosition]);

  useEffect(() => {
    const autoRotateSlider = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    };

    intervalRef.current = setInterval(autoRotateSlider, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
  };

  const handleNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="slider-container">
        <div className="collections" ref={sliderRef}>
          {slides.map((item, i) => (
            <div key={i} className="collection-item">
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
        <button className="prev-slide" onClick={handlePrevSlide}>&#10094;</button>
        <button className="next-slide" onClick={handleNextSlide}>&#10095;</button>
      </div>
    </div>
  );
};