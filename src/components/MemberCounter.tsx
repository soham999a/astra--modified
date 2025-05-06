import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

interface FloatingMemberCounterProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  showLabel?: boolean;
}

const FloatingMemberCounter = ({
  position = 'bottom-right',
  showLabel = true
}: FloatingMemberCounterProps) => {
  const [memberCount, setMemberCount] = useState<number>(125);
  const [displayCount, setDisplayCount] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Position classes
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-24 left-4',
    'bottom-right': 'bottom-24 right-4'
  };

  // Simulate member count increasing every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount(prev => prev + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Animate the counter
  useEffect(() => {
    if (displayCount < memberCount) {
      const animationDuration = 1500; // 1.5 seconds
      const interval = 40; // Update every 40ms
      const increment = Math.ceil(memberCount / (animationDuration / interval));

      const timer = setInterval(() => {
        setDisplayCount(prev => {
          const next = prev + increment;
          return next >= memberCount ? memberCount : next;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [memberCount, displayCount]);

  return (
    <div
      className={`fixed ${positionClasses[position]} z-40 transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300
        ${isHovered ? 'pl-3 pr-5 py-3' : 'p-3'}`}
      >
        {/* Icon with pulse animation */}
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-mystic-gold/20 animate-ping-slow"></span>
          <div className="relative bg-mystic-gold text-white p-2 rounded-full">
            <Users size={20} />
          </div>
        </div>

        {/* Counter that expands on hover */}
        <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'w-auto ml-3 opacity-100' : 'w-0 opacity-0'}`}>
          <div className="whitespace-nowrap">
            <span className="text-xl font-bold text-mystic-gold">
              {displayCount.toLocaleString()}
            </span>
            {showLabel && (
              <span className="text-xs text-charcoal/70 ml-1">members</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMemberCounter;
