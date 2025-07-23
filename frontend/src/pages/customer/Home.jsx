// import { useState } from 'react';
// import { useCart } from '../../context/CartContext';
// import { Link } from 'react-router-dom';
// import Faq12 from './HomeComponents/Faq';
// import { FiGlobe, FiShoppingBag } from 'react-icons/fi';




// const Home = () => {
//   const { addToCart } = useCart();
//   const [featuredProducts] = useState([
//     {
//       _id: "66a2b301dc799600145a0019",
//       title: "Banarasi Silk Saree",
//       category: "Textiles",
//       price: 8999,
//       rating: 4.8,
//       thumbnail: "https://www.kollybollyethnics.com/image/catalog/data/07Oct2022/Banarasi-silk-Saree-in-Purple-colour-4704-1.jpg",
//       origin: { state: "Uttar Pradesh", city: "Varanasi" },
//       discountPercentage: 15,
//       addedDate: "2023-07-03"
//     },
//     {
//       _id: "66a2b301dc799600145a0020",
//       title: "Blue Pottery Jaipur",
//       category: "Pottery",
//       price: 2499,
//       rating: 4.6,
//       thumbnail: "https://pinkcity.com/wp-content/uploads/2013/09/blue-pottery.jpg",
//       origin: { state: "Rajasthan", city: "Jaipur" },
//       discountPercentage: 10,
//       addedDate: "2023-07-03"
//     },
//     {
//       _id: "66a2b301dc799600145a0021",
//       title: "Pashmina Shawl",
//       category: "Textiles",
//       price: 5999,
//       rating: 4.9,
//       thumbnail: "https://cdn.exoticindia.com/images/products/original/shawls-2019/swq88_a02.jpg",
//       origin: { state: "Kashmir", city: "Srinagar" },
//       discountPercentage: 20,
//       addedDate: "2023-07-03"
//     },
//     {
//       _id: "66a2b301dc799600145a0022",
//       title: "Bidriware Hookah",
//       category: "Home Decor",
//       price: 12999,
//       rating: 4.7,
//       thumbnail: "https://i.etsystatic.com/32136760/r/il/cc7f57/5867280923/il_fullxfull.5867280923_novp.jpg",
//       origin: { state: "Telangana", city: "Hyderabad" },
//       discountPercentage: 5,
//       addedDate: "2023-07-03"
//     }
//   ]);
//   const [loading] = useState(false);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
//             <section className="relative bg-white py-2 md:py-32 overflow-hidden">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-12 md:mb-0">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-ink mb-6 leading-tight">
//             Discover Authentic <span className="text-clay-orange">Handcrafted</span> Treasures
//           </h1>
//           <p className="text-lg text-ash-gray mb-8 max-w-lg">
//             Bringing the finest regional craftsmanship directly to your doorstep. 
//             Shop unique artisan products or join our community of skilled creators.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link 
//               to="/customer/shop" 
//               className="bg-clay-orange hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
//             >
//               Shop Now
//             </Link>
//             <Link 
//               to="/customer/artisan" 
//               className="border-2 border-indigo-night text-indigo-night hover:bg-indigo-night hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
//             >
//               Become an Artisan
//             </Link>
//           </div>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           <div className="relative w-full max-w-md">
//             <div className="absolute -top-6 -left-6 w-64 h-64 bg-saffron-gold bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//             <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-malachite-green bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//             <div className="absolute top-0 left-1/2 w-64 h-64 bg-clay-orange bg-opacity-20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//             <div className="relative">
//               <img 
//                 src="https://static.vecteezy.com/system/resources/previews/024/524/037/non_2x/man-craft-pottery-free-png.png" 
//                 alt="Artisan products" 
//                 className="rounded-lg shadow-2xl object-cover w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//         <section className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-charcoal-ink mb-4">
//             Our <span className="text-malachite-green">Story</span>
//           </h2>
//           <div className="w-20 h-1 bg-clay-orange mx-auto mb-6"></div>
//           <p className="text-lg text-ash-gray max-w-3xl mx-auto">
//             Connecting artisans with appreciative customers worldwide
//           </p>
//         </div>
        
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-1/2">
//             <img 
//               src="https://cdni.iconscout.com/illustration/premium/thumb/ceo-businessman-5527610-4617623.png" 
//               alt="Artisans at work" 
//               className="rounded-lg shadow-lg w-full h-auto"
//             />
//           </div>
//           <div className="md:w-1/2">
//             <h3 className="text-2xl font-semibold text-charcoal-ink mb-6">
//               Preserving Heritage Through Commerce
//             </h3>
//             <p className="text-ash-gray mb-6">
//               Founded in 2023, our platform emerged from a simple idea: to create a bridge between 
//               skilled artisans and discerning customers who value authentic, handcrafted goods. 
//               We recognized that many traditional crafts were disappearing due to lack of market access.
//             </p>
//             <p className="text-ash-gray mb-6">
//               Today, we work with over 500 artisans across 30 regions, helping them reach global 
//               audiences while maintaining fair pricing and sustainable practices.
//             </p>
//             <div className="grid grid-cols-2 gap-6 mt-8">
//               <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-saffron-gold">
//                 <h4 className="font-bold text-charcoal-ink mb-2">500+ Artisans</h4>
//                 <p className="text-ash-gray text-sm">Connected to global markets</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-malachite-green">
//                 <h4 className="font-bold text-charcoal-ink mb-2">30 Regions</h4>
//                 <p className="text-ash-gray text-sm">Represented in our collection</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//         <section className="py-20 bg-indigo-night text-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our <span className="text-saffron-gold">Purpose</span>
//           </h2>
//           <div className="w-20 h-1 bg-clay-orange mx-auto mb-6"></div>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             More than a marketplace - we're a movement
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
//             <div className="w-16 h-16 bg-saffron-gold bg-opacity-20 rounded-full flex items-center justify-center mb-6">
//               <svg className="w-8 h-8 text-saffron-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-4">Empower Artisans</h3>
//             <p className="text-gray-300">
//               Provide fair compensation, market access, and business training to traditional craftspeople.
//             </p>
//           </div>
          
