import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Change slide function
  const changeSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="wedding-hero">
      <div className="wedding-hero-section">
        <div className="wedding-hero-slides">
          {/* Slide 1 */}
          <div className={`wedding-hero-slide wedding-hero-slide-1 ${currentSlide === 0 ? 'active' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Wedding Celebration" 
            />
          </div>

          {/* Slide 2 */}
          <div className={`wedding-hero-slide wedding-hero-slide-2 ${currentSlide === 1 ? 'active' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Wedding Ceremony"
            />
          </div>

          {/* Slide 3 */}
          <div className={`wedding-hero-slide wedding-hero-slide-3 ${currentSlide === 2 ? 'active' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Wedding Reception" 
            />
          </div>

          <div className="wedding-hero-overlay"></div>
        </div>

        <div className="wedding-hero-content">
          {/* Text content for slide 1 */}
          <div className={`wedding-hero-text-content ${currentSlide === 0 ? 'active' : ''}`} data-wedding-slide="1">
            <h1 className="wedding-hero-title">Your Dream Wedding Starts Here</h1>
            <p className="wedding-hero-subtitle">Creating unforgettable moments for the most important day of your life</p>
            <a href="#contact-section" className="wedding-hero-cta">Plan Your Wedding</a>
          </div>

          {/* Text content for slide 2 */}
          <div className={`wedding-hero-text-content ${currentSlide === 1 ? 'active' : ''}`} data-wedding-slide="2">
            <h1 className="wedding-hero-title">Elegant & Memorable Ceremonies</h1>
            <p className="wedding-hero-subtitle">From intimate gatherings to grand celebrations, we bring your vision to life</p>
            <a href="#services-section" className="wedding-hero-cta">View Our Services</a>
          </div>

          {/* Text content for slide 3 */}
          <div className={`wedding-hero-text-content ${currentSlide === 2 ? 'active' : ''}`} data-wedding-slide="3">
            <h1 className="wedding-hero-title">Perfect Wedding Planning</h1>
            <p className="wedding-hero-subtitle">Professional wedding coordination with a personal touch</p>
            <a href="#contact-section" className="wedding-hero-cta">Get In Touch</a>
          </div>
        </div>

        <div className="wedding-hero-indicators">
          <div 
            className={`wedding-hero-indicator ${currentSlide === 0 ? 'active' : ''}`} 
            data-wedding-slide="1"
            onClick={() => changeSlide(0)}
          ></div>
          <div 
            className={`wedding-hero-indicator ${currentSlide === 1 ? 'active' : ''}`} 
            data-wedding-slide="2"
            onClick={() => changeSlide(1)}
          ></div>
          <div 
            className={`wedding-hero-indicator ${currentSlide === 2 ? 'active' : ''}`} 
            data-wedding-slide="3"
            onClick={() => changeSlide(2)}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
