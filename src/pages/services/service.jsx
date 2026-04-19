
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './service.css';

import weddingData from './data/weddingServiceData.json';
import birthdayData from './data/birthdayServiceData.json';
import corporateData from './data/corporateServiceData.json';
import eventData from './data/eventDataServiceData.json';

const jsonMap = {
  wedding: weddingData,
  birthday: birthdayData,
  corporate: corporateData,
  event: eventData,
};


const Service = () => {
  const { slug } = useParams();
  const [toastMessage, setToastMessage] = useState(null);
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (slug && jsonMap[slug]) {
      setServiceData(jsonMap[slug]);
    } else {
      setServiceData(jsonMap['wedding']);
    }
  }, [slug]);

  // Show toast notification
  const showToast = (message, bgColor = '#631549') => {
    setToastMessage({ message, bgColor });
    setTimeout(() => setToastMessage(null), 2600);
  };

  // Handle explore click
  const handleExploreClick = (serviceType, serviceName, e) => {
    e.preventDefault();
    showToast(`✨ ${serviceName} details — Dynamic page coming soon.`, '#f8266b');
  };

  // Handle consultation click
  const handleConsultClick = () => {
    showToast('🎉 Your consultation request has been sent! Our team will reach out within 24h.', '#631549');
  };

  // Handle mosaic item click
  const handleMosaicClick = () => {
    showToast('📸 Let us create similar magic for your event — contact our design studio.', '#9e2b5c');
  };

  if (!serviceData) return null;

  return (
    <>
      <Navbar />
      <div className="evs-service-container">
        {/* Hero Section - Single Image */}
        {serviceData.hero && (
          <div className="evs-hero-single">
            <img 
              className="evs-hero-img" 
              src={serviceData.hero.image} 
              alt={serviceData.hero.alt}
            />
            <div className="evs-hero-overlay">
              <h1 className="evs-hero-title">{serviceData.hero.title}</h1>
              <p className="evs-hero-subtitle">{serviceData.hero.subtitle}</p>
            </div>
          </div>
        )}

        {/* Section Header */}
        {serviceData.sectionHeader && (
          <div className="evs-section-header">
            <div className="evs-badge">{serviceData.sectionHeader.badge}</div>
            <h2 className="evs-section-title">{serviceData.sectionHeader.title}</h2>
            <p className="evs-section-desc">{serviceData.sectionHeader.description}</p>
          </div>
        )}

        {/* Services Overlap Grid */}
        <div className="evs-overlap-grid">
          {serviceData.services && serviceData.services.map((service) => (
            <div 
              key={service.id} 
              className={`evs-service-block ${service.reverse ? 'evs-reverse' : ''}`}
            >
              <div className="evs-image-duo">
                <div className="evs-duo-stack">
                  <img src={service.image1} alt={`${service.name} visual 1`} loading="lazy" />
                  <img src={service.image2} alt={`${service.name} visual 2`} loading="lazy" />
                </div>
              </div>
              <div className="evs-service-info">
                <h3 className="evs-service-name">{service.name}</h3>
                <p className="evs-service-desc">{service.desc}</p>
                <div className="evs-price-chip">
                  {/* Replace icon with emoji based on priceIcon string */}
                  {service.priceIcon?.includes('seedling') && '🌱 '}
                  {service.priceIcon?.includes('lightbulb') && '💡 '}
                  {service.priceIcon?.includes('balloon') && '🎈 '}
                  {service.priceIcon?.includes('couch') && '🛋️ '}
                  {service.priceIcon?.includes('images') && '🖼️ '}
                  {service.price}
                </div>
                <div className="evs-feature-tags">
                  {service.features && service.features.map((feature, idx) => (
                    <span key={idx} className="evs-feature-tag">{feature}</span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="evs-explore-link" 
                  data-service={service.id}
                  onClick={(e) => handleExploreClick(service.id, service.name, e)}
                >
                  {service.exploreText} <span style={{marginLeft: 4, verticalAlign: 'middle'}}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Gallery Mosaic */}
        {serviceData.gallery && (
          <div className="evs-inspire-mosaic">
            <h3 className="evs-mosaic-title">Moments of inspiration</h3>
            <div className="evs-mosaic-grid">
              {serviceData.gallery.map((item, idx) => (
                <div key={idx} className="evs-mosaic-item" onClick={handleMosaicClick}>
                  <img src={item.img} alt={item.caption} loading="lazy" />
                  <div className="evs-mosaic-caption">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action Banner */}
        {serviceData.cta && (
          <div className="evs-cta-banner">
            <div className="evs-cta-content">
              <h3 className="evs-cta-title">{serviceData.cta.title}</h3>
              <p className="evs-cta-text">{serviceData.cta.description}</p>
            </div>
            <button className="evs-btn-primary" onClick={handleConsultClick}>
              <span style={{marginRight: 6, verticalAlign: 'middle'}}>📅</span> {serviceData.cta.buttonText}
            </button>
          </div>
        )}

        {/* Toast Notification */}
        {toastMessage && (
          <div className="evs-toast-notification" style={{ backgroundColor: toastMessage.bgColor }}>
            {toastMessage.message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Service;