//           <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
//             <div className="w-16 h-16 bg-malachite-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
//               <svg className="w-8 h-8 text-malachite-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-4">Preserve Heritage</h3>
//             <p className="text-gray-300">
//               Keep traditional crafts alive by creating sustainable demand for authentic handmade products.
//             </p>
//           </div>
          
//           <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
//             <div className="w-16 h-16 bg-clay-orange bg-opacity-20 rounded-full flex items-center justify-center mb-6">
//               <svg className="w-8 h-8 text-clay-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-4">Connect Cultures</h3>
//             <p className="text-gray-300">
//               Bring regional specialties to global audiences while educating about their cultural significance.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   <section className="my-16">
//       <div className="flex justify-between items-center mb-12">
//         <div className="flex items-center">
//           <h2 className="text-3xl font-bold text-charcoal-ink">Featured Products</h2>
//           <span className="ml-3 bg-clay-orange/10 text-clay-orange text-sm font-medium px-3 py-1 rounded-full">
//             New Arrivals
//           </span>
//         </div>
//         <Link 
//           to="/customer/shop" 
//           className="text-clay-orange hover:text-[#B94700] font-semibold flex items-center transition-colors duration-200 group"
//         >
//           View All 
//           <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
//         </Link>
//       </div>
      
//       {loading ? (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
//               <div className="bg-gray-200 h-48 rounded"></div>
//               <div className="mt-3 bg-gray-200 h-4 rounded w-3/4"></div>
//               <div className="mt-2 bg-gray-200 h-4 rounded w-1/2"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {featuredProducts.map((product) => (
//             <div 
//               key={product._id} 
//               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-clay-orange/30 group"
//             >
//               <Link to={`/customer/product/${product._id}`} className="relative block">
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={product.thumbnail}
//                     alt={product.title}
//                     className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//                 {product.discountPercentage > 10 && (
//                   <div className="absolute top-2 right-2 bg-clay-orange text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
//                     {Math.round(product.discountPercentage)}% OFF
//                   </div>
//                 )}
//               </Link>

//               <div className="p-4">
//                 <Link to={`/customer/product/${product._id}`} className="block">
//                   <h3 className="font-semibold text-charcoal-ink mb-1 line-clamp-1 hover:text-clay-orange transition-colors">
//                     {product.title}
//                   </h3>
//                   <div className="flex items-center text-xs text-ash-gray mb-2">
//                     <FiGlobe className="mr-1" size={12} />
//                     <span>{product.origin.city}, {product.origin.state}</span>
//                   </div>
//                 </Link>

