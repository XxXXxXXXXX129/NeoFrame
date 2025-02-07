import { useState, useEffect } from 'react';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/living-room.jpg',
    '/images/office.jpg',
    '/images/cafe.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Hintergrundbild mit Übergang */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt="NeoFrame Showcase"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Kunst, die sich mit Ihnen entwickelt
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Verwandeln Sie Ihren Raum mit intelligenter, sich stetig verändernder Kunst
          </p>
          <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-md hover:bg-blue-700 transition-colors">
            Erleben Sie die Zukunft der Kunst – Jetzt vorbestellen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero; 