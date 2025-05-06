import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface AnimatedLogoProps {
  text?: string;
  onAnimationComplete?: () => void;
}

const AnimatedLogo = ({ 
  text = 'AstroVastu', 
  onAnimationComplete 
}: AnimatedLogoProps) => {
  const [animationStage, setAnimationStage] = useState<'initial' | 'zooming' | 'moving' | 'complete'>('initial');
  
  useEffect(() => {
    // Start animation sequence after component mounts
    const sequence = async () => {
      // Wait for a tiny bit to ensure component is fully rendered
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Start zooming animation
      setAnimationStage('zooming');
      
      // After zooming, start moving to corner
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnimationStage('moving');
      
      // After moving, mark as complete
      await new Promise(resolve => setTimeout(resolve, 800));
      setAnimationStage('complete');
      
      // Notify parent component that animation is complete
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    };
    
    sequence();
  }, [onAnimationComplete]);
  
  // Define position and style based on animation stage
  const getLogoStyles = () => {
    switch (animationStage) {
      case 'initial':
        return 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0';
      case 'zooming':
        return 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 opacity-100';
      case 'moving':
        return 'fixed left-4 top-4 translate-x-0 translate-y-0 scale-100 opacity-100';
      case 'complete':
        return 'fixed left-4 top-4 translate-x-0 translate-y-0 scale-100 opacity-100';
      default:
        return '';
    }
  };
  
  return (
    <div 
      className={`z-50 flex items-center ${getLogoStyles()} transition-all duration-800 ease-in-out`}
    >
      {/* Logo icon */}
      <div className="relative mr-2">
        <div className={`
          text-mystic-gold
          ${animationStage === 'zooming' ? 'animate-spin-slow' : ''}
        `}>
          <Star size={animationStage === 'initial' || animationStage === 'zooming' ? 48 : 24} strokeWidth={1.5} fill="currentColor" />
        </div>
        
        {/* Animated particles that appear during zooming */}
        {animationStage === 'zooming' && (
          <>
            <span className="absolute top-0 left-0 w-1 h-1 bg-mystic-gold rounded-full animate-ping-slow"></span>
            <span className="absolute bottom-0 right-0 w-1 h-1 bg-mystic-gold rounded-full animate-ping-slow" style={{ animationDelay: '0.2s' }}></span>
            <span className="absolute top-0 right-0 w-1 h-1 bg-mystic-gold rounded-full animate-ping-slow" style={{ animationDelay: '0.4s' }}></span>
            <span className="absolute bottom-0 left-0 w-1 h-1 bg-mystic-gold rounded-full animate-ping-slow" style={{ animationDelay: '0.6s' }}></span>
          </>
        )}
      </div>
      
      {/* Logo text */}
      <h1 
        className={`font-bold text-mystic-gold whitespace-nowrap
          ${animationStage === 'initial' || animationStage === 'zooming' ? 'text-4xl' : 'text-xl'}
          ${animationStage === 'zooming' ? 'animate-pulse-glow' : ''}
        `}
      >
        {text}
      </h1>
    </div>
  );
};

export default AnimatedLogo;
