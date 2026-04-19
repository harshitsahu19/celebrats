
import React, { useEffect, useRef } from 'react';
import './allService.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AllServices = () => {
  // Service data array for better maintainability
  const services = [
    {
      id: 'wedding',
      title: 'Wedding Orchestration',
      description: 'Full‑service wedding planning & design — from intimate elopements to grand celebrations. We curate every detail with emotional intelligence and flawless execution. Our team manages venue selection, vendor coordination, timeline creation, and on-the-day direction so you can live in the moment.',
      price: 'Bespoke pricing (average $8,500 - $25,000)',
      priceIcon: 'fa-ring',
      tags: ['Venue curation', 'Floral artistry', 'Guest journey', 'Month‑of coordination', 'Vendor management', 'Rehearsal dinner'],
      images: [
        'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'normal'
    },
    {
      id: 'decor',
      title: 'Event Design & Décor',
      description: 'Immersive environments, avant-garde floral installations, and atmospheric lighting. We transform venues into sensory stories. Our design team creates mood boards, 3D renderings, and handles full décor production including custom backdrops, centerpieces, lounge furniture, and specialty lighting designs.',
      price: 'From $2,500 (full event styling)',
      priceIcon: 'fa-palette',
      tags: ['Spatial design', 'Custom furniture', 'Lighting concepts', 'Drapery & props', 'Floral installations', 'Rentals sourcing'],
      images: [
        'https://images.pexels.com/photos/1470176/pexels-photo-1470176.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'reverse'
    },
    {
      id: 'birthday',
      title: 'Milestone Birthdays',
      description: 'Extraordinary celebrations for every age — from whimsical children\'s parties to sophisticated 50th galas. Tailored themes, immersive entertainment, and personalized touches. We handle everything from custom invitations and themed decor to entertainment booking, catering, and party favors.',
      price: 'Starting at $1,800 (up to 50 guests)',
      priceIcon: 'fa-birthday-cake',
      tags: ['Theme development', 'Entertainment', 'Custom desserts', 'Photo experiences', 'Party favors', 'Kids activities'],
      images: [
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1919237/pexels-photo-1919237.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'normal'
    },
    {
      id: 'corporate',
      title: 'Corporate Experiences',
      description: 'Seamless execution for conferences, product launches, award galas, and team offsites. We elevate brand presence with high‑impact production. Our corporate division manages venue sourcing, AV production, speaker coordination, attendee registration, catering, and post-event reporting.',
      price: 'Custom quote based on scale',
      priceIcon: 'fa-building',
      tags: ['AV & staging', 'Brand integration', 'VIP hospitality', 'Logistics mastery', 'Speaker management', 'Live streaming'],
      images: [
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1749308/pexels-photo-1749308.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'reverse'
    },
    {
      id: 'luxury',
      title: 'Destination & Luxury',
      description: 'Curated celebrations in the world\'s most breathtaking locations. Full destination management, travel coordination, and opulent design. We handle venue scouting across Europe, Asia, Caribbean, and beyond, plus travel logistics for guests, legal paperwork, and local vendor partnerships.',
      price: 'Bespoke pricing (starting at $12,000)',
      priceIcon: 'fa-globe',
      tags: ['Global venues', 'Travel concierge', 'Legal support', 'Multilingual team', 'Site visits', 'Guest accommodations'],
      images: [
        'https://images.pexels.com/photos/2405565/pexels-photo-2405565.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2373236/pexels-photo-2373236.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'normal'
    },
    {
      id: 'soiree',
      title: 'Social Soirées',
      description: 'Engagement parties, baby showers, bridal luncheons, and intimate gatherings — crafted with warmth, elegance, and personalization. We specialize in creating Instagram-worthy setups with custom backdrops, dessert tables, floral arrangements, and curated gift stations.',
      price: 'Starting at $1,200',
      priceIcon: 'fa-champagne-glasses',
      tags: ['Art direction', 'Curated menus', 'Interactive zones', 'Stress‑free planning', 'Photo backdrops', 'Party favors'],
      images: [
        'https://images.pexels.com/photos/6694500/pexels-photo-6694500.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6944400/pexels-photo-6944400.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'reverse'
    },
    {
      id: 'anniversary',
      title: 'Anniversary & Vow Renewals',
      description: 'Celebrate your journey with timeless anniversary galas, vow renewals, and surprise celebrations. From intimate candlelit dinners to grand soirées with family and friends, we design meaningful experiences that honor your love story.',
      price: 'Starting at $2,500',
      priceIcon: 'fa-heart',
      tags: ['Romantic setups', 'Legacy films', 'Family-style feasts', 'Live music', 'Surprise elements', 'Custom ceremonies'],
      images: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'normal'
    },
    {
      id: 'festival',
      title: 'Festival & Brand Activation',
      description: 'High-energy festivals, pop-up experiences, and brand activations that captivate audiences. We manage everything from stage design and artist booking to crowd flow, permits, and on-ground marketing. Perfect for music festivals, food fairs, and product launches.',
      price: 'Custom project pricing',
      priceIcon: 'fa-music',
      tags: ['Stage production', 'Artist booking', 'Permits & safety', 'Brand integration', 'Interactive zones', 'Social media walls'],
      images: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      layout: 'reverse'
    }
  ];

  const mosaicItems = [
    { img: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Intimate Dinners' },
    { img: 'https://images.pexels.com/photos/6944400/pexels-photo-6944400.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Garden Soirées' },
    { img: 'https://images.pexels.com/photos/6694500/pexels-photo-6694500.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Celebration Showers' },
    { img: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600', caption: 'Destination Dreams' }
  ];

  const handleServiceClick = (serviceId, serviceTitle) => {
    alert(`✨ ${serviceTitle} — our team will share the full experience brochure and pricing.`);
  };

  const handleConsultation = () => {
    alert('🎉 Consultation request received! A senior event designer will reach out within 24h.');
  };

  const handleMosaicClick = () => {
    alert('📸 Let us create magic like this for your upcoming event — get in touch.');
  };

  return (
    <>
      <Navbar />
      <div className="evs-service-container">
        {/* Hero Section */}
        <div className="evs-hero-single">
          <img 
            className="evs-hero-img" 
            src="https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Luxury event floral design"
          />
          <div className="evs-hero-overlay">
            <h1 className="evs-hero-title">Art of Celebration</h1>
            <p className="evs-hero-subtitle">Where every service becomes a masterpiece</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="evs-section-header">
          <div className="evs-badge">Our Signature Collection</div>
          <h2 className="evs-section-title">Tailored experiences, timeless elegance</h2>
          <p className="evs-section-desc">From intimate moments to grand galas — discover our full spectrum of event craftsmanship.</p>
        </div>

        {/* Services Overlap Grid */}
        <div className="evs-overlap-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`evs-service-block ${service.layout === 'reverse' ? 'evs-reverse' : ''}`}
            >
            <div className="evs-image-duo">
              <div className="evs-duo-stack">
                <img src={service.images[0]} alt={service.title} />
                <img src={service.images[1]} alt={`${service.title} detail`} />
              </div>
            </div>
            <div className="evs-service-info">
              <h3 className="evs-service-name">{service.title}</h3>
              <p className="evs-service-desc">{service.description}</p>
              <div className="evs-price-chip">
                <i className={`fas ${service.priceIcon}`}></i> {service.price}
              </div>
              <div className="evs-feature-tags">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="evs-feature-tag">{tag}</span>
                ))}
              </div>
              <div 
                className="evs-explore-link" 
                onClick={() => handleServiceClick(service.id, service.title)}
              >
                Explore {service.title.split(' ')[0]} <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

        {/* Inspiration Gallery Mosaic */}
        <div className="evs-inspire-mosaic">
          <div className="evs-mosaic-title">Moments we've crafted</div>
          <div className="evs-mosaic-grid">
            {mosaicItems.map((item, idx) => (
              <div key={idx} className="evs-mosaic-item" onClick={handleMosaicClick}>
                <img src={item.img} alt={item.caption} />
                <div className="evs-mosaic-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="evs-cta-banner">
          <div>
            <h3 className="evs-cta-title">Ready to create something legendary?</h3>
            <p className="evs-cta-text">Share your vision — we'll craft a bespoke proposal within 48 hours.</p>
          </div>
          <button className="evs-btn-primary" onClick={handleConsultation}>
            <i className="fas fa-calendar-alt"></i> Request consultation
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllServices;