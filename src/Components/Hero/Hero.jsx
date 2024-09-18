import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <br/>
            <h2>GET ALL NEW ARRIVALS!!</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>Your ONE stop</p>
                    <p>Fashion</p>
                    <p>Hub</p>
                </div>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
  )
}

export default Hero