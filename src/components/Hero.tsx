import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Phone } from 'lucide-react';
import ImageContainer from './ImageContainer';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const phoneNumber = '619-892-8007';
  const videoId = 'gW5-lTEs23A';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  };

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Container with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 scale-110">
          <ImageContainer
            src="/dental-implant.jpg"
            alt="Dental Implant Background"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-32">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-light mb-6 leading-tight">
              Insta-Bar™ Solid Metal
              <br />
              <span className="text-primary">Verification System</span>
            </h1>
            <p className="text-xl md:text-3xl text-text-light/90 mb-4">
              Revolutionary Precision for Full-Arch Implant Cases
            </p>
            <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
              The Only Metal-Link System Eliminating Material Shrinkage and Flex
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <button 
                onClick={handlePhoneClick}
                className="btn-primary group flex items-center justify-center"
              >
                <Phone className="mr-2" />
                {phoneNumber}
              </button>
              <button 
                onClick={handleVideoClick}
                className="btn-secondary group flex items-center justify-center"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Video
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="stat-value">±0.01mm</div>
                <div className="stat-label">Precision Tolerance</div>
              </div>
              <div className="text-center">
                <div className="stat-value">98%</div>
                <div className="stat-label">Position Accuracy</div>
              </div>
              <div className="text-center">
                <div className="stat-value">100%</div>
                <div className="stat-label">Passive Fit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        style={{
          transform: `translate(-50%, ${scrollY * 0.3}px)`,
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&controls=0`}
              title="Insta-Bar™ Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;