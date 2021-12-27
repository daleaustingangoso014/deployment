import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
       <div className='hero-wrapper'>
      <div className='hero-description'>
      <p className='description-intro'>Hi there! I'm pskkkkkkkkkkkkkk</p>
      <h1 className='' data-aos="flip-right">Dale Austin Gangoso</h1>
      <p className='description-title'>A Web Developer pskkkkkkkkkkk</p>
      <div className='hero-btns'>
      <div class="dg-pf-banner-start-button">
                            <a href="#skills">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Get Started
                            </a>
                        </div>
      </div> 
      </div>
      <div className='hero-image'>
      <img src={'../images/final-avatar.png'} />
      </div>
      </div> 

    </div>

   
  );
}

export default HeroSection;
