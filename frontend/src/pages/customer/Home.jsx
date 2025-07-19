import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import HeroSection from './HomeComponents/hero';
import AboutSection from './HomeComponents/About';
import Mainfeature from './HomeComponents/MainFeature';
import Faq12 from './HomeComponents/Faq';
import { FiGlobe, FiShoppingBag } from 'react-icons/fi';




const Home = () => {
  const { addToCart } = useCart();
  const [featuredProducts] = useState([
    {
      _id: "66a2b301dc799600145a0019",
      title: "Banarasi Silk Saree",
      category: "Textiles",
      price: 8999,
      rating: 4.8,
      thumbnail: "https://www.kollybollyethnics.com/image/catalog/data/07Oct2022/Banarasi-silk-Saree-in-Purple-colour-4704-1.jpg",
      origin: { state: "Uttar Pradesh", city: "Varanasi" },
      discountPercentage: 15,
      addedDate: "2023-07-03"
    },
    {
      _id: "66a2b301dc799600145a0020",
      title: "Blue Pottery Jaipur",
      category: "Pottery",
      price: 2499,
      rating: 4.6,
      thumbnail: "https://pinkcity.com/wp-content/uploads/2013/09/blue-pottery.jpg",
      origin: { state: "Rajasthan", city: "Jaipur" },
      discountPercentage: 10,
      addedDate: "2023-07-03"
    },
    {
      _id: "66a2b301dc799600145a0021",
      title: "Pashmina Shawl",
      category: "Textiles",
      price: 5999,
      rating: 4.9,
      thumbnail: "https://cdn.exoticindia.com/images/products/original/shawls-2019/swq88_a02.jpg",
      origin: { state: "Kashmir", city: "Srinagar" },
      discountPercentage: 20,
      addedDate: "2023-07-03"
    },
    {
      _id: "66a2b301dc799600145a0022",
      title: "Bidriware Hookah",
      category: "Home Decor",
      price: 12999,
      rating: 4.7,
      thumbnail: "https://i.etsystatic.com/32136760/r/il/cc7f57/5867280923/il_fullxfull.5867280923_novp.jpg",
      origin: { state: "Telangana", city: "Hyderabad" },
      discountPercentage: 5,
      addedDate: "2023-07-03"
    }
  ]);
  const [loading] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <HeroSection/>
        <AboutSection/>
        <Mainfeature/>
     <section className="my-16">
  <div className="flex justify-between items-center mb-12">
    <div className="flex items-center">
      <h2 className="text-3xl font-bold text-[#38404f]">Featured Products</h2>
      <span className="ml-3 bg-[#ff6612]/10 text-[#ff6612] text-sm font-medium px-3 py-1 rounded-full">
        New Arrivals
      </span>
    </div>
    <Link 
      to="/shop" 
      className="text-[#ff6612] hover:text-[#e55b0f] font-semibold flex items-center transition-colors duration-200 group"
    >
      View All 
      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
    </Link>
  </div>
  
  {loading ? (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
          <div className="bg-[#e0e0e0] h-48 rounded"></div>
          <div className="mt-3 bg-[#e0e0e0] h-4 rounded w-3/4"></div>
          <div className="mt-2 bg-[#e0e0e0] h-4 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <div 
          key={product._id} 
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#e0e0e0] hover:border-[#ff6612]/30 group"
        >
          <Link to={`/product/${product._id}`} className="relative block">
            <div className="relative overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {product.discountPercentage > 10 && (
              <div className="absolute top-2 right-2 bg-[#ff6612] text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                {Math.round(product.discountPercentage)}% OFF
              </div>
            )}
          </Link>

          <div className="p-4">
            <Link to={`/product/${product._id}`} className="block">
              <h3 className="font-semibold text-[#38404f] mb-1 line-clamp-1 hover:text-[#ff6612] transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center text-xs text-[#5A5A5A] mb-2">
                <FiGlobe className="mr-1" size={12} />
                <span>{product.origin.city}, {product.origin.state}</span>
              </div>
            </Link>

            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-lg font-bold text-[#ff6612]">₹{product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="ml-2 text-xs text-[#5A5A5A] line-through">
                    ₹{Math.round(product.price / (1 - product.discountPercentage/100))}
                  </span>
                )}
              </div>
              <div className="flex items-center bg-[#2c2d67]/10 px-2 py-1 rounded-full">
                <span className="text-xs text-[#2c2d67] mr-1">⭐</span>
                <span className="text-xs font-medium text-[#2c2d67]">
                  {product.rating}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-[#ff6612] hover:bg-[#e55b0f] text-white py-2 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2"
            >
              <FiShoppingBag size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</section>
      <Faq12/>

    </div>
  );
};

export default Home;