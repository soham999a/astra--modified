import React from 'react';
import { VedicIconWithTitle, IconSize } from './VedicIcons';

// Define the service item interface
export interface VedicServiceItem {
  id: string;
  icon: string; // key from vedicIcons
  title: string;
  link: string;
  type: 'numerology' | 'vastu' | 'personality' | 'destiny' | 'grid' | 'remedial';
}

// Define all the Vedic Numerology services
export const vedicServices: VedicServiceItem[] = [
  // Numerology Services
  {
    id: 'name-correction',
    icon: 'nameCorrection',
    title: 'Name Correction',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'future-forecasts',
    icon: 'futureForecasts',
    title: 'Future Forecasts',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'baby-names',
    icon: 'babyNames',
    title: 'Baby Names',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'business-name',
    icon: 'businessName',
    title: 'Business Name',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'compatibility',
    icon: 'compatibilityChecking',
    title: 'Compatibility Checking',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'personal-year',
    icon: 'personalYear',
    title: 'Personal Year',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'lucky-numbers',
    icon: 'luckyNumbers',
    title: 'Lucky Numbers',
    link: '/numerology',
    type: 'numerology'
  },
  {
    id: 'phone-numbers',
    icon: 'phoneNumbers',
    title: 'Phone Numbers',
    link: '/numerology',
    type: 'numerology'
  },
  
  // Personality Services
  {
    id: 'personality-analysis',
    icon: 'personalityAnalysis',
    title: 'Personality Analysis',
    link: '/numerology',
    type: 'personality'
  },
  
  // Destiny Services
  {
    id: 'destiny-reading',
    icon: 'destinyReading',
    title: 'Destiny Number Reading',
    link: '/numerology',
    type: 'destiny'
  },
  
  // Grid Services
  {
    id: 'grid-analysis',
    icon: 'gridAnalysis',
    title: 'Grid Analysis',
    link: '/numerology',
    type: 'grid'
  },
  
  // Remedial Services
  {
    id: 'dasha-calculation',
    icon: 'dashaCalculation',
    title: 'Dasha Calculation',
    link: '/numerology',
    type: 'remedial'
  },
  {
    id: 'bank-numbers',
    icon: 'bankNumbers',
    title: 'Mobile/Bank/Car Numbers',
    link: '/numerology',
    type: 'remedial'
  },
  {
    id: 'remedial-measures',
    icon: 'remedialMeasures',
    title: 'Remedial Measures',
    link: '/numerology',
    type: 'remedial'
  },
  
  // Vastu Services
  {
    id: 'plot-selection',
    icon: 'plotSelection',
    title: 'Plot Selection',
    link: '/vastu',
    type: 'vastu'
  },
  {
    id: 'home-vastu',
    icon: 'homeVastu',
    title: 'Home Vastu',
    link: '/vastu',
    type: 'vastu'
  },
  {
    id: 'business-vastu',
    icon: 'businessVastu',
    title: 'Business Vastu',
    link: '/vastu',
    type: 'vastu'
  },
  {
    id: 'factory-vastu',
    icon: 'factoryVastu',
    title: 'Factory/Industrial Vastu',
    link: '/vastu',
    type: 'vastu'
  },
  {
    id: 'on-site-visit',
    icon: 'onSiteVisit',
    title: 'On-Site Visits',
    link: '/vastu',
    type: 'vastu'
  },
  {
    id: 'plot-advice',
    icon: 'plotAdvice',
    title: 'Plot Selection Advice',
    link: '/vastu',
    type: 'vastu'
  }
];

// VedicIconGrid props
interface VedicIconGridProps {
  columns?: number;
  iconSize?: IconSize;
  className?: string;
  filter?: 'all' | 'numerology' | 'vastu' | 'personality' | 'destiny' | 'grid' | 'remedial' | string[];
  services?: VedicServiceItem[];
  showBorder?: boolean;
  borderColor?: string;
  gap?: 'sm' | 'md' | 'lg';
}

// VedicIconGrid component
const VedicIconGrid: React.FC<VedicIconGridProps> = ({
  columns = 4,
  iconSize = 'md',
  className = '',
  filter = 'all',
  services = vedicServices,
  showBorder = false,
  borderColor = 'border-blue-500/30',
  gap = 'md'
}) => {
  // Filter services based on the filter prop
  const filteredServices = filter === 'all'
    ? services
    : Array.isArray(filter)
      ? services.filter(service => filter.includes(service.type))
      : services.filter(service => service.type === filter);

  // Determine gap class
  const gapClass = gap === 'sm' ? 'gap-2' : gap === 'lg' ? 'gap-6' : 'gap-4';

  // Create the grid content
  const gridContent = (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} ${gapClass} ${className}`}>
      {filteredServices.map((service) => (
        <VedicIconWithTitle
          key={service.id}
          icon={service.icon as any}
          title={service.title}
          link={service.link}
          size={iconSize}
          color={service.type}
          className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-300"
        />
      ))}
    </div>
  );

  // If showBorder is true, wrap the grid in a border
  if (showBorder) {
    return (
      <div className={`border-2 ${borderColor} rounded-lg p-4`}>
        {gridContent}
      </div>
    );
  }

  return gridContent;
};

export default VedicIconGrid;
