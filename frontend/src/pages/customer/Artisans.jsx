import { useState } from 'react';
import { Link } from 'react-router-dom';

const Artisans = () => {
  const [filter, setFilter] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');


  const techniques = [
  {
    title: 'Embroidery',
    image: 'https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5e5ZbvM4L6Dj7Cb5zVZdYfIextvOWFTHm1gPl',
  },
  {
    title: 'Weaving',
    image: 'https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa50z1fHsZru6kfQcodbOhl9UjgTHnPvmLsytIS',
  },
  {
    title: 'Block Printing',
    image: 'https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5kOEirdszFCxgU6TOlnYvmIG279Soyhqt0rDk',
  },
  {
    title: 'Pottery',
    image: 'https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa52miEcNDbekROaNPIvUGCZmopMSyLK8WtdbDg',
  },
];
 
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
    <div className="min-h-screen bg-[#f9f8f5]">
      {/* Compact Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Meet Our <span className="text-[#e8b954]">Master Artisans</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Discover the hands and hearts behind our handmade collections
          </p>
        </div>
      </div>

      {/* Featured Artisans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#2a2a2a] mb-2">Featured Artisans</h2>
              <p className="text-[#5a5a5a] max-w-2xl">Celebrating master craftspeople preserving traditional techniques</p>
            </div>
            <Link to="/artisans" className="text-[#7a9f79] hover:underline font-medium mt-4 md:mt-0 flex items-center">
              View All Artisans
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {artisans.filter(a => a.featured).map(artisan => (
              <div key={artisan.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group border border-[#f4f1e9]">
                <div className="relative h-80">
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
                      <span className="bg-[#e8b954] text-[#2a2a2a] text-sm font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#7a9f79]/10 text-[#7a9f79] text-sm font-medium px-3 py-1 rounded-full mr-3">
                      {artisan.craft}
                    </span>
                    <span className="text-sm text-[#5a5a5a]">
                      {artisan.years} experience
                    </span>
                  </div>
                  
                  <p className="text-[#5a5a5a] mb-6 italic">"{artisan.bio}"</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#5a5a5a]">
                      {artisan.products} unique creations
                    </span>
                    <Link 
                      to={`/shop?artisan=${artisan.name.replace(' ', '-').toLowerCase()}`}
                      className="bg-[#7a9f79] hover:bg-[#6a8f69] text-white px-5 py-2 rounded-lg font-medium transition duration-300 flex items-center"
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

        {/* Artisan Stories Section */}
        <div className="mb-16 bg-[#f4f1e9] p-12 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2a2a2a] mb-4">Preserving Heritage Through Craft</h2>
            <p className="text-[#5a5a5a] max-w-3xl mx-auto">
              Each artisan's story is a thread in the rich tapestry of our cultural heritage. 
              Discover how traditional techniques are kept alive through their dedication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#e8b954]/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e8b954]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2a2a2a] mb-2">Generational Knowledge</h3>
              <p className="text-[#5a5a5a]">
                Techniques passed down through families for centuries, refined with each generation
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#7a9f79]/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7a9f79]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2a2a2a] mb-2">Sustainable Practices</h3>
              <p className="text-[#5a5a5a]">
                Natural materials and eco-friendly processes at the heart of traditional craftsmanship
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#3a3a3a]/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#3a3a3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2a2a2a] mb-2">Community Impact</h3>
              <p className="text-[#5a5a5a]">
                Each purchase supports entire artisan communities and preserves cultural heritage
              </p>
            </div>
          </div>
        </div>

        {/* All Artisans Section */}
        <div className="mb-16">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#2a2a2a] mb-2">Our Artisan Community</h2>
            <p className="text-[#5a5a5a]">Browse all craftspeople by region or specialty</p>
          </div>
          
          {/* Filter Controls */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-[#f4f1e9]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#2a2a2a] mb-2">Refine Your Search</h3>
                <p className="text-sm text-[#5a5a5a]">Filter by location or craft specialty</p>
              </div>
              
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none">
                  <label htmlFor="location" className="block text-sm text-[#5a5a5a] mb-1">Location</label>
                  <select
                    id="location"
                    onChange={(e) => handleFilter('location', e.target.value)}
                    className="w-full border border-[#f4f1e9] rounded-lg px-4 py-2 text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#7a9f79]/50"
                    value={filter}
                  >
                    <option value="all">All Locations</option>
                    {locations.map((loc, index) => (
                      <option key={index} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1 md:flex-none">
                  <label htmlFor="craft" className="block text-sm text-[#5a5a5a] mb-1">Craft</label>
                  <select
                    id="craft"
                    onChange={(e) => handleFilter('craft', e.target.value)}
                    className="w-full border border-[#f4f1e9] rounded-lg px-4 py-2 text-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#7a9f79]/50"
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
                  className="self-end text-sm text-[#7a9f79] hover:underline px-3 py-2 flex items-center"
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
              <span className="text-sm text-[#5a5a5a] mr-2">Showing results for:</span>
              <span className="bg-[#e8b954]/20 text-[#2a2a2a] text-sm font-medium px-3 py-1 rounded-full flex items-center">
                {activeFilter}
                <button 
                  onClick={() => {
                    setFilter('all');
                    setActiveFilter('all');
                  }}
                  className="ml-2 text-[#5a5a5a] hover:text-[#7a9f79]"
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
              <div key={artisan.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-[#f4f1e9]">
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
                    <span className="bg-[#7a9f79]/10 text-[#7a9f79] text-xs font-medium px-2 py-1 rounded mr-2">
                      {artisan.craft}
                    </span>
                    <span className="text-sm text-[#5a5a5a]">
                      {artisan.years} of experience
                    </span>
                  </div>
                  
                  <p className="text-[#5a5a5a] mb-4 italic">"{artisan.bio}"</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#5a5a5a]">
                      {artisan.products} handmade pieces
                    </span>
                    <Link 
                      to={`/shop?artisan=${artisan.name.replace(' ', '-').toLowerCase()}`}
                      className="bg-[#7a9f79] hover:bg-[#6a8f69] text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center"
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
              <div className="mx-auto w-24 h-24 bg-[#f4f1e9] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#5a5a5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#2a2a2a] mb-2">No artisans matching your criteria</h3>
              <p className="text-[#5a5a5a] mb-6 max-w-md mx-auto">
                We couldn't find artisans matching your filters. Try adjusting your search or browse all artisans.
              </p>
              <button 
                onClick={() => {
                  setFilter('all');
                  setActiveFilter('all');
                }}
                className="text-[#7a9f79] hover:underline font-medium flex items-center justify-center mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset all filters
              </button>
            </div>
          )}
        </div>

        {/* Craft Techniques Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2a2a2a] mb-4">Traditional Craft Techniques</h2>
            <p className="text-[#5a5a5a] max-w-3xl mx-auto">
              Explore the diverse range of traditional techniques practiced by our artisan community
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {techniques.map((craft, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent z-10 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">{craft.title}</h3>
                </div>
                <div className="absolute inset-0 bg-[#e8b954] opacity-0 group-hover:opacity-20 transition duration-500 z-0"></div>
                <img
                  src={craft.image}
                  alt={craft.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <Link
                  to={`/crafts/${craft.title.toLowerCase().replace(' ', '-')}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Learn more about ${craft.title}`}
                ></Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#1a1a1a] text-white rounded-xl p-12 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Support Cultural Preservation</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
              Every purchase directly supports these artisans and helps sustain traditional crafts for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/shop" 
                className="bg-[#e8b954] hover:bg-[#d8a944] text-[#2a2a2a] font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg flex items-center"
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
