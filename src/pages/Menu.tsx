import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [activeCategory, setActiveCategory] = useState('nshima');

  const menuCategories = {
    nshima: {
      title: 'NSHIMA',
      items: [
        { name: 'Beef Stew', price: 30, description: 'Traditional beef stew with vegetables' },
        { name: 'Quarter Roasted Chicken', price: 45, description: 'Perfectly seasoned roasted chicken' },
        { name: 'One Whole Fish', price: 60, description: 'Fresh fish grilled to perfection' },
        { name: 'Half Fish', price: 30, description: 'Half portion of grilled fish' },
        { name: 'Plain Nshima', price: 10, description: 'Traditional maize meal staple' },
        { name: 'Full Hungarian Sausage', price: 20, description: 'Premium Hungarian-style sausage' },
        { name: 'Half Beef Sausage', price: 30, description: 'Half portion of beef sausage' },
        { name: 'Full Beef Sausage', price: 60, description: 'Full portion of premium beef sausage' },
        { name: 'Plain Rice', price: 25, description: 'Steamed white rice' },
        { name: 'Soup Ya Mbuzi', price: 30, description: 'Traditional goat soup' }
      ]
    },
    grilled: {
      title: 'GRILLED SPECIALTIES',
      items: [
        { name: 'Beef T/Bone', price: 65, description: 'Premium T-bone steak grilled to order' },
        { name: 'Goat Meat Cooked in Foil', price: 70, description: 'Tender goat meat slow-cooked in foil' },
        { name: 'Fried Home Cut Chicken', price: 30, description: 'Home-style fried chicken pieces' },
        { name: 'Kapeta', price: 20, description: 'Traditional grilled fish' },
        { name: 'Ofal', price: 20, description: 'Grilled organ meat specialty' },
        { name: 'Trotters', price: 20, description: 'Grilled pig trotters' },
        { name: 'Beans', price: 15, description: 'Seasoned beans side dish' }
      ]
    },
    seafood: {
      title: 'SEAFOOD',
      items: [
        { name: 'Dry Fish', price: 60, description: 'Traditional dried fish preparation' },
        { name: 'Pork Chops', price: 60, description: 'Grilled pork chops' },
        { name: 'Set Chicken', price: 25, description: 'Chicken set meal' },
        { name: 'Roasted Fish', price: 65, description: 'Whole roasted fish with herbs' },
        { name: 'Ocra Fish', price: 75, description: 'Fish cooked with okra vegetables' },
        { name: 'Fresh Fish Cooked in Foil', price: 75, description: 'Fresh fish steamed in foil with spices' },
        { name: 'Game Meat', price: 80, description: 'Wild game meat specialty' }
      ]
    },
    platters: {
      title: 'PLATTERS',
      items: [
        { name: 'Shawarma Platter', price: 85, description: 'Mixed shawarma with sides' },
        { name: 'Small Platter', price: 650, description: 'Small mixed platter for 2-3 people' },
        { name: 'Medium Platter', price: 350, description: 'Medium mixed platter for 4-5 people' },
        { name: 'Samosa', price: 6, description: 'Crispy fried samosa' },
        { name: 'Spring Rolls', price: 8, description: 'Fresh spring rolls' },
        { name: 'Mini Sausage Rolls', price: 8, description: 'Bite-sized sausage rolls' },
        { name: 'Meat Pies', price: 30, description: 'Homemade meat pies' }
      ]
    },
    sides: {
      title: 'SIDES & EXTRAS',
      items: [
        { name: 'Liver', price: 30, description: 'Grilled liver with onions' },
        { name: 'Boiled Fish Half', price: 30, description: 'Half portion boiled fish' },
        { name: 'Boiled Fish Full', price: 60, description: 'Full portion boiled fish' },
        { name: 'Roasted Fish', price: 70, description: 'Roasted fish with spices' },
        { name: 'Village Chicken', price: 50, description: 'Free-range village chicken' },
        { name: 'Plain Chips', price: 15, description: 'French fries' },
        { name: 'Chips with Coleslaw Salads', price: 25, description: 'Chips with fresh coleslaw' },
        { name: 'Chicken Piece & Chips', price: 55, description: 'Chicken with chips combo' }
      ]
    },
    beverages: {
      title: 'BEVERAGES',
      items: [
        { name: 'Disposable Drink', price: 15, description: 'Soft drinks in disposable cups' },
        { name: 'Water 500ml', price: 5, description: 'Bottled water' },
        { name: 'Disposable Plate', price: 2, description: 'Disposable plate for takeaway' }
      ]
    }
  };

  const addToCart = (itemName: string) => {
    setCart(prev => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1
    }));
  };

  const removeFromCart = (itemName: string) => {
    setCart(prev => ({
      ...prev,
      [itemName]: Math.max((prev[itemName] || 0) - 1, 0)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    let total = 0;
    Object.entries(cart).forEach(([itemName, count]) => {
      Object.values(menuCategories).forEach(category => {
        const item = category.items.find(item => item.name === itemName);
        if (item) {
          total += item.price * count;
        }
      });
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600">Delicious meals cooked with love and the finest ingredients</p>
        </div>

        {/* Menu Image */}
        <div className="mb-12">
          <img
            src="/Taas Food Menu.jpeg"
            alt="TAAS Food Menu"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-xl font-bold text-orange-600">K{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    disabled={!cart[item.name]}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium min-w-[20px] text-center">
                    {cart[item.name] || 0}
                  </span>
                  <button
                    onClick={() => addToCart(item.name)}
                    className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={() => addToCart(item.name)}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              {Object.entries(cart).filter(([_, count]) => count > 0).map(([itemName, count]) => {
                const item = Object.values(menuCategories)
                  .flatMap(category => category.items)
                  .find(item => item.name === itemName);
                return (
                  <div key={itemName} className="flex justify-between text-sm">
                    <span>{itemName} x{count}</span>
                    <span>K{item ? item.price * count : 0}</span>
                  </div>
                );
              })}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Total: K{getTotalPrice()}</span>
                <span>{getTotalItems()} items</span>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;