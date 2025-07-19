import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const image1 = "https://i.pinimg.com/736x/5b/95/03/5b9503029c69ea998cd4e7e245523668.jpg";
const image2 = "https://i.pinimg.com/474x/22/f6/39/22f6395150a5501b1f2bdb1f27d43f92.jpg";
const image3 = "https://i.pinimg.com/474x/10/f3/2a/10f32a478c0f00fb30dd25ca2f33e856.jpg";

const Mainfeature = () => {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#ff6612]/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#2c2d67]/20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#38404f] mb-6 font-playfair"
          >
            Our Main Features
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-[#ff6612] to-[#e05b0f] mx-auto mb-8"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl mx-auto px-6 border-l-4 border-[#ff6612]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#38404f] mb-3 font-playfair">
              Empowering Local Artisan Communities
            </h3>
            <p className="text-lg text-[#2c2d67] font-medium mb-4 font-lato">
              Craft Meets Culture, Digitally
            </p>
            <p className="text-[#38404f] leading-relaxed font-lato">
              Our platform connects artisans with global buyers while serving as a guide for 
              tourists seeking authentic, handmade products. Promoting cultural 
              heritage and boosting local economies.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:mt-12"
          >
            <ProjectCard
              title="Explore India's Craftsmanship"
              subtitle="Uncover India's rich craft heritage and take home unique creations."
              image={image1}
              delay={0}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProjectCard
              title="Your Ultimate Artisan Guide"
              subtitle="Get to know talented artisans and their exceptional crafts"
              image={image2}
              delay={300}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:mt-12"
          >
            <ProjectCard
              title="Supporting Local Artisans"
              subtitle="Connect with artisans and preserve India's artistic legacy"
              image={image3}
              delay={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const useInView = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const ProjectCard = ({ title, subtitle, image, delay }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative bg-white shadow-lg rounded-xl overflow-hidden w-full group transition-all duration-700 ease-out transform ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{ transitionDelay:` ${delay}ms` }}
    >
      <div className="relative overflow-hidden h-64">
        {/* Image with zoom effect */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2d67] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-bold text-white mb-1 font-playfair">{title}</h3>
            <p className="text-white/80 text-sm font-lato">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content always visible */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#38404f] mb-1 font-playfair">{title}</h3>
        <p className="text-[#38404f] text-sm mb-4 font-lato">{subtitle}</p>
        
        {/* Arrow Button */}
        <div className="flex justify-end">
          <a
            href="#"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6612] text-white hover:bg-[#e05b0f] transition-colors duration-300"
            aria-label={`Explore ${title}`}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mainfeature;