
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);

        // Show toast notification once when button appears
        if (!hasShownToast) {
          setTimeout(() => {
            toast("Need help?", {
              description: "Chat with us on WhatsApp for quick assistance",
              action: {
                label: "Chat Now",
                onClick: () => window.open("https://wa.me/919876543210", "_blank")
              },
              duration: 5000,
            });
            setHasShownToast(true);
          }, 2000);
        }
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShownToast]);

  // Reset touch state after animation completes
  useEffect(() => {
    if (isTouched) {
      const timer = setTimeout(() => {
        setIsTouched(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isTouched]);

  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 flex items-center justify-center z-50 transition-all duration-300
        ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isHovered ? 'scale-110' : 'scale-100'}
        ${isTouched ? 'animate-ping-once' : ''}
      `}
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
    >
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-green-500 opacity-30 animate-ping-slow"></span>

      {/* Button with shadow */}
      <span className={`relative flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-lg
        ${isHovered ? 'shadow-xl' : 'shadow-md'} transition-all duration-300`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </span>

      {/* Tooltip */}
      <span className={`absolute right-16 bg-white text-charcoal px-3 py-1.5 rounded-lg shadow-md text-sm whitespace-nowrap
        transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        Chat with us
        <span className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
