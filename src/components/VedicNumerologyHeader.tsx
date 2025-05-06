import React from 'react';
import { VedicIconCircle } from './VedicIcons';
import LoShuGrid from './LoShuGrid';

interface VedicNumerologyHeaderProps {
  className?: string;
  showTitle?: boolean;
}

const VedicNumerologyHeader: React.FC<VedicNumerologyHeaderProps> = ({
  className = '',
  showTitle = true
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between ${className}`}>
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <VedicIconCircle 
          icon="om" 
          size="xl" 
          color="numerology" 
          className="mb-2"
        />
        {showTitle && <h3 className="text-xl font-semibold">Vedic Numerology</h3>}
      </div>
      
      <div className="flex flex-col items-center">
        <LoShuGrid size="lg" className="mb-2" />
        {showTitle && <h3 className="text-xl font-semibold">Lo-Shu Grid</h3>}
      </div>
    </div>
  );
};

export default VedicNumerologyHeader;
