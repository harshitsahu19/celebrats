import React from 'react';

const ContactSection = () => {
  return (
    <section className="get-in-touch" id="contact-section">
      <div className="container contact-container">
        <div className="row align-items-center">
          {/* Left Side: Contact Information */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="contact-info">
              <p className="small-text">Get in touch at</p>
              <h2 className="mb-4">Start Achieving Your Event Goal</h2>

              {/* Google Maps Embed */}
              <div className="map-container mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3455881223495!2d77.43350831533184!3d23.221231114847464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428c5a5b5a5b%3A0xe9e9a8b5a5a5a5a5!2s138%20Lalghati%20Gufa%20Mandir%20Road%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  title="Celebrats Location"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="contact-details mb-4">
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>138 Lalghati Gufa Mandir Road, Bhopal, Madhya Pradesh, India</span>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <span>celebratsevent@gmail.com</span>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <span>+91 81097 02044</span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="social-icons">
                <a href="https://www.facebook.com/celebrats.in" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-decoration-none">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/celebrats.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-decoration-none">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com/@celebrats735" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-decoration-none">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-decoration-none">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <h3 className="mb-4">Send us a message</h3>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" placeholder="Your Message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
              <p className="mt-3 mb-0 text-center" style={{ opacity: 0.7, fontSize: "14px" }}>
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