//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="text-lg font-bold text-clay-orange">₹{product.price}</span>
//                     {product.discountPercentage > 0 && (
//                       <span className="ml-2 text-xs text-ash-gray line-through">
//                         ₹{Math.round(product.price / (1 - product.discountPercentage/100))}
//                       </span>
//                     )}
//                   </div>
//                   <div className="flex items-center bg-indigo-night/10 px-2 py-1 rounded-full">
//                     <span className="text-xs text-indigo-night mr-1">⭐</span>
//                     <span className="text-xs font-medium text-indigo-night">
//                       {product.rating}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className="w-full bg-clay-orange hover:bg-[#B94700] text-white py-2 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2"
//                 >
//                   <FiShoppingBag size={16} />
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//       <Faq12/>

//     </div>
//   );
// };

// export default Home;

import { FiArrowRight, FiCheck, FiShoppingBag, FiStar } from 'react-icons/fi';
import { FaHandsHelping, FaLeaf, FaShippingFast } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const HomePage = () => {
  return (
    <div className="bg-[#f9f8f5]">
      {/* Hero Section with Artisan Showcase */}
      <section className="relative bg-gradient-to-r from-[#3a3a3a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Preserve Heritage Through <span className="text-[#e8b954]">Authentic Crafts</span>
            </h1>
            <p className="text-lg text-[#d1d1d1] mb-8 max-w-lg">
              Discover handcrafted treasures from master artisans across India. Each piece tells a story of tradition and skill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#e8b954] hover:bg-[#d8a944] text-[#2a2a2a] font-semibold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2">
                Explore Collections <FiArrowRight />
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Meet Our Artisans
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#e8b954]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#7a9f79]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img 
                  src="https://www.aztradingpost.com/images/etched_navajo_pottery.jpg" 
                  alt="Traditional pottery" 
                  className="rounded-lg shadow-2xl object-cover h-64 w-full transform rotate-2"
                />
                <img 
                  src="https://ml50nxyucbb4.i.optimole.com/5vTnaYk-obwWB2ZN/w:1080/h:1080/q:auto/https://designpgh.com/wp-content/uploads/2020/11/erin-barrnett-sunwoven-handwoven-textiles-12.jpg" 
                  alt="Handwoven textiles" 
                  className="rounded-lg shadow-2xl object-cover h-64 w-full transform -rotate-1 mt-8"
                />
                <img 
                  src="https://i.etsystatic.com/24906723/r/il/5a9462/4674229274/il_fullxfull.4674229274_cffl.jpg" 
                  alt="Artisan jewelry" 
                  className="rounded-lg shadow-2xl object-cover h-64 w-full transform -rotate-2"
                />
                <img 
                  src="https://www.fredzavadilwoodcarving.com/wp-content/uploads/2014/05/Relief-wood-carving-basswood-Fred-Zavadil-813x1024.jpg" 
                  alt="Wood carving" 
                  className="rounded-lg shadow-2xl object-cover h-64 w-full transform rotate-1 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8b954] font-semibold">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mt-2">
              The Artisan Difference
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-3xl text-[#7a9f79]" />,
                title: "Direct from Artisans",
                desc: "We connect you directly with creators, ensuring fair compensation and authentic craftsmanship."
              },
              {
                icon: <FaLeaf className="text-3xl text-[#7a9f79]" />,
                title: "Eco-Friendly Materials",
                desc: "Traditional techniques using sustainable, natural materials for minimal environmental impact."
              },
              {
                icon: <FaShippingFast className="text-3xl text-[#7a9f79]" />,
                title: "Reliable Shipping",
                desc: "Carefully packaged and insured delivery to protect your handmade treasures."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f8f5] p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#7a9f79]/10 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2a2a2a] mb-3">{item.title}</h3>
                <p className="text-[#5a5a5a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-[#f4f1e9]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="text-[#e8b954] font-semibold">HANDCRAFTED SELECTIONS</span>
              <h2 className="text-3xl font-bold text-[#2a2a2a] mt-1">Featured Collections</h2>
            </div>
            <button className="text-[#7a9f79] hover:text-[#5a8f59] font-semibold flex items-center transition-colors duration-200 group">
              View All Collections
              <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Blue Pottery",
                origin: "Jaipur, Rajasthan",
                price: "₹2,499",
                image: "/images/blue-pottery.jpg",
                rating: 4.8
              },
              {
                title: "Pashmina Shawls",
                origin: "Srinagar, Kashmir",
                price: "₹8,999",
                image: "/images/pashmina.jpg",
                rating: 4.9
              },
              {
                title: "Dokra Metalcraft",
                origin: "Bastar, Chhattisgarh",
                price: "₹3,200",
                image: "/images/dokra.jpg",
                rating: 4.7
              },
              {
                title: "Madhubani Paintings",
                origin: "Madhubani, Bihar",
                price: "₹1,799",
                image: "/images/madhubani.jpg",
                rating: 4.6
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#e8b954] text-[#2a2a2a] text-xs font-bold px-2 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-[#2a2a2a]">{product.title}</h3>
                    <div className="flex items-center bg-[#7a9f79]/10 px-2 py-1 rounded-full">
                      <FiStar className="text-[#7a9f79] mr-1" size={14} />
                      <span className="text-xs font-medium text-[#7a9f79]">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#7a9f79] mb-3 flex items-center">
                    <FiMapPin className="mr-1" size={12} />
                    {product.origin}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#2a2a2a]">{product.price}</span>
                    <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white p-2 rounded-full transition-colors duration-200">
                      <FiShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8b954] font-semibold">MEET THE MAKERS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mt-2">
              Artisan Spotlight
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/images/artisan-profile.jpg" 
                  alt="Master artisan at work" 
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute -bottom-5 -left-5 bg-[#e8b954] text-[#2a2a2a] px-4 py-2 rounded-lg shadow-md">
                  <p className="font-bold">40+ Years Experience</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#2a2a2a] mb-4">Master Craftsman Ramesh Patel</h3>
              <p className="text-[#5a5a5a] mb-6">
                From the clay-rich lands of Khurja, Rameshji continues his family's 300-year-old tradition of blue pottery. 
                Each piece is hand-painted using natural pigments and traditional motifs passed down through generations.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Recipient of National Craftsmanship Award",
                  "Trains 15 young artisans annually",
                  "Uses only natural, locally-sourced materials"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FiCheck className="text-[#7a9f79] mt-1 flex-shrink-0" />
                    <span className="text-[#5a5a5a]">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                View Artisan Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="py-16 bg-[#f4f1e9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8b954] font-semibold">TRADITION & CULTURE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mt-2">
              Explore Regional Heritage
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                region: "Kashmir",
                craft: "Pashmina Weaving",
                image: "/images/kashmir.jpg",
                desc: "The delicate art of hand-spinning and weaving pashmina wool"
              },
              {
                region: "Rajasthan",
                craft: "Block Printing",
                image: "/images/rajasthan.jpg",
                desc: "Ancient techniques using hand-carved wooden blocks"
              },
              {
                region: "Karnataka",
                craft: "Sandalwood Carving",
                image: "/images/karnataka.jpg",
                desc: "Intricate carvings from fragrant sandalwood"
              }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-96">
                <img 
                  src={item.image} 
                  alt={item.region} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-[#e8b954] font-medium">{item.region}</span>
                  <h3 className="text-2xl font-bold mt-1">{item.craft}</h3>
                  <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8b954] font-semibold">HAPPY CUSTOMERS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mt-2">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The craftsmanship of my purchased Madhubani painting exceeded expectations. It's now the centerpiece of my living room!",
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5
              },
              {
                quote: "Authentic pashmina that feels luxurious. The artisan even included a handwritten note about its making - such a personal touch!",
                name: "Arjun Patel",
                location: "Delhi",
                rating: 5
              },
              {
                quote: "I appreciate how this platform supports traditional artisans while making their work accessible globally.",
                name: "Neha Kapoor",
                location: "Bangalore",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#f9f8f5] p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-[#e8b954] fill-[#e8b954]' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-[#5a5a5a] italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#2a2a2a]">{testimonial.name}</p>
                  <p className="text-sm text-[#7a9f79]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;