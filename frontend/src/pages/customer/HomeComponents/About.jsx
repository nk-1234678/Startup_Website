import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae" 
                alt="Artisan working"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#2c2d67] text-white p-6 rounded-xl shadow-lg w-2/3">
                <h3 className="text-xl font-bold mb-2">Since 2010</h3>
                <p className="text-sm">Preserving traditional crafts</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#38404f] mb-6">
              Our <span className="text-[#ff6612]">Mission</span>
            </h2>
            <div className="border-l-4 border-[#ff6612] pl-6 mb-8">
              <p className="text-lg text-[#2c2d67] font-medium mb-2">
                Connecting artisans with global markets
              </p>
              <p className="text-[#38404f]">
                We bridge the gap between traditional craftspeople and modern consumers while preserving cultural heritage.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Authentic Crafts",
                  description: "Direct from artisan workshops to your home",
                  color: "bg-[#ff6612]/10 text-[#ff6612]"
                },
                {
                  title: "Fair Trade",
                  description: "Ensuring artisans receive fair compensation",
                  color: "bg-[#2c2d67]/10 text-[#2c2d67]"
                },
                {
                  title: "Cultural Preservation",
                  description: "Keeping ancient techniques alive",
                  color: "bg-[#ff6612]/10 text-[#ff6612]"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#38404f]">{item.title}</h3>
                    <p className="text-[#38404f]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;