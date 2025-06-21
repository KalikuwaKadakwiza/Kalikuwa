import React from 'react';
import { MapPin, Phone, Clock, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">TM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">TAAS MEAT</h3>
                <p className="text-sm text-gray-400">Restaurant & Sausage Parlour</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the best Matebeto cuisine and premium sausages. We serve delicious meals cooked with love and passion.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-sm">0979573822</p>
                  <p className="text-sm">0974231417</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <p className="text-sm">info@taasmeat.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <p className="text-sm">Seppelisa Matebeto Lodge</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-orange-500" />
                <div className="text-sm">
                  <p className="font-medium">Monday - Sunday</p>
                  <p className="text-gray-400">8:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <p>Kitchen closes at 9:30 PM</p>
                <p>Delivery available until 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://facebook.com/taasmeat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </a>
              <div className="pt-4">
                <h5 className="font-medium mb-2">Services</h5>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Dine-in Restaurant</li>
                  <li>• Takeaway Orders</li>
                  <li>• Online Delivery</li>
                  <li>• Sausage Manufacturing</li>
                  <li>• Catering Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 TAAS MEAT Restaurant & Sausage Parlour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;