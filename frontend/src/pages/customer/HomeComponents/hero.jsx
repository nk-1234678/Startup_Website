import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      title: "Discover Hidden Gems",
      description: "Explore unique places only locals know about",
      cta: "Start Exploring",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1740&q=80",
       link: "/shop"
    },
    {
      title: "Become a Local Guide",
      description: "Share your knowledge and earn rewards",
      cta: "Join Our Community",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1740&q=80",
      link: "/shop"
    },
    {
      title: "Plan Your Next Adventure",
      description: "Find the perfect hidden spots for your trip",
      cta: "Plan Now",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1740&q=80",
      link: "/shop"
    },
    {
      title: "Experience Authentic Culture",
      description: "Connect with local communities and traditions",
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1740&q=80",
      link: "/shop"
    }
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const goToSlide = (index) => {
    clearInterval(timerRef.current);
    setCurrentSlide(index);

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  return (
    <div className="relative w-full h-screen max-h-[90vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-start"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              transition: { duration: 1.5 },
            }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="max-w-2xl">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : 20,
                    opacity: currentSlide === index ? 1 : 0,
                    transition: { delay: 0.3, duration: 0.7 },
                  }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-xl text-white/90 mb-10 max-w-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : 20,
                    opacity: currentSlide === index ? 1 : 0,
                    transition: { delay: 0.6, duration: 0.7 },
                  }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : 20,
                    opacity: currentSlide === index ? 1 : 0,
                    transition: { delay: 0.9, duration: 0.7 },
                  }}
                > 
                  <button className="px-8 py-4 bg-gradient-to-r from-[#ff6612] to-[#e55b10] text-white font-bold rounded-full hover:from-[#ff7512] hover:to-[#d1510e] transition-all shadow-lg transform hover:-translate-y-1">
                    {slide.cta}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-[#ff6612] scale-125'
                : 'bg-white opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-10 right-10 hidden lg:block z-10">
        <div className="flex space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#ff6612]"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDEwYTEwIDEwIDAgMSAxIDAgMjAgMTAgMTAgMCAwIDEgMC0yMHpNMzAgMzBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9zdmc+')]"></div>
    </div>
  );
};

export default HeroSection;
