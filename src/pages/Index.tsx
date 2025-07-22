import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Waves, TreePine, Crown, Star, MapPin, Phone, Mail, Calendar, Users, Award, Gamepad2 } from 'lucide-react';
import { rooms, Room } from '../roomsData';
import React, { useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [expandedRoom, setExpandedRoom] = useState<string | null>(null);
  const [expandedRoomIndex, setExpandedRoomIndex] = useState<number | null>(null);

  const handleRoomClick = (roomTitle: string) => {
    // Navigate to rooms page and scroll to specific room
    navigate('/rooms');
    // Add a small delay to ensure the page loads before scrolling
    setTimeout(() => {
      const element = document.getElementById(roomTitle.replace(/\s+/g, '-').toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const amenities = [
    { 
      icon: Waves, 
      title: 'Valley Edge Pool', 
      description: 'Stunning pool with breathtaking mountain views and luxury cabanas',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Sparkles, 
      title: 'Luxury Spa (Coming Soon)', 
      description: 'Our world-class wellness center is coming soon!',
      color: 'from-purple-400 to-pink-600'
    },
    { 
      icon: Crown, 
      title: 'Premium Dining', 
      description: 'Gourmet cuisine crafted with local ingredients and international flair',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: Crown,
      title: 'Cafe (Upcoming)',
      description: 'A cozy cafe experience is coming soon to Vintage Valley.',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      icon: Gamepad2, 
      title: 'Game Zone', 
      description: 'Comprehensive sports facilities including badminton, football, and indoor games for all ages',
      color: 'from-green-500 to-blue-600'
    },
    { 
      icon: TreePine, 
      title: 'Nature Trails', 
      description: 'Guided eco-walks through pristine landscapes and scenic viewpoints',
      color: 'from-green-400 to-emerald-600'
    },
  ];

  const testimonials = [
    {
      name: 'Sanket Pawar',
      location: 'India',
      image: '/images/placeholder.svg',
      rating: 5,
      text: 'Amazing place to relax and enjoy with family. The rooms are clean and spacious, and the staff is very helpful. The view from the property is breathtaking!',
      date: 'May 2024'
    },
    {
      name: 'Ritika Sharma',
      location: 'India',
      image: '/images/placeholder.svg',
      rating: 5,
      text: 'Had a wonderful stay at Vintage Valley. The food was delicious and the pool was very clean. Highly recommended for a weekend getaway.',
      date: 'April 2024'
    },
    {
      name: 'Rahul Desai',
      location: 'India',
      image: '/images/placeholder.svg',
      rating: 4,
      text: 'Great hospitality and beautiful location. The only downside was the WiFi speed, but everything else was perfect.',
      date: 'March 2024'
    },
    {
      name: 'Priya Nair',
      location: 'India',
      image: '/images/placeholder.svg',
      rating: 5,
      text: 'The best resort experience I have had in a long time. The nature trails and activities were a highlight for our kids.',
      date: 'February 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />

      {/* Enhanced Amenities Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-ivory/30 to-white"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gold/10 rounded-full mb-6">
              <span className="text-gold font-medium tracking-wide">WORLD-CLASS AMENITIES</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-8">
              Luxury Redefined
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in exceptional facilities designed to elevate every moment of your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const isComingSoon =
                amenity.title.includes('(Coming Soon)') || amenity.title.includes('(Upcoming)');
              return (
                <div key={index} className="group cursor-pointer">
                  <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-ivory/50 ${isComingSoon ? 'opacity-60 grayscale' : ''}`}>
                    {isComingSoon && (
                      <div className="absolute top-4 right-4 bg-gold/90 text-charcoal px-4 py-2 rounded-full font-bold text-xs shadow-lg z-10">
                        Coming Soon
                      </div>
                    )}
                    <div className="flex justify-center mb-6">
                      <div className={`bg-gradient-to-r ${amenity.color} rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <amenity.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4 text-center">
                      {amenity.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed text-center">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Rooms Section */}
      <section className="section-padding bg-gradient-to-b from-ivory to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-charcoal/10 rounded-full mb-6">
              <span className="text-charcoal font-medium tracking-wide">PREMIUM ACCOMMODATIONS</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-8">
              Exquisite Suites
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Choose from our thoughtfully designed accommodations, each offering unparalleled comfort and stunning views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rooms.filter(room => room.title !== 'Lotus Family Suite').map((room, index) => {
              const isExpanded = expandedRoomIndex === index;
              const previewLength = 120;
              const shouldTruncate = room.description.length > previewLength;
              const displayDescription = isExpanded || !shouldTruncate
                ? room.description
                : room.description.slice(0, previewLength) + '...';
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={room.images[0]}
                        alt={room.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                          {room.title === 'Deluxe Studio Suite' ? 'Popular' :
                           room.title === 'Lotus Family Suite' ? 'Family Choice' :
                           room.title === 'Presidential Suite' ? 'Luxury' :
                           room.title === 'Deluxe Edge View' ? 'Edge View' : ''}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-2xl font-bold">From {room.pricing.weekday}</div>
                        <div className="text-sm opacity-90">per night</div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
                        {room.title}
                      </h3>
                      <p className="text-charcoal/70 mb-6 leading-relaxed">
                        {displayDescription}
                        {shouldTruncate && (
                          <button
                            className="ml-2 text-gold underline text-sm focus:outline-none"
                            onClick={e => {
                              e.stopPropagation();
                              setExpandedRoomIndex(isExpanded ? null : index);
                            }}
                          >
                            {isExpanded ? 'Show Less' : 'Read More'}
                          </button>
                        )}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center text-sm text-charcoal/70">
                          <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                          {room.bedType}
                        </div>
                        <div className="flex items-center text-sm text-charcoal/70">
                          <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                          {room.size}
                        </div>
                        {room.amenities.slice(0,2).map((amenity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-charcoal/70">
                            <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                            {amenity.name}
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => handleRoomClick(room.title)}
                        className="w-full bg-gradient-to-r from-gold to-bronze text-charcoal font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        View Details & Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-60 h-60 bg-ivory/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gold/20 rounded-full mb-6">
              <span className="text-gold font-medium tracking-wide">GUEST EXPERIENCES</span>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-8">
              Stories of Bliss
            </h2>
            <p className="text-xl text-ivory/70 max-w-3xl mx-auto leading-relaxed">
              Discover why guests choose Vintage Valley as their sanctuary of luxury and tranquility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-ivory/5 backdrop-blur-xl rounded-3xl p-8 border border-ivory/10 hover:bg-ivory/10 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-gold/50"
                    />
                    <div>
                      <h4 className="font-semibold text-ivory text-lg">{testimonial.name}</h4>
                      <p className="text-ivory/60 text-sm flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </p>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-ivory/80 leading-relaxed italic mb-4 text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="text-ivory/50 text-sm">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
