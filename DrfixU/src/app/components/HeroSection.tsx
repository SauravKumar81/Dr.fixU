import { Video, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

// Collection of healthcare/wellness background videos
const BACKGROUND_VIDEOS = [
  {
    id: 1,
    name: 'Physiotherapy Session',
    url: 'https://videos.pexels.com/video-files/6111610/6111610-uhd_2560_1440_25fps.mp4',
    description: 'Professional physiotherapy consultation'
  },
  {
    id: 2,
    name: 'Home Stretching',
    url: 'https://videos.pexels.com/video-files/6942097/6942097-uhd_2560_1440_25fps.mp4',
    description: 'Person doing gentle stretching at home'
  },
  {
    id: 3,
    name: 'Mobile Health App',
    url: 'https://videos.pexels.com/video-files/7551844/7551844-uhd_2560_1440_24fps.mp4',
    description: 'Using health app on smartphone'
  },
  {
    id: 4,
    name: 'Yoga Practice',
    url: 'https://videos.pexels.com/video-files/6787168/6787168-uhd_2560_1440_25fps.mp4',
    description: 'Calm yoga practice in modern interior'
  },
  {
    id: 5,
    name: 'Wellness Routine',
    url: 'https://videos.pexels.com/video-files/7187730/7187730-uhd_2560_1440_25fps.mp4',
    description: 'Morning wellness routine at home'
  }
];

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Auto-rotate videos every 30 seconds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % BACKGROUND_VIDEOS.length);
    }, 30000); // Change video every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const currentVideo = BACKGROUND_VIDEOS[currentVideoIndex];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideo.id}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={currentVideo.url} type="video/mp4" />
        </video>
        
        {/* Multi-layer overlay for better text readability and brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F4FD8]/85 via-[#1F4FD8]/75 to-[#1F4FD8]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        
        {/* Loading state */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-[#1F4FD8] animate-pulse"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <span className="text-white font-medium text-sm md:text-base">
                ✓ Trusted by 10,000+ Patients
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Your Health,{' '}
              <span className="text-[#F36A21] drop-shadow-lg">Our Care</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl mb-8 leading-relaxed">
              Expert physiotherapy consultation from the comfort of your home. 
              Get personalized treatment plans and recover faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1F4FD8] hover:bg-white/90 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all text-base md:text-lg font-semibold"
              >
                <Link to="/consult">
                  <Video className="mr-2 h-5 w-5" />
                  Book Online Consultation
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-[#F36A21] hover:bg-[#F36A21]/90 text-white border-white/30 hover:border-white/50 rounded-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-all text-base md:text-lg font-semibold"
              >
                <Link to="/consult">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find a Nearby Physio
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-white/30">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 drop-shadow-lg">
                  10K+
                </div>
                <div className="text-xs md:text-sm text-white/90">Happy Patients</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 drop-shadow-lg">
                  50+
                </div>
                <div className="text-xs md:text-sm text-white/90">Expert Physios</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 drop-shadow-lg">
                  95%
                </div>
                <div className="text-xs md:text-sm text-white/90">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Selector Dots (optional - can be hidden) */}
      <div className="absolute bottom-24 right-8 z-10 hidden lg:flex flex-col gap-3">
        {BACKGROUND_VIDEOS.map((video, index) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideoIndex(index)}
            className={`group relative w-3 h-3 rounded-full transition-all ${
              index === currentVideoIndex
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Switch to ${video.name}`}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {video.name}
            </span>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
