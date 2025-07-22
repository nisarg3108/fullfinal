import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms & Suites' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'dining', name: 'Dining' },
    { id: 'nature', name: 'Nature & Views' },
    { id: 'events', name: 'Events' }
  ];

  const galleryImages = [
    { id: 1, category: 'rooms', src: '/images/deluxe-studio-suite-1.jpg', alt: 'Deluxe Studio Suite 1' },
    { id: 2, category: 'rooms', src: '/images/deluxe-studio-suite-2.jpg', alt: 'Deluxe Studio Suite 2' },
    { id: 3, category: 'rooms', src: '/images/deluxe-studio-suite-3.jpg', alt: 'Deluxe Studio Suite 3' },
    { id: 4, category: 'rooms', src: '/images/skyline-deluxe-1.jpg', alt: 'Skyline Deluxe 1' },
    { id: 5, category: 'rooms', src: '/images/skyline-deluxe-2.jpg', alt: 'Skyline Deluxe 2' },
    { id: 6, category: 'rooms', src: '/images/skyline-deluxe-3.jpg', alt: 'Skyline Deluxe 3' },
    { id: 7, category: 'rooms', src: '/images/deluxe-edge-view-1.jpg', alt: 'Deluxe Edge View 1' },
    { id: 8, category: 'rooms', src: '/images/deluxe-edge-view-2.jpg', alt: 'Deluxe Edge View 2' },
    { id: 9, category: 'rooms', src: '/images/deluxe-edge-view-3.jpg', alt: 'Deluxe Edge View 3' },
    { id: 10, category: 'rooms', src: '/images/1.jpeg', alt: 'Lotus Family Suite 1' },
    { id: 11, category: 'rooms', src: '/images/2.jpeg', alt: 'Lotus Family Suite 2' },
    { id: 12, category: 'rooms', src: '/images/3.jpeg', alt: 'Lotus Family Suite 3' },
    { id: 13, category: 'rooms', src: '/images/presidential-sky-villa-1.jpg', alt: 'Presidential Sky Villa 1' },
    { id: 14, category: 'rooms', src: '/images/presidential-sky-villa-2.jpg', alt: 'Presidential Sky Villa 2' },
    { id: 15, category: 'rooms', src: '/images/presidential-sky-villa-3.jpg', alt: 'Presidential Sky Villa 3' },
    { id: 36, category: 'rooms', src: '/images/room/AB004964.JPG', alt: 'Room Suite AB004964' },
    { id: 37, category: 'rooms', src: '/images/room/AB004978.JPG', alt: 'Room Suite AB004978' },
    { id: 38, category: 'rooms', src: '/images/room/AB005018.JPG', alt: 'Room Suite AB005018' },
    { id: 39, category: 'rooms', src: '/images/room/AB005030.JPG', alt: 'Room Suite AB005030' },
    { id: 40, category: 'rooms', src: '/images/room/AB005053.JPG', alt: 'Room Suite AB005053' },
    { id: 41, category: 'rooms', src: '/images/room/AB005063.JPG', alt: 'Room Suite AB005063' },
    { id: 45, category: 'rooms', src: '/images/room/AB004906.JPG', alt: 'Room Suite AB004906' },
    { id: 46, category: 'rooms', src: '/images/room/AB004915.JPG', alt: 'Room Suite AB004915' },
    { id: 47, category: 'rooms', src: '/images/room/AB004929.JPG', alt: 'Room Suite AB004929' },
    { id: 16, category: 'facilities', src: '/images/infinity-pool-1.jpg', alt: 'Infinity Pool 1' },
    { id: 22, category: 'facilities', src: '/images/nature-trails-1.jpg', alt: 'Nature Trails' },
    { id: 23, category: 'facilities', src: '/images/conference-hall-1.jpg', alt: 'Conference Hall' },
    { id: 48, category: 'dining', src: '/images/room/AB004776.JPG', alt: 'Dining Room AB004776' },
    { id: 49, category: 'dining', src: '/images/room/AB004771.JPG', alt: 'Dining Room AB004771' },
    { id: 50, category: 'dining', src: '/images/room/AB004778.JPG', alt: 'Dining Room AB004778' },
    { id: 51, category: 'dining', src: '/images/room/AB004798.JPG', alt: 'Dining Room AB004798' },
    { id: 52, category: 'dining', src: '/images/room/AB004804.JPG', alt: 'Dining Room AB004804' },
    { id: 53, category: 'dining', src: '/images/room/AB004812.JPG', alt: 'Dining Room AB004812' },
    { id: 54, category: 'dining', src: '/images/room/AB004749.JPG', alt: 'Dining Room AB004749' },
    { id: 55, category: 'nature', src: '/images/at/1.jpg', alt: '' },
    { id: 56, category: 'nature', src: '/images/at/2.jpg', alt: '' },
    { id: 57, category: 'nature', src: '/images/at/3.jpg', alt: '' },
    { id: 58, category: 'nature', src: '/images/at/4.jpg', alt: '' },
    { id: 59, category: 'nature', src: '/images/at/5.jpg', alt: '' },
    { id: 60, category: 'nature', src: '/images/at/6.jpg', alt: '' },
    { id: 61, category: 'nature', src: '/images/at/7.jpg', alt: '' },
    { id: 62, category: 'nature', src: '/images/at/8.jpeg', alt: '' },
    { id: 63, category: 'nature', src: '/images/at/9.jpg', alt: '' },
    { id: 64, category: 'nature', src: '/images/at/10.jpg', alt: '' },
    { id: 65, category: 'nature', src: '/images/at/11.jpg', alt: '' },
    { id: 66, category: 'nature', src: '/images/at/12.jpg', alt: '' },
    { id: 67, category: 'nature', src: '/images/at/13.jpg', alt: '' },
    { id: 68, category: 'nature', src: '/images/at/14.jpeg', alt: '' },
    { id: 69, category: 'nature', src: '/images/at/15.jpg', alt: '' },
    { id: 70, category: 'nature', src: '/images/at/16.jpeg', alt: '' },
    { id: 71, category: 'nature', src: '/images/at/17.jpg', alt: '' },
    { id: 72, category: 'nature', src: '/images/at/18.png', alt: '' },
    { id: 73, category: 'nature', src: '/images/at/19.jpg', alt: '' },
    { id: 74, category: 'nature', src: '/images/at/20.jpeg', alt: '' },
    { id: 75, category: 'nature', src: '/images/at/21.jpg', alt: '' },
    { id: 76, category: 'nature', src: '/images/at/30.jpg', alt: '' },
    { id: 77, category: 'nature', src: '/images/at/31.jpeg', alt: '' },
    { id: 78, category: 'nature', src: '/images/at/32.jpeg', alt: '' },
    { id: 79, category: 'nature', src: '/images/at/33.jpeg', alt: '' },
    { id: 80, category: 'nature', src: '/images/at/34.jpg', alt: '' },
    { id: 81, category: 'nature', src: '/images/at/35.jpg', alt: '' },
    { id: 82, category: 'nature', src: '/images/at/kasara.jpeg', alt: '' },
    { id: 83, category: 'nature', src: '/images/at/151.jpeg', alt: '' },
    { id: 84, category: 'nature', src: '/images/at/152.jpeg', alt: '' },
    { id: 85, category: 'nature', src: '/images/at/153.jpeg', alt: '' },
    { id: 86, category: 'facilities', src: '/images/room/1000020999.png', alt: '' },
    { id: 87, category: 'facilities', src: '/images/room/1000021000.png', alt: '' },
    { id: 88, category: 'facilities', src: '/images/room/1000021001.jpg', alt: '' },
    { id: 89, category: 'facilities', src: '/images/room/1000021003.jpg', alt: '' },
    { id: 90, category: 'facilities', src: '/images/room/1000021004.jpg', alt: '' },
    { id: 91, category: 'facilities', src: '/images/room/1000021006.jpg', alt: '' },
    { id: 92, category: 'facilities', src: '/images/room/1000021267.jpg', alt: '' },
    { id: 93, category: 'facilities', src: '/images/room/1000021287.jpg', alt: '' },
    { id: 94, category: 'facilities', src: '/images/room/1000021379.jpg', alt: '' },
    { id: 95, category: 'facilities', src: '/images/room/AB005122.JPG', alt: '' },
    { id: 96, category: 'facilities', src: '/images/room/AB005123.JPG', alt: '' },
    { id: 97, category: 'facilities', src: '/images/room/AB005124.JPG', alt: '' },
    { id: 98, category: 'facilities', src: '/images/room/AB005125 (1).JPG', alt: '' },
    { id: 99, category: 'facilities', src: '/images/room/AB005126.JPG', alt: '' },
    { id: 100, category: 'facilities', src: '/images/room/AB005127.JPG', alt: '' },
    { id: 101, category: 'facilities', src: '/images/room/AB005128.JPG', alt: '' },
    { id: 102, category: 'facilities', src: '/images/room/AB005094.JPG', alt: '' },
    { id: 103, category: 'facilities', src: '/images/room/AB005097.JPG', alt: '' },
    { id: 104, category: 'facilities', src: '/images/room/AB005100.JPG', alt: '' },
    { id: 105, category: 'facilities', src: '/images/room/AB004825.JPG', alt: '' },
    { id: 106, category: 'facilities', src: '/images/room/AB004827.JPG', alt: '' },
    { id: 107, category: 'facilities', src: '/images/room/AB004834.JPG', alt: '' },
    { id: 108, category: 'dining', src: '/images/room/AB004854.JPG', alt: '' },
    { id: 109, category: 'dining', src: '/images/room/AB004857.JPG', alt: '' },
    { id: 110, category: 'dining', src: '/images/room/AB004859.JPG', alt: '' },
    { id: 111, category: 'dining', src: '/images/room/AB004874.JPG', alt: '' },
    { id: 112, category: 'dining', src: '/images/room/AB004886 (1).JPG', alt: '' },
    { id: 113, category: 'dining', src: '/images/room/AB004887.JPG', alt: '' },
    { id: 114, category: 'dining', src: '/images/room/AB004858.JPG', alt: '' },
    { id: 115, category: 'dining', src: '/images/room/AB004889.JPG', alt: '' },
    { id: 116, category: 'dining', src: '/images/room/AB004875.JPG', alt: '' },
    { id: 117, category: 'dining', src: '/images/room/AB004862.JPG', alt: '' },
    { id: 118, category: 'dining', src: '/images/room/AB004888.JPG', alt: '' },
    { id: 119, category: 'dining', src: '/images/room/AB004882.JPG', alt: '' },
    { id: 120, category: 'dining', src: '/images/room/AB004878.JPG', alt: '' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = filteredImages.find(img => img.id === lightboxImage);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-800 to-gray-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-ivory mb-6">
            Gallery
          </h1>
          <p className="text-xl text-ivory/80 max-w-2xl mx-auto">
            Immerse yourself in the visual story of Vintage Valley Resort through our curated collection of moments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-gray-800 shadow-lg transform scale-105'
                    : 'bg-ivory text-gray-800 hover:bg-gold/20 hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Horizontal Scroll Gallery */}
          <div className="md:hidden flex overflow-x-auto space-x-4 pb-2">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-64 cursor-pointer rounded-2xl luxury-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Desktop Grid Gallery */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden rounded-2xl luxury-shadow hover:shadow-2xl transition-all duration-500 ${
                  index % 8 === 0 || index % 8 === 3 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt=""
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      index % 8 === 0 || index % 8 === 3 ? 'h-96' : 'h-48'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && currentLightboxImage && (
        <div className="fixed inset-0 bg-gray-800/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-ivory hover:text-gold transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-ivory hover:text-gold transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-4xl max-h-full flex items-center justify-center">
            <img
              src={currentLightboxImage.src}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-ivory text-center">
            <p className="text-ivory/60 text-sm mt-1">
              {filteredImages.findIndex(img => img.id === lightboxImage) + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-800 to-gray-800/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-ivory mb-6">
            Create Your Own Memories
          </h2>
          <p className="text-xl text-ivory/80 mb-8">
            Book your stay and become part of the Vintage Valley Resort story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-bronze transition-all duration-300 transform hover:scale-105">
              Book Your Stay
            </button>
            <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-full font-semibold text-lg hover:bg-ivory hover:text-gray-800 transition-all duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
