import React from 'react';
import img197 from '../../assets/img/web-img/photos/celebrats_197.jpg';
import img114 from '../../assets/img/web-img/photos/celebrats_114.jpg';
import img8 from '../../assets/img/web-img/photos/celebrats_8.jpg';

const ExperienceSection = () => {
  return (
    <section className="celeb-container py-5" id="experience-section">
      <div className="container">
        <div className="celeb-experience">
          <div className="celeb-exp-left">
            {/* Mobile single image */}
            <div className="celeb-mobile-image">
              <img src={img197} alt="Elegant wedding decoration" />
            </div>

            <h1 className="celeb-exp-title">Expertly crafted weddings & experiences</h1>
            <p className="celeb-exp-description">
              Unlocking unforgettable moments with precision and passion, our tailored wedding experiences are
              designed to inspire, engage, and leave a lasting impression on your special day.
            </p>

            <div className="celeb-exp-numbers">
              <div className="celeb-exp-number-item">
                <h1 className="celeb-exp-number">250+</h1>
                <p className="celeb-exp-number-label">Weddings Organized</p>
              </div>
              <div className="celeb-exp-number-item">
                <h1 className="celeb-exp-number">15+</h1>
                <p className="celeb-exp-number-label">Years of Experience</p>
              </div>
              <div className="celeb-exp-number-item">
                <h1 className="celeb-exp-number">98%</h1>
                <p className="celeb-exp-number-label">Client Satisfaction</p>
              </div>
            </div>

            <div className="celeb-exp-btns">
              <a href="#services-section" className="text-decoration-none">
                <div className="celeb-exp-btn celeb-exp-btn-primary">
                  View Our Packages
                </div>
              </a>

              <a href="#contact-section" className="text-decoration-none">
                <div className="celeb-exp-btn celeb-exp-btn-secondary">
                  Schedule Consultation
                </div>
              </a>
            </div>
          </div>

          <div className="celeb-exp-right">
            {/* Desktop collage */}
            <div className="celeb-image-collage">
              <div className="celeb-collage-item">
                <img src={img197} alt="Elegant wedding decoration" />
              </div>
              <div className="celeb-collage-item">
                <img src={img114} alt="Wedding couple" />
              </div>
              <div className="celeb-collage-item">
                <img src={img8} alt="Wedding ceremony" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;