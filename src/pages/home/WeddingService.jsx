import React from 'react';
import img1 from '../../assets/img/web-img/photos/celebrats_1.jpg';
import img201 from '../../assets/img/web-img/photos/celebrats_201.jpg';
import img21 from '../../assets/img/web-img/photos/celebrats_21.jpg';

const WeddingServices = () => {
	const services = [
		{
			id: 1,
			imgSrc: img1,
			title: "Wedding Planning",
			description: "Complete wedding planning and coordination to bring your dream wedding to life with elegance and precision.",
			price: "₹2,500",
			priceLabel: "/package"
		},
		{
			id: 2,
			imgSrc: img201,
			title: "Event Decoration",
			description: "Transform any venue into a magical space with our exquisite floral arrangements and decorative designs.",
			price: "₹1,200",
			priceLabel: "/setup"
		},
		{
			id: 3,
			imgSrc: img21,
			title: "Birthday Celebrations",
			description: "Memorable birthday parties tailored to your vision, from intimate gatherings to milestone celebrations.",
			price: "₹900",
			priceLabel: "/party"
		},
		{
			id: 4,
			imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
			title: "Corporate Events",
			description: "Professional event planning for corporate gatherings, conferences, and business celebrations.",
			price: "₹1,800",
			priceLabel: "/event"
		}
	];

	return (
		<section className="wed-services-section py-5" id="services-section">
			<div className="container">
				{/* Header */}
				<div className="wed-mobile-header text-center px-3 py-3 mb-5 position-relative">
					<h1 className="wed-mobile-title display-4 fw-bold text-dark mb-3">Our Wedding Services</h1>
					<p className="wed-mobile-subtitle fs-5 text-muted mx-auto" style={{ maxWidth: "550px" }}>
						Creating unforgettable moments for your special day with elegance and care
					</p>
				</div>

				{/* Services Grid */}
				<div className="row g-4">
					{services.map((service) => (
						<div key={service.id} className="col-12 col-md-6 col-lg-3">
							<div className="wed-service-card card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
								<img 
									src={service.imgSrc} 
									className="wed-service-image card-img-top" 
									alt={service.title} 
									style={{ height: "200px", objectFit: "cover" }} 
								/>
								<div className="wed-card-body p-4">
									<h3 className="wed-card-title fs-4 fw-bold text-dark mb-3">{service.title}</h3>
									<p className="wed-card-text text-dark mb-4">{service.description}</p>

									<div className="wed-service-action d-flex justify-content-between align-items-center mt-3">
										<div className="wed-service-price">
											<span className="fs-5 fw-bold text-dark">{service.price}</span>
											<span className="text-muted ms-1">{service.priceLabel}</span>
										</div>
										<a 
											href="#contact-section" 
											className="wed-service-button btn text-white py-2 rounded-3 border-0 fw-medium text-decoration-none"
										>
											Book Now <i className="fas fa-arrow-right ms-1"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default WeddingServices;