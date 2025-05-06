import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
}

const TestimonialCarousel = ({ 
  testimonials, 
  autoplaySpeed = 5000 
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;
    
    autoplayTimerRef.current = setInterval(() => {
      goToNext();
    }, autoplaySpeed);
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [currentIndex, isPaused, autoplaySpeed]);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl bg-white shadow-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[300px] px-6 py-8">
        {/* Testimonial content */}
        <div 
          className={`transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Rating stars */}
          <div className="flex mb-4 text-mystic-gold">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                className={i < testimonials[currentIndex].rating ? 'fill-mystic-gold' : 'fill-gray-200 text-gray-200'} 
              />
            ))}
          </div>
          
          {/* Testimonial text */}
          <blockquote className="mb-6 text-charcoal/90 italic">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          {/* Client info */}
          <div className="flex flex-col">
            <span className="font-semibold text-charcoal">
              {testimonials[currentIndex].name}
            </span>
            <span className="text-sm text-charcoal/70">
              {testimonials[currentIndex].location}
            </span>
            <span className="text-xs text-mystic-gold mt-1">
              {testimonials[currentIndex].service}
            </span>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full border-mystic-gold/30 bg-white hover:bg-mystic-gold/10"
          onClick={goToPrev}
        >
          <ChevronLeft size={16} className="text-mystic-gold" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8 rounded-full border-mystic-gold/30 bg-white hover:bg-mystic-gold/10"
          onClick={goToNext}
        >
          <ChevronRight size={16} className="text-mystic-gold" />
        </Button>
      </div>
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-mystic-gold w-4' 
                : 'bg-charcoal/20 hover:bg-charcoal/40'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
