import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Phone, MapPin, Clock, CreditCard, Truck } from 'lucide-react';

const Order = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const menuItems = [
    { id: 1, name: 'Beef Stew with Nshima', price: 30, category: 'Main Dishes', image: '/Taas Food Menu.jpeg' },
    { id: 2, name: 'Quarter Roasted Chicken', price: 45, category: 'Main Dishes', image: '/Taas Meat.jpeg' },
    { id: 3, name: 'Grilled Fish (Whole)', price: 60, category: 'Seafood', image: '/Fish.jpeg' },
    { id: 4, name: 'Hungarian Sausage (Full)', price: 20, category: 'Sausages', image: '/Taas Meat.jpeg' },
    { id: 5, name: 'Beef T-Bone Steak', price: 65, category: 'Grilled', image: '/Taas Meat.jpeg' },
    { id: 6, name: 'Shawarma Platter', price: 85, category: 'Platters', image: '/Taas Meat Parlou.jpeg' },
    { id: 7, name: 'Fresh Waffles', price: 25, category: 'Breakfast', image: '/Woofles.jpeg' },
    { id: 8, name: 'Village Chicken', price: 50, category: 'Main Dishes', image: '/Taas Meat.jpeg' },
    { id: 9, name: 'Chips with Coleslaw', price: 25, category: 'Sides', image: '/Taas Food Menu.jpeg' },
    { id: 10, name: 'Spring Rolls', price: 8, category: 'Appetizers', image: '/Taas Meat Parlou.jpeg' }
  ];

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
      const item = menuItems.find(item => item.name === itemName);
      if (item) {
        total += item.price * count;
      }
    });
    return total;
  };

  const deliveryFee = orderType === 'delivery' ? 15 : 0;
  const finalTotal = getTotalPrice() + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (getTotalItems() === 0) {
      alert('Please add items to your cart before placing an order.');
      return;
    }

    // Create order summary
    const orderItems = Object.entries(cart)
      .filter(([_, count]) => count > 0)
      .map(([itemName, count]) => {
        const item = menuItems.find(item => item.name === itemName);
        return `${itemName} x${count} - K${item ? item.price * count : 0}`;
      })
      .join('\n');

    const orderSummary = `
TAAS MEAT ORDER

Customer: ${customerInfo.name}
Phone: ${customerInfo.phone}
Email: ${customerInfo.email}
${orderType === 'delivery' ? `Address: ${customerInfo.address}` : 'Order Type: Pickup'}

ORDER ITEMS:
${orderItems}

Subtotal: K${getTotalPrice()}
${orderType === 'delivery' ? `Delivery Fee: K${deliveryFee}` : ''}
TOTAL: K${finalTotal}

${customerInfo.notes ? `Special Notes: ${customerInfo.notes}` : ''}
    `;

    // Send order via WhatsApp
    const whatsappMessage = encodeURIComponent(orderSummary);
    const whatsappUrl = `https://wa.me/260979573822?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Also allow phone call option
    if (confirm('Order sent via WhatsApp! Would you also like to call us to confirm your order?')) {
      window.location.href = 'tel:0976334224';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Online</h1>
          <p className="text-lg text-gray-600">Choose your favorite dishes and place your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <span className="text-xl font-bold text-orange-600">K{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                    
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
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary & Checkout */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Order</h2>
              
              {getTotalItems() === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(cart).filter(([_, count]) => count > 0).map(([itemName, count]) => {
                      const item = menuItems.find(item => item.name === itemName);
                      return (
                        <div key={itemName} className="flex justify-between items-center">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{itemName}</p>
                            <p className="text-xs text-gray-500">K{item?.price} x {count}</p>
                          </div>
                          <span className="font-medium">K{item ? item.price * count : 0}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Order Type Selection */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Order Type</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setOrderType('delivery')}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          orderType === 'delivery'
                            ? 'border-orange-600 bg-orange-50 text-orange-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Truck className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-sm font-medium">Delivery</span>
                      </button>
                      <button
                        onClick={() => setOrderType('pickup')}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          orderType === 'pickup'
                            ? 'border-orange-600 bg-orange-50 text-orange-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <MapPin className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-sm font-medium">Pickup</span>
                      </button>
                    </div>
                  </div>

                  {/* Customer Information Form */}
                  <form onSubmit={handleSubmitOrder} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={customerInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {orderType === 'delivery' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Delivery Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          placeholder="Your delivery address"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={customerInfo.notes}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                        placeholder="Any special requests or notes..."
                      />
                    </div>

                    {/* Order Total */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>K{getTotalPrice()}</span>
                      </div>
                      {orderType === 'delivery' && (
                        <div className="flex justify-between">
                          <span>Delivery Fee:</span>
                          <span>K{deliveryFee}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>K{finalTotal}</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Place Order via WhatsApp</span>
                    </button>

                    {/* Alternative Contact Methods */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <a
                        href="tel:0979573822"
                        className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Call</span>
                      </a>
                      <a
                        href="tel:0974231417"
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Call Alt</span>
                      </a>
                    </div>
                  </form>
                </>
              )}

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">Delivery Time</span>
                </div>
                <p className="text-sm text-gray-600">
                  {orderType === 'delivery' ? '30-45 minutes' : '15-20 minutes for pickup'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;