import { useState, useEffect, useRef } from 'react';
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
  interval = 3500, // Default to 3.5 seconds as requested
  linkText = "Learn More",
  contactLink = "/contact"
}: SlideShowServiceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate through services with smooth transitions
  useEffect(() => {
    if (isHovered) return; // Don't rotate when hovered

    const timer = setInterval(() => {
      setIsTransitioning(true);

      // Use timeout to create a smooth transition effect
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsTransitioning(false);
      }, 300); // Transition duration

    }, interval);

    return () => {
      clearInterval(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [services.length, interval, isHovered]);

  const currentService = services[currentIndex];
  const Icon = currentService.icon;

  return (
    <div
      className="service-card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service indicator dots */}
      <div className="absolute top-3 right-3 flex space-x-1 z-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-mystic-gold w-4' : 'bg-charcoal/30 hover:bg-charcoal/50'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>

      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-mystic-gold/5 to-dusty-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

      <div className="h-14 w-14 rounded-full bg-dusty-lavender/20 flex items-center justify-center mb-4 text-mystic-gold group-hover:scale-110 group-hover:bg-dusty-lavender/30 transition-all duration-500">
        <Icon size={28} className="group-hover:rotate-12 transition-transform duration-500" />
      </div>

      <h3 className={`text-xl font-semibold mb-2 group-hover:text-mystic-gold transition-all duration-300 ${isTransitioning ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
        {currentService.title}
      </h3>

      <p className={`text-charcoal mb-6 min-h-[4rem] transition-all duration-300 ${isTransitioning ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
        {currentService.description}
      </p>

      {currentService.link ? (
        <Link
          to={currentService.link}
          className={`inline-flex items-center text-mystic-gold group-hover:translate-x-2 transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-500 group-hover:translate-y-full">
              {linkText}
            </span>
            <span className="absolute top-0 left-0 inline-block -translate-y-full transition-transform duration-500 group-hover:translate-y-full">
              {linkText}
            </span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-500"
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
          className={`inline-flex items-center text-mystic-gold group-hover:translate-x-2 transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="relative overflow-hidden">
            <span className="inline-block transition-transform duration-500 group-hover:translate-y-full">
              Book Now
            </span>
            <span className="absolute top-0 left-0 inline-block -translate-y-full transition-transform duration-500 group-hover:translate-y-full">
              Book Now
            </span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-500"
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
