import { FiArrowRight, FiCheck, FiShoppingBag, FiStar } from 'react-icons/fi';
import { FaHandsHelping, FaLeaf, FaShippingFast } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from './HomeComponents/Faq';
import HeroSection from './HomeComponents/safe';

const HomePage = () => {

  const crafts = [
    {
      region: "Kashmir",
      craft: "Pashmina Weaving",
      image: "https://m.media-amazon.com/images/I/9129xUsSuwL._AC_UL480_FMwebp_QL65_.jpg",
      desc: "The delicate art of hand-spinning and weaving pashmina wool"
    },
    {
      region: "Rajasthan",
      craft: "Block Printing",
      image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa58RxEioYma2Y1D8p0vFyb6PAC7jgqor49flkh",
      desc: "Ancient techniques using hand-carved wooden blocks"
    },
    {
      region: "Karnataka",
      craft: "Sandalwood Carving",
      image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5asPLeXJCa8Y3ucGnwVXJyiNf1IZvtEOHhLq6",
      desc: "Intricate carvings from fragrant sandalwood"
    },
    {
      region: "Gujarat",
      craft: "Bandhani Tie-Dye",
      image: "https://m.media-amazon.com/images/I/612ZzuX73vS._AC_UL480_FMwebp_QL65_.jpg",
      desc: "Traditional tie-dye technique creating vibrant patterns"
    },
    {
      region: "West Bengal",
      craft: "Terracotta Pottery",
      image: "https://m.media-amazon.com/images/I/61sOvwXbf2L._AC_UL480_FMwebp_QL65_.jpg",
      desc: "Clay pottery with intricate designs and natural finishes"
    },
    {
      region: "Tamil Nadu",
      craft: "Bronze Casting",
      image: "https://images.unsplash.com/photo-1614188045506-2f275a78c18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      desc: "Ancient technique of creating bronze idols using lost-wax method"
    },
    {
      region: "Odisha",
      craft: "Pattachitra",
      image: "https://m.media-amazon.com/images/I/91ZrDG17QWL._AC_UL480_FMwebp_QL65_.jpg",
      desc: "Traditional cloth-based scroll painting with mythological themes"
    },
    {
      region: "Punjab",
      craft: "Phulkari Embroidery",
      image: "https://m.media-amazon.com/images/I/81FSoTZvJFL._AC_UL480_FMwebp_QL65_.jpg",
      desc: "Floral embroidery traditionally done on shawls and dupattas"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const visibleCards = 5;
  const totalCards = crafts.length;

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalCards);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused, totalCards]);

  // Calculate which cards to display
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const cardIndex = (currentIndex + i) % totalCards;
      cards.push(crafts[cardIndex]);
    }
    return cards;
  };

  const visibleCrafts = getVisibleCards();
  return (
    <div className="bg-[#f9f8f5]">
      <HeroSection/>
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
                image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5hx3xqbfaWbc93q0mGgPAvf2C5tOSXupDEei4",
                rating: 4.8
              },
              {
                title: "Pashmina Shawls",
                origin: "Srinagar, Kashmir",
                price: "₹8,999",
                image: "https://i.pinimg.com/1200x/d9/17/4e/d9174eddfcb47a5120b04e3150864f99.jpg",
                rating: 4.9
              },
              {
                title: "Dokra Metalcraft",
                origin: "Bastar, Chhattisgarh",
                price: "₹3,200",
                image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5QrTPRvUOlRUZT9cIVCtJ5DkFwWpofvaPK4Qm",
                rating: 4.7
              },
              {
                title: "Madhubani Paintings",
                origin: "Madhubani, Bihar",
                price: "₹1,799",
                image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5a8Lv8uJCa8Y3ucGnwVXJyiNf1IZvtEOHhLq6",
                rating: 4.6
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-105">
                <div className="relative h-64 overflow-hidden flex justify-center items-center">
                  <div className="w-[90%] h-[90%]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full rounded-[8px] transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#e8b954] text-[#2a2a2a] text-xs font-bold px-2 py-1 rounded-full">
                    Best Seller
                  </div>
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
                  src="https://cdn8.dissolve.com/p/D985_58_196/D985_58_196_1200.jpg" 
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
      <div className="bg-[#f4f1e9] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-4">
            Traditional Craftsmanship of India
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 text-lg">
            Explore the rich heritage of India's traditional crafts, each with its own unique story and technique.
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel container */}
          <div 
            ref={carouselRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-700"
          >
            {visibleCrafts.map((item, index) => (
              <div 
                key={`${item.region}-${index}`} 
                className={`
                  bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500
                  ${index === 2 ? 'transform scale-105 z-10 shadow-xl' : 'transform scale-95 z-0'}
                  ${index === 0 || index === 4 ? 'opacity-90' : ''}
                  hover:shadow-2xl hover:-translate-y-2
                `}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.region} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Craft
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-800 bg-amber-100 rounded-full mb-2">
                        {item.region}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900">{item.craft}</h3>
                    </div>
                    <div className="bg-stone-100 hover:bg-amber-500 transition-colors duration-300 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-stone-500 hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="h-px bg-stone-200 my-3 group-hover:bg-amber-300 transition-colors"></div>
                  
                  <p className="text-stone-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {crafts.slice(0, totalCards - visibleCards + 1).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-amber-500 w-8' : 'bg-stone-300'
                }`}
              />
            ))}
          </div>
          </div>
        
        <div className="text-center mt-16">
          <Link to ="/shop">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Explore More Crafts
          </button>
          </Link>
        </div>
      </div>
    </div>

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
      <FAQSection/>
    </div>
  );
};

export default HomePage;