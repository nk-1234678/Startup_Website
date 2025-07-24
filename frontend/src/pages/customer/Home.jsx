import { FiArrowRight, FiCheck, FiShoppingBag, FiStar } from 'react-icons/fi';
import { FaHandsHelping, FaLeaf, FaShippingFast } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import FAQSection from './HomeComponents/Faq';
import HeroSection from './HomeComponents/safe';

const HomePage = () => {
  return (
    <div className="bg-[#f9f8f5]">
      <HeroSection/>
      {/* Hero Section with Artisan Showcase */}
      {/* <section className="relative bg-gradient-to-r from-[#3a3a3a] to-[#1a1a1a] text-white py-24 overflow-hidden">
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
      </section> */}

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
                image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5g5IyucYvuHv90TtSWdRw5qgsQrfaho87KM6L",
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
                  <div className="w-[90%] h-[90%]   ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full  transition-transform duration-500 hover:scale-105 rounded-[8px]"
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
                image: "https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5Ui1cMK0SJMO9eBit2WGjpA46oFmfcbl135YK",
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
              }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-96">
                <img 
                  src={item.image} 
                  alt={item.region} 
                  className="w-full h-full  transition-transform duration-500 group-hover:scale-105"
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
      <FAQSection/>
    </div>
  );
};

export default HomePage;