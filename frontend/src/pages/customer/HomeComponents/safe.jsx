import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const cardData = [
  {
    title: "Santorini Secret Beaches",
    description: "Discover untouched beaches away from the crowds with our local guides.",
    guideName: "Maria K.",
    guideRole: "Local Guide",
    iconBg: "#7a9f79",
    bgImage:"https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5B4cRrvkadfVWhUNlQOe9o05Aw1mzvcIiZrMg",
    tag: "Featured Destination",
    badge: "Community Choice",
  },
  {
    title: "Mount Fuji Sunrise",
    description: "Experience the breathtaking sunrise from the peak of Japan’s iconic mountain.",
    guideName: "Hiroshi T.",
    guideRole: "Mountain Guide",
    iconBg: "#9f7a79",
    bgImage:"https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa54PD1HS83ETDbxkG0Oeyt5fu2dBS6CZsmRPJA",
    tag: "Adventure Trip",
    badge: "Top Pick",
  },
  {
    title: "Sahara Desert Stars",
    description: "Join our desert nights tour to witness the Milky Way like never before.",
    guideName: "Amina L.",
    guideRole: "Desert Guide",
    iconBg: "#7a7f9f",
    bgImage:"https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5fGgeT8nHcQ2qMYGbBLtDZT1Cn85dl769oj3X",
    tag: "Night Journey",
    badge: "Editor's Choice",
  },
  {
    title: "Sahara Desert Stars",
    description: "Join our desert nights tour to witness the Milky Way like never before.",
    guideName: "Amina L.",
    guideRole: "Desert Guide",
    iconBg: "#7a7f9f",
    bgImage:"https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5tKEVJxmMqgDQeBhEpwsU68rWj0lKv4b9xHAN",
    tag: "Night Journey",
    badge: "Editor's Choice",
  }
];

  
  // Enhanced slides with more content
  const slides = [
    {
      title: "Discover Hidden Gems",
      subtitle: "Off the beaten path adventures",
      description: "Explore unique places only locals know about. Our community of travel experts has curated the most authentic experiences worldwide.",
      cta: "Start Exploring",
      link:"/shop",
      secondaryCta: "View Destinations",
      image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5bnkMlKtVeg9asBXzKcdUu5Po6FhjmvntTyM2",
      stats: [
        { value: "10K+", label: "Hidden Spots" },
        { value: "95%", label: "Satisfaction" },
        { value: "24/7", label: "Support" }
      ]
    },
    {
      title: "Become a Local Guide",
      subtitle: "Share your expertise",
      description: "Join our global community of travel experts. Share your knowledge, earn rewards, and help travelers discover authentic experiences.",
      cta: "Join Our Community",
      link:"/artisans",
      secondaryCta: "Learn Benefits",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      stats: [
        { value: "5K+", label: "Active Guides" },
        { value: "$1M+", label: "Earned" },
        { value: "50+", label: "Countries" }
      ]
    },
    {
      title: "Plan Your Next Adventure",
      subtitle: "Tailored to your interests",
      description: "Find the perfect hidden spots for your trip. Our AI-powered recommendations match your travel style and preferences.",
      cta: "Plan Now",
      link:"/shop",
      secondaryCta: "Take Quiz",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      stats: [
        { value: "500+", label: "Itineraries" },
        { value: "98%", label: "Accuracy" },
        { value: "3 Min", label: "To Plan" }
      ]
    },
    {
      title: "Experience Authentic Culture",
      subtitle: "Connect with locals",
      description: "Immerse yourself in local communities and traditions. Our experiences are designed to create meaningful connections.",
      cta: "Learn More",
      ink:"/shop",
      secondaryCta: "Read Stories",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      stats: [
        { value: "200+", label: "Communities" },
        { value: "4.9★", label: "Ratings" },
        { value: "100%", label: "Authentic" }
      ]
    }
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  // Handle manual slide change
  const goToSlide = (index) => {
    clearInterval(timerRef.current);
    setCurrentSlide(index);
    
    // Restart the timer
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
  };

  return (
    <div className="relative w-full h-screen max-h-[90vh] overflow-hidden">
      {/* Slides container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 flex items-center`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              transition: { duration: 1.5 }
            }}
            exit={{ opacity: 0 }}
          >
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 "></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: currentSlide === index ? 0 : -50,
                    opacity: currentSlide === index ? 1 : 0,
                    transition: { delay: 0.3, duration: 0.7 }
                  }}
                >
                  <motion.div 
                    className="inline-block bg-[#6A8F69] text-white -text-sm px-4 py-1.5 rounded-full mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: currentSlide === index ? 1 : 0.8,
                      opacity: currentSlide === index ? 1 : 0,
                      transition: { delay: 0.4, duration: 0.5 }
                    }}
                  >
                    {slide.subtitle}
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: currentSlide === index ? 0 : 20,
                      opacity: currentSlide === index ? 1 : 0,
                      transition: { delay: 0.5, duration: 0.7 }
                    }}
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl text-white/90 mb-8 max-w-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: currentSlide === index ? 0 : 20,
                      opacity: currentSlide === index ? 1 : 0,
                      transition: { delay: 0.7, duration: 0.7 }
                    }}
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: currentSlide === index ? 0 : 20,
                      opacity: currentSlide === index ? 1 : 0,
                      transition: { delay: 0.9, duration: 0.7 }
                    }}
                  >
                    <Link to={slide.link}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(255, 102, 18, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#7a9f79] to-[#7a9f79] text-white font-bold rounded-full transition-all shadow-lg"
                    >
                      {slide.cta}
                    </motion.button>
                    </Link>
                    
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-bold rounded-full transition-all"
                    >
                      {slide.secondaryCta}
                    </motion.button>
                  </motion.div>
                  
                  {/* Stats */}
                  <motion.div 
                    className="flex gap-8 mt-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: currentSlide === index ? 0 : 20,
                      opacity: currentSlide === index ? 1 : 0,
                      transition: { delay: 1.1, duration: 0.7 }
                    }}
                  >
                    {slide.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-[#7a9f79]">{stat.value}</div>
                        <div className="text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Right Column - Card */}
          <motion.div
            className="hidden lg:block"
            initial={{ x: 50, opacity: 0 }}
            animate={{ 
              x: 0,
              opacity: 1,
              transition: { delay: 0.8, duration: 0.7 }
            }}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md ml-auto">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: cardData[currentSlide].iconBg }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{cardData[currentSlide].tag}</h3>
                  <p className="text-[#7a9f79]">{cardData[currentSlide].badge}</p>
                </div>
              </div>

              <div
                className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${cardData[currentSlide].bgImage})` }}
              />
              

              <h4 className="text-2xl font-bold text-white mb-2">{cardData[currentSlide].title}</h4>
              <p className="text-white/80 mb-6">{cardData[currentSlide].description}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">{cardData[currentSlide].guideName}</div>
                    <div className="text-[#7a9f79] text-sm">{cardData[currentSlide].guideRole}</div>
                  </div>
                </div>
                
                <button className="flex items-center text-white">
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-[#7a9f79] scale-125' 
                : 'bg-white opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Social proof */}
      {/* <motion.div 
        className="absolute top-8 left-8 z-10 hidden lg:block"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 flex items-center">
          <div className="flex -space-x-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
              </div>
            ))}
          </div>
          <div className="ml-4 text-white">
            <div className="font-bold">Join 50K+ Travelers</div>
            <div className="text-sm opacity-80">Exploring hidden gems</div>
          </div>
        </div>
      </motion.div> */}
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/50 rounded-full">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 right-20 w-8 h-8 rounded-full bg-[#7a9f79] shadow-lg z-0"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-24 w-6 h-6 rounded-full bg-[#2c2d67] shadow-lg z-0"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-white shadow-lg z-0"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default HeroSection;