// import { useParams, useNavigate } from 'react-router-dom';
// import { useCart } from '../../context/CartContext';
// import { useEffect, useState } from 'react';
// import {regionalProducts} from './regionalProductsData.js'; // adjust path if needed

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [selectedColor, setSelectedColor] = useState("Red");

//   useEffect(() => {
//     const found = regionalProducts.find(p => String(p.id) === id || String(p._id) === id);
//     setProduct(found || null);
//   }, [id]);

//   const handleAddToCart = () => {
//      addToCart({
//       ...product,
//       id: product._id, // Ensure cart context works
//       selectedSize,
//       selectedColor,
//     });
//     navigate("/cart");
//   };

//   const handleBuyNow = () => {
//     navigate('/checkout', {
//       state: {
//         product,
//         quantity: 1,
//       },
//     });
//   };

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
//         Product not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
//       {/* Product Image */}
//       <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="w-full h-[400px] object-cover"
//         />
//       </div>

//       {/* Product Details */}
//       <div>
//         <h1 className="text-3xl font-bold text-[#2B2B2B] mb-4">{product.title}</h1>
//         <p className="text-lg text-[#5a5a5a] mb-4">₹{product.price}</p>
//         <p className="text-gray-600 mb-6">{product.description}</p>

//         {/* Sizes */}
//         <div className="mb-4">
//           <h3 className="font-semibold text-sm text-gray-700 mb-2">Available Sizes:</h3>
//           <div className="flex gap-2">
//            {['S', 'M', 'L', 'XL'].map(size => (
//   <span
//     key={size}
//     onClick={() => setSelectedSize(size)}
//     className={`border px-3 py-1 rounded-md text-sm cursor-pointer ${
//       selectedSize === size
//         ? 'bg-gray-800 text-white'
//         : 'text-gray-700 hover:bg-gray-100'
//     }`}
//   >
//     {size}
//   </span>
// ))}
//           </div>
//         </div>

//         {/* Colors */}
//         <div className="mb-6">
//           <h3 className="font-semibold text-sm text-gray-700 mb-2">Available Colors:</h3>
//           <div className="flex gap-2">
//             {[
//   { name: 'Orange', code: '#E86C3B' },
//   { name: 'Green', code: '#7a9f79' },
//   { name: 'Black', code: '#000' },
//   { name: 'Yellow', code: '#e8b954' },
// ].map(({ name, code }) => (
//   <span
//     key={name}
//     onClick={() => setSelectedColor(name)}
//     className={`w-6 h-6 rounded-full border cursor-pointer ${
//       selectedColor === name ? 'ring-2 ring-gray-800' : ''
//     }`}
//     style={{ backgroundColor: code }}
//   />
// ))}

//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-4">
//           <button
//             onClick={handleBuyNow}
//             className="bg-[#E86C3B] hover:bg-[#d45a2a] text-white px-6 py-2 rounded-md font-medium transition shadow"
//           >
//             Buy Now
//           </button>

//           <button
//             onClick={handleAddToCart}
//             className="bg-[#e8b954] hover:bg-[#d8a944] text-[#2a2a2a] px-6 py-2 rounded-md font-medium transition shadow"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import {regionalProducts} from './regionalProductsData.js';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Orange");

  useEffect(() => {
  const found = regionalProducts.find(p => {
    // Compare both as strings to ensure type consistency
    return String(p._id) === String(id);
  });
  setProduct(found || null);
}, [id]);

  const handleAddToCart = () => {
     addToCart({
      ...product,
      id: product._id,
      selectedSize,
      selectedColor,
    });
    navigate("/cart");
  };

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        product,
        quantity: 1,
      },
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f9f8f5] p-8">
      <div className="max-w-7xl mx-auto bg-[#f4f1e9] rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="bg-white p-8 flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-h-[600px] object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-[#2a2a2a] mb-4">{product.title}</h1>
            
            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl text-[#5a5a5a] font-medium mb-2">₹{product.price}</p>
              <p className="text-[#5a5a5a] mb-4">{product.description}</p>
              
              <div className="flex items-center text-[#7a9f79] mb-2">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Handcrafted with traditional techniques</span>
              </div>
              
              <div className="flex items-center text-[#7a9f79]">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Made with love by master artisans from {product.region || 'India'}</span>
              </div>
            </div>

            {/* Sizes Section */}
            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-[#2a2a2a] mb-3">Available Sizes:</h3>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <span
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 rounded-md cursor-pointer transition-all ${
                      selectedSize === size
                        ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                        : 'text-[#5a5a5a] hover:bg-[#f4f1e9] border-[#5a5a5a]'
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#5a5a5a] mt-2">Select your preferred size for perfect fit</p>
            </div>

            {/* Colors Section */}
            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-[#2a2a2a] mb-3">Available Colors:</h3>
              <div className="flex gap-3 items-center">
                {[
                  { name: 'Orange', code: '#E86C3B' },
                  { name: 'Green', code: '#7a9f79' },
                  { name: 'Black', code: '#000' },
                  { name: 'Yellow', code: '#e8b954' },
                ].map(({ name, code }) => (
                  <div key={name} className="flex flex-col items-center">
                    <span
                      onClick={() => setSelectedColor(name)}
                      className={`w-10 h-10 rounded-full border-2 cursor-pointer transition-all ${
                        selectedColor === name ? 'ring-2 ring-[#2a2a2a]' : 'hover:ring-1 hover:ring-[#5a5a5a]'
                      }`}
                      style={{ backgroundColor: code }}
                    />
                    <span className="text-xs mt-1 text-[#5a5a5a]">{name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#5a5a5a] mt-2">Vibrant colors that celebrate Indian heritage</p>
            </div>

            {/* Artisan Story */}
            <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2">Artisan's Story</h3>
              <p className="text-[#5a5a5a]">
                This piece is lovingly crafted by {product.artist || 'master artisans'} from {product.region || 'India'}, 
                using techniques passed down through generations. Each purchase supports traditional craftsmanship 
                and helps preserve India's rich cultural heritage.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleBuyNow}
                className="bg-[#E86C3B] hover:bg-[#d45a2a] text-white px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg flex-1 min-w-[200px] flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Buy Now
              </button>

              <button
                onClick={handleAddToCart}
                className="bg-[#e8b954] hover:bg-[#d8a944] text-[#2a2a2a] px-8 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg flex-1 min-w-[200px] flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
