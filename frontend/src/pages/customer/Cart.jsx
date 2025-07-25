import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-[#f4f1e9]">
        <h1 className="text-2xl font-bold text-[#2a2a2a] mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#5a5a5a] mb-4">Your cart is empty.</p>
            <a href="/shop" className="text-[#7a9f79] hover:underline font-medium">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="grid gap-6">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 bg-[#f9f8f5] p-4 rounded-lg border border-[#f4f1e9]"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full sm:w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-[#2a2a2a]">{item.title}</h3>
                    <p className="text-sm text-[#5a5a5a] mb-2">₹{item.price}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-[#f4f1e9] rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-lg hover:bg-[#f4f1e9] transition"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 bg-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-lg hover:bg-[#f4f1e9] transition"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-[#7a9f79] hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="font-medium text-[#2a2a2a]">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#f4f1e9] pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-[#5a5a5a]">
                    Total ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
                  </p>
                  <p className="text-xl font-bold text-[#2a2a2a]">₹{total.toFixed(2)}</p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={clearCart}
                    className="text-[#5a5a5a] hover:text-[#7a9f79] font-medium"
                  >
                    Clear Cart
                  </button>
                  <button 
                    onClick={handleCheckout}
                    className="bg-[#e8b954] hover:bg-[#d8a944] text-[#2a2a2a] px-6 py-3 rounded-lg font-medium transition shadow-md"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;