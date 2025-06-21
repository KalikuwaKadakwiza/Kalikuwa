import React from 'react';
import { Award, Users, Clock, Heart, Truck, ChefHat } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Our experienced chefs bring years of culinary expertise to every dish'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every meal is prepared with passion and attention to detail'
    },
    {
      icon: Award,
      title: 'Quality Ingredients',
      description: 'We source only the finest, freshest ingredients from trusted suppliers'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'A welcoming atmosphere perfect for families and friends'
    },
    {
      icon: Truck,
      title: 'Delivery Service',
      description: 'Fast and reliable delivery to your doorstep'
    },
    {
      icon: Clock,
      title: 'Always Fresh',
      description: 'Food prepared fresh daily with no compromises on quality'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About TAAS MEAT
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for authentic Matebeto cuisine, premium meats, and handcrafted sausages
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                TAAS MEAT Restaurant & Sausage Parlour was born from a passion for authentic flavors and quality cuisine. Located at the beautiful Seppelisa Matebeto Lodge, we have been serving our community with pride and dedication.
              </p>
              <p>
                What started as a small family business has grown into a beloved local institution, known for our exceptional meats, fresh seafood, and traditional Matebeto dishes. We believe that great food brings people together and creates lasting memories.
              </p>
              <p>
                Our commitment to quality extends beyond our restaurant. We also manufacture premium sausages for both retail and wholesale customers, using traditional recipes and the finest ingredients available.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Taas Meat.jpeg"
              alt="Our Restaurant"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/Taas Meat Parlou.jpeg"
              alt="Our Kitchen"
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose TAAS MEAT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide our customers with exceptional dining experiences through authentic Matebeto cuisine, premium quality meats, and outstanding service. We strive to preserve traditional flavors while embracing modern culinary techniques.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading restaurant and sausage manufacturer in the region, known for our commitment to quality, authenticity, and customer satisfaction. We aim to expand our reach while maintaining our core values and standards.
            </p>
          </div>
        </div>

        {/* Specialties */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                src="/Fish.jpeg"
                alt="Fresh Fish"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900">Fresh Fish & Seafood</h4>
              <p className="text-sm text-gray-600">Grilled to perfection daily</p>
            </div>
            <div className="text-center">
              <img
                src="/Taas Meat.jpeg"
                alt="Premium Meats"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900">Premium Meats</h4>
              <p className="text-sm text-gray-600">Finest quality cuts</p>
            </div>
            <div className="text-center">
              <img
                src="/Woofles.jpeg"
                alt="Breakfast & Desserts"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900">Breakfast & Desserts</h4>
              <p className="text-sm text-gray-600">Start your day right</p>
            </div>
            <div className="text-center">
              <img
                src="/Taas Meat Parlou.jpeg"
                alt="Handcrafted Sausages"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-gray-900">Handcrafted Sausages</h4>
              <p className="text-sm text-gray-600">Traditional recipes</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our dedicated team of chefs, servers, and staff work together to ensure every visit to TAAS MEAT is memorable. We're passionate about food and committed to providing exceptional service.
          </p>
          <div className="bg-orange-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="mb-6">We're always looking for passionate individuals to join our growing family.</p>
            <a
              href="tel:0979573822"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us for Opportunities
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;