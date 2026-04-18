import React from 'react';
import img197 from '../../assets/img/web-img/photos/celebrats_197.jpg';
import img203 from '../../assets/img/web-img/photos/celebrats_203.jpg';
import img204 from '../../assets/img/web-img/photos/celebrats_204.jpg';
import img205 from '../../assets/img/web-img/photos/celebrats_205.jpg';
import img175 from '../../assets/img/web-img/photos/celebrats_175.jpg';
import img171 from '../../assets/img/web-img/photos/celebrats_171.jpg';
import img199 from '../../assets/img/web-img/photos/celebrats_199.jpg';
import img163 from '../../assets/img/web-img/photos/celebrats_163.jpg';


const WeddingGallery = () => {
  const galleryImages = [
    {
      id: 1,
      imgSrc: img197,
      title: "Haldi",
      description: "A magical moment as newlyweds share their first kiss as husband and wife"
    },
    {
      id: 2,
      imgSrc: img203,
      title: "Eternal Promise",
      description: "Symbols of everlasting love and commitment"
    },
    {
      id: 3,
      imgSrc: img204,
      title: "Bridal Elegance",
      description: "A beautiful bouquet complementing the bride's radiant beauty"
    },
    {
      id: 4,
      imgSrc: img205,
      title: "Sacred Vows",
      description: "Exchanging vows in an intimate ceremony surrounded by loved ones"
    },
    {
      id: 5,
      imgSrc: img175,
      title: "Celebration Setup",
      description: "Elegant reception decor creating a magical atmosphere"
    },
    {
      id: 6,
      imgSrc: img171,
      title: "The First Dance",
      description: "Newlyweds sharing their first dance as a married couple"
    },
    {
      id: 7,
      imgSrc: img199,
      title: "Sweet Celebration",
      description: "A beautifully crafted wedding cake as the centerpiece"
    },
    {
      id: 8,
      imgSrc: img163,
      title: "Getting Ready",
      description: "The bride preparing for her special day with loved ones"
    }
  ];

  return (
    <section className="wedding-gallery-section" id="gallery-section">
      <div className="wedding-decoration decoration-1">❦</div>
      <div className="wedding-decoration decoration-2">❦</div>

      <div className="wedding-gallery-container">
        <div className="wedding-gallery-header">
          <h1 className="wedding-gallery-title">Wedding Moments</h1>
          <p className="wedding-gallery-subtitle">
            A collection of cherished memories from beautiful wedding celebrations. Each image tells a unique story of love, joy, and commitment.
          </p>
        </div>

        <div className="wedding-gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="wedding-gallery-item">
              <img src={image.imgSrc} alt={image.title} className="wedding-gallery-image" />
              <div className="wedding-gallery-info">
                <h3 className="wedding-gallery-name">{image.title}</h3>
                <p className="wedding-gallery-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;