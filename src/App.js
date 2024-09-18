import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer'; // Ensure this matches the export in Footer.js
import React, { useEffect, useRef } from 'react';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  // Refs to handle element manipulation
  const heroImageRef = useRef(null);
  const offersImageRef = useRef(null);

  // Effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Scroll effect for the hero image
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateX(${scrollPosition * 0.1}px)`; // Adjust multiplier for desired effect
      }

      // Scroll effect for the offers image
      if (offersImageRef.current) {
        offersImageRef.current.style.transform = `translateX(-${scrollPosition * 0.1}px)`; // Negative multiplier to move left
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}/>} />
          <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}/>} />
          <Route path='/kids' element={<ShopCategory category="kid"  banner={kid_banner}/>} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;