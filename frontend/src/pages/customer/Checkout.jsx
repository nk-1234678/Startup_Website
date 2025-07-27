import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import axios from 'axios';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const products = location.state?.product
    ? [{ ...location.state.product, quantity: location.state.quantity }]
    : cartItems;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentProof: null,
  });

  const UPI_ID = "8207780054@ibl";

  const totalAmount = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentProof: e.target.files[0] });
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID)
      .then(() => {
        alert("UPI ID copied to clipboard!");
      })
      .catch(() => {
        alert("Failed to copy UPI ID.");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('customerToken');
    if (!token) {
      alert('Please login as a customer to place an order');
      return;
    }

    try {
      const payload = new FormData();

      const orderItems = products.map((p) => ({
        product: String(p._id || p.id),
        quantity: p.quantity,
        price: p.price,
        title: p.title,
        thumbnail: p.thumbnail,
        description: p.description,
      }));
      payload.append('items', JSON.stringify(orderItems));

      payload.append(
        'shippingAddress',
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
        })
      );

      payload.append('totalAmount', totalAmount);
      payload.append('paymentProof', formData.paymentProof);

      const response = await axios.post('http://localhost:5000/api/orders', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        alert("Order placed successfully!");
        clearCart();
        localStorage.removeItem('cart');
        navigate('/order-success', {
          state: { orderId: response.data.orderId },
        });
      } else {
        alert(response.data.message || 'Order failed. Try again.');
      }
    } catch (error) {
      console.error("🚨 Checkout Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || 'Something went wrong during checkout');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6" style={{ backgroundColor: '#f9f8f5' }}>
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#2a2a2a' }}>
        Complete Your Purchase
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="md:col-span-1 p-6 rounded-lg shadow-sm border border-gray-200" style={{ backgroundColor: '#ffffff' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#2a2a2a' }}>Order Summary</h2>
          {products.map((item) => (
            <div
              key={item._id || item.id}
              className="flex gap-4 py-4 border-b border-gray-200"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-medium" style={{ color: '#2a2a2a' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#5a5a5a' }}>
                  ₹{item.price} × {item.quantity}
                </p>
                <p className="font-medium" style={{ color: '#2a2a2a' }}>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between font-semibold">
              <span style={{ color: '#2a2a2a' }}>Total</span>
              <span style={{ color: '#2a2a2a' }}>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Shipping & Payment Form */}
        <div className="md:col-span-2 space-y-6">

          {/* Manual UPI Payment Details */}
          <div className="p-6 rounded-lg shadow-sm border border-gray-200" style={{ backgroundColor: '#ffffff' }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#2a2a2a' }}>Payment Details (Pay via UPI)</h2>
            <p className="text-sm mb-4" style={{ color: '#5a5a5a' }}>
              Please send ₹{totalAmount.toFixed(2)} to the following UPI ID using GPay, PhonePe, Paytm, etc.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" style={{ color: '#2a2a2a' }}>
                UPI ID
              </label>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  className="border rounded-md p-4 font-bold text-lg flex-1 text-center"
                  style={{ backgroundColor: '#f4f1e9', color: '#2a2a2a' }}
                >
                  {UPI_ID}
                </div>
                <button
                  type="button"
                  onClick={handleCopyUPI}
                  className="rounded-md px-6 py-3 font-semibold transition text-white"
                  style={{ backgroundColor: '#e8b954' }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#d3a94d'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = '#e8b954'}
                >
                  Copy
                </button>
              </div>
            </div>
            <p className="text-xs" style={{ color: '#5a5a5a' }}>
              After completing the payment, upload a screenshot below.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg shadow-sm border border-gray-200"
            style={{ backgroundColor: '#ffffff' }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#2a2a2a' }}>
              Shipping Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2a2a2a' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2a2a2a' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2a2a2a' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" style={{ color: '#2a2a2a' }}>
                Shipping Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1" style={{ color: '#2a2a2a' }}>
                Payment Screenshot (After UPI Payment)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold"
                style={{
                  fileBackgroundColor: '#e8b954',
                }}
                required
              />
              <p className="mt-1 text-xs" style={{ color: '#5a5a5a' }}>
                Upload a screenshot showing successful payment.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md font-semibold transition text-white"
              style={{ backgroundColor: '#e8b954' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#d3a94d'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#e8b954'}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
