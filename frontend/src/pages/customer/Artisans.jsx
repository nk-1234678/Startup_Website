import { useState } from 'react';
import { Link } from 'react-router-dom';

const Artisans = () => {
  const [filter, setFilter] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
 
  const artisans = [
    {
      id: 1,
      name: "Rani Devi",
      location: "Kutch, Gujarat",
      craft: "Embroidery",
      years: "3 generations",
      bio: "Our family has preserved the intricate Kutchi embroidery techniques passed down from my grandmother.",
      image: "https://f.hellowork.com/obs-static-images/seo/ObsJob/artisan.jpg",
      products: 24,
      featured: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Varanasi, Uttar Pradesh",
      craft: "Weaving",
      years: "40 years",
      bio: "Each Banarasi silk saree I weave carries centuries of tradition in its patterns.",
      image: "https://cdn.shopify.com/s/files/1/0680/2538/5243/files/lathe_480x480.jpg?v=1698700430",
      products: 18,
      featured: false
    },
    {
      id: 3,
      name: "Meena Patel",
      location: "Jaipur, Rajasthan",
      craft: "Block Printing",
      years: "25 years",
      bio: "The natural dyes we use create colors that tell the story of Rajasthan's landscape.",
      image: "https://www.dyslexiauk.co.uk/wp-content/uploads/2023/01/portrait-young-nice-lady-sitting-white-desk-with-open-book-while-writing-notes-paper-isolated-900x550.jpg",
      products: 32,
      featured: true
    },
    {
      id: 4,
      name: "Arjun Das",
      location: "Assam",
      craft: "Pottery",
      years: "15 years",
      bio: "Our terracotta pottery is shaped by the same river clay that nourishes our fields.",
      image: "https://cdn.tatlerasia.com/asiatatler/i/ph/2021/05/14100515-dsc3281_cover_1988x1326.jpg",
      products: 12,
      featured: false
    }
  ];

  const locations = ['All', 'Gujarat', 'Uttar Pradesh', 'Rajasthan', 'Assam'];
  const crafts = ['All', 'Embroidery', 'Weaving', 'Block Printing', 'Pottery'];

  const filteredArtisans = filter === 'all' 
    ? artisans 
    : artisans.filter(artisan => 
        artisan.location.includes(filter) || 
        artisan.craft === filter
      );

  const handleFilter = (type, value) => {
    setFilter(value);
    setActiveFilter(value);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2E3A59] to-[#297B63] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC300] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D35400] rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Meet the <span className="text-[#FFC300]">Master Artisans</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Discover the hands and hearts behind our handmade collections. Each artisan carries generations of tradition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/shop" 
              className="bg-[#D35400] hover:bg-[#BA4A00] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg flex items-center"
            >
              Shop Artisan Goods
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center"
            >
              Our Craftsmanship
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Artisans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1F1F1F] mb-2">Featured Artisans</h2>
              <p className="text-[#6B6B6B] max-w-2xl">Celebrating master craftspeople preserving traditional techniques</p>
            </div>
            <Link to="/artisans" className="text-[#D35400] hover:underline font-medium mt-4 md:mt-0 flex items-center">
              View All Artisans
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {artisans.filter(a => a.featured).map(artisan => (
              <div key={artisan.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
                <div className="relative h-96">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{artisan.name}</h3>
                        <p className="text-white/90">{artisan.location}</p>
                      </div>
                      <span className="bg-[#FFC300] text-[#1F1F1F] text-sm font-bold px-3 py-1 rounded-full">
                        Featured Artisan
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#2E3A59]/10 text-[#2E3A59] text-sm font-medium px-3 py-1 rounded-full mr-3">
                      {artisan.craft}
                    </span>
                    <span className="text-sm text-[#6B6B6B]">
                      {artisan.years} experience
                    </span>
                  </div>
                  
                  <p className="text-[#6B6B6B] mb-6 italic">"{artisan.bio}"</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B6B6B]">
                      {artisan.products} unique creations
                    </span>
                    <Link 
                      to={`/shop?artisan=${artisan.name.replace(' ', '-').toLowerCase()}`}
                      className="bg-[#D35400] hover:bg-[#BA4A00] text-white px-5 py-2 rounded-lg font-medium transition duration-300 flex items-center"
                    >
                      Explore Collection
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Artisans Section */}
        <div className="mb-16">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#1F1F1F] mb-2">Our Artisan Community</h2>
            <p className="text-[#6B6B6B]">Browse all craftspeople by region or specialty</p>
          </div>
          
          {/* Filter Controls */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-[#6B6B6B]/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">Refine Your Search</h3>
                <p className="text-sm text-[#6B6B6B]">Filter by location or craft specialty</p>
              </div>
              
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none">
                  <label htmlFor="location" className="block text-sm text-[#6B6B6B] mb-1">Location</label>
                  <select
                    id="location"
                    onChange={(e) => handleFilter('location', e.target.value)}
                    className="w-full border border-[#6B6B6B]/30 rounded-lg px-4 py-2 text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#D35400]/50"
                    value={filter}
                  >
                    <option value="all">All Locations</option>
                    {locations.map((loc, index) => (
                      <option key={index} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1 md:flex-none">
                  <label htmlFor="craft" className="block text-sm text-[#6B6B6B] mb-1">Craft</label>
                  <select
                    id="craft"
                    onChange={(e) => handleFilter('craft', e.target.value)}
                    className="w-full border border-[#6B6B6B]/30 rounded-lg px-4 py-2 text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#D35400]/50"
                    value={filter}
                  >
                    <option value="all">All Crafts</option>
                    {crafts.map((craft, index) => (
                      <option key={index} value={craft}>{craft}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  onClick={() => {
                    setFilter('all');
                    setActiveFilter('all');
                  }}
                  className="self-end text-sm text-[#D35400] hover:underline px-3 py-2 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Tag */}
          {activeFilter !== 'all' && (
            <div className="mb-6 flex items-center">
              <span className="text-sm text-[#6B6B6B] mr-2">Showing results for:</span>
              <span className="bg-[#FFC300]/20 text-[#1F1F1F] text-sm font-medium px-3 py-1 rounded-full flex items-center">
                {activeFilter}
                <button 
                  onClick={() => {
                    setFilter('all');
                    setActiveFilter('all');
                  }}
                  className="ml-2 text-[#6B6B6B] hover:text-[#D35400]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            </div>
          )}

          {/* Artisans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtisans.map(artisan => (
              <div key={artisan.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-[#6B6B6B]/10">
                <div className="relative h-64">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{artisan.name}</h3>
                    <p className="text-white/90">{artisan.location}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#2E3A59]/10 text-[#2E3A59] text-xs font-medium px-2 py-1 rounded mr-2">
                      {artisan.craft}
                    </span>
                    <span className="text-sm text-[#6B6B6B]">
                      {artisan.years} of experience
                    </span>
                  </div>
                  
                  <p className="text-[#6B6B6B] mb-4 italic">"{artisan.bio}"</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B6B6B]">
                      {artisan.products} handmade pieces
                    </span>
                    <Link 
                      to={`/shop?artisan=${artisan.name.replace(' ', '-').toLowerCase()}`}
                      className="bg-[#D35400] hover:bg-[#BA4A00] text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center"
                    >
                      View Works
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArtisans.length === 0 && (
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 bg-[#6B6B6B]/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#6B6B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1F1F1F] mb-2">No artisans matching your criteria</h3>
              <p className="text-[#6B6B6B] mb-6 max-w-md mx-auto">
                We couldn't find artisans matching your filters. Try adjusting your search or browse all artisans.
              </p>
              <button 
                onClick={() => {
                  setFilter('all');
                  setActiveFilter('all');
                }}
                className="text-[#D35400] hover:underline font-medium flex items-center justify-center mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset all filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#297B63] to-[#2E3A59] text-white rounded-xl p-12 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFC300] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#D35400] rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Support Cultural Preservation</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
              Every purchase directly supports these artisans and helps sustain traditional crafts for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/shop" 
                className="bg-[#D35400] hover:bg-[#BA4A00] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg flex items-center"
              >
                Shop Artisan Collections
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center"
              >
                Learn About Our Mission
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisans;