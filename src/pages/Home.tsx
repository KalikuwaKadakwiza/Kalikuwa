import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Phone, MapPin, Clock, Award, Users, Utensils } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/Taas Meat.jpeg',
      title: 'Premium Quality Meats & Sausages',
      subtitle: 'Freshly prepared with the finest ingredients',
      cta: 'View Our Menu'
    },
    {
      image: '/Taas Food Menu.jpeg',
      title: 'Authentic Matebeto Cuisine',
      subtitle: 'Traditional flavors cooked with love',
      cta: 'Order Now'
    },
    {
      image: '/Fish.jpeg',
      title: 'Fresh Fish & Seafood',
      subtitle: 'Grilled to perfection daily',
      cta: 'Explore Menu'
    },
    {
      image: '/Woofles.jpeg',
      title: 'Delicious Breakfast & Desserts',
      subtitle: 'Start your day right with our specialties',
      cta: 'Order Online'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing food quality! The sausages are the best I\'ve ever tasted. Highly recommend TAAS MEAT!',
      date: '2 days ago'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Excellent service and delicious meals. The fish was perfectly grilled and the atmosphere is wonderful.',
      date: '1 week ago'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      comment: 'Great place for family dining. The staff is friendly and the food is always fresh and tasty.',
      date: '2 weeks ago'
    },
    {
      name: 'David Brown',
      rating: 4,
      comment: 'Love their breakfast menu! The waffles are incredible and the coffee is perfect.',
      date: '3 weeks ago'
    }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Utensils, number: '50+', label: 'Menu Items' },
    { icon: Award, number: '5', label: 'Years Experience' },
    { icon: Star, number: '4.9', label: 'Average Rating' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <Link
                    to="/menu"
                    className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call to Order</h3>
              <p className="text-gray-600 mb-4">Quick phone orders for pickup or delivery</p>
              <a
                href="tel:0979573822"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
              >
                0979573822
              </a>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Dine in at our beautiful restaurant</p>
              <Link
                to="/contact"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                Get Directions
              </Link>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online Order</h3>
              <p className="text-gray-600 mb-4">Order online for delivery or pickup</p>
              <Link
                to="/order"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to TAAS MEAT Restaurant
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At TAAS MEAT, we pride ourselves on serving the finest quality meats, fresh seafood, and authentic Matebeto cuisine. Our restaurant combines traditional cooking methods with modern culinary techniques to create unforgettable dining experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We also manufacture premium sausages for both retail and wholesale customers. Every dish is prepared with love, using only the freshest ingredients sourced from trusted local suppliers.
              </p>
              <Link
                to="/about"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/Taas Meat Parlou.jpeg"
                alt="Restaurant Interior"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/Taas Meat.jpeg"
                alt="Our Specialties"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Read reviews from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.comment}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/TAAS+MEAT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Located at Seppelisa Matebeto Lodge</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3f3f3%3A0x3f3f3f3f3f3f3f3f!2sSeppelisa%20Matebeto%20Lodge!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAAS MEAT Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;