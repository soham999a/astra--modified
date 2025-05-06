import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SlideShowServiceCardProps {
  services: {
    title: string;
    description: string;
    icon: LucideIcon;
    link?: string;
  }[];
  interval?: number; // in milliseconds
  linkText?: string;
  contactLink?: string;
}

const SlideShowServiceCard = ({
  services,
  interval = 4000, // Default to 4 seconds
  linkText = "Learn More",
  contactLink = "/contact"
}: SlideShowServiceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate through services
  useEffect(() => {
    if (isHovered) return; // Don't rotate when hovered
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, interval);

    return () => clearInterval(timer);
  }, [services.length, interval, isHovered]);

  const currentService = services[currentIndex];
  const Icon = currentService.icon;

  return (
    <div 
      className="service-card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service indicator dots */}
      <div className="absolute top-3 right-3 flex space-x-1">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-mystic-gold w-4' : 'bg-cool-gray/30'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>

      <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold">
        <Icon size={28} />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-mystic-gold transition-all duration-300">
        {currentService.title}
      </h3>
      
      <p className="text-cool-gray mb-6 min-h-[4rem]">
        {currentService.description}
      </p>
      
      {currentService.link ? (
        <Link 
          to={currentService.link} 
          className="inline-flex items-center text-mystic-gold group-hover:translate-x-1 transition-transform"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      ) : (
        <Link 
          to={contactLink} 
          className="inline-flex items-center text-mystic-gold group-hover:translate-x-1 transition-transform"
        >
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default SlideShowServiceCard;
