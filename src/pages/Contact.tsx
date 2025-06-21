import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with us for reservations, orders, or any questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                  <div className="space-y-1">
                    <a href="tel:0979573822" className="block text-gray-600 hover:text-orange-600 transition-colors">
                      0979573822
                    </a>
                    <a href="tel:0974231417" className="block text-gray-600 hover:text-orange-600 transition-colors">
                      0974231417
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Call us for orders and reservations</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">Seppelisa Matebeto Lodge</p>
                  <p className="text-sm text-gray-500 mt-1">Easy to find and accessible</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Sunday: 8:00 AM - 10:00 PM</p>
                    <p className="text-sm text-gray-500">Kitchen closes at 9:30 PM</p>
                    <p className="text-sm text-gray-500">Delivery until 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@taasmeat.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                    info@taasmeat.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">For general inquiries and feedback</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
                  <a 
                    href="https://facebook.com/taasmeat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Facebook - TAAS MEAT
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Stay updated with our latest offers</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:0979573822"
                  className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-medium">Call to Order</span>
                </a>
                <a
                  href="https://wa.me/260979573822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition-colors"
                >
                  <Send className="w-6 h-6 mx-auto mb-2" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Find Us on the Map</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3f3f3%3A0x3f3f3f3f3f3f3f3f!2sSeppelisa%20Matebeto%20Lodge!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TAAS MEAT Location"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/dir//Seppelisa+Matebeto+Lodge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;