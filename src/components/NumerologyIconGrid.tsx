import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaOm,
  FaRegCalendarAlt,
  FaUserCheck,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaRegChartBar,
  FaRegStar,
  FaRegAddressCard,
  FaRegEdit,
  FaRegCreditCard,
  FaUsers,
  FaRegLightbulb,
  FaRegCompass,
  FaRegClock,
  FaRegHeart
} from 'react-icons/fa';
import {
  GiPerspectiveDiceSixFacesRandom,
  GiCrystalBall,
  GiHouse,
  GiModernCity
} from 'react-icons/gi';
import { BsGrid3X3, BsCalendarDate, BsPersonVcard } from 'react-icons/bs';
import { MdOutlineGridOn, MdOutlinePhoneAndroid, MdOutlineLocationOn } from 'react-icons/md';
import { TbZodiacAquarius } from 'react-icons/tb';

interface NumerologyServiceIcon {
  id: string;
  title: string;
  icon: React.ReactNode;
  link: string;
}

const numerologyServices: NumerologyServiceIcon[] = [
  {
    id: 'name-correction',
    title: 'Name Correction',
    icon: <FaRegEdit size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'future-forecasts',
    title: 'Future Forecasts',
    icon: <GiCrystalBall size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'baby-names',
    title: 'Baby Names',
    icon: <FaRegHeart size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'business-name',
    title: 'Business Name',
    icon: <FaRegBuilding size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'compatibility-checking',
    title: 'Compatibility Checking',
    icon: <FaUsers size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'personal-year',
    title: 'Personal Year',
    icon: <BsCalendarDate size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'lucky-numbers',
    title: 'Lucky Numbers',
    icon: <GiPerspectiveDiceSixFacesRandom size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'phone-numbers',
    title: 'Phone Numbers',
    icon: <MdOutlinePhoneAndroid size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'personality-analysis',
    title: 'Personality Analysis',
    icon: <FaUserCheck size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'destiny-number',
    title: 'Destiny Number',
    icon: <FaRegCompass size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'grid-analysis',
    title: 'Grid Analysis',
    icon: <BsGrid3X3 size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'on-site-visits',
    title: 'On-Site Visits',
    icon: <MdOutlineLocationOn size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'dasha-calculation',
    title: 'Dasha Calculation',
    icon: <FaRegClock size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'mobile-bank-car',
    title: 'Mobile/Bank/Car',
    icon: <FaRegCreditCard size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'remedial-measures',
    title: 'Remedial Measures',
    icon: <FaRegLightbulb size={24} className="text-mystic-gold" />,
    link: '/numerology'
  },
  {
    id: 'plot-selection',
    title: 'Plot Selection',
    icon: <FaMapMarkerAlt size={24} className="text-mystic-gold" />,
    link: '/vastu'
  },
  {
    id: 'home-vastu',
    title: 'Home Vastu',
    icon: <GiHouse size={24} className="text-mystic-gold" />,
    link: '/vastu'
  },
  {
    id: 'business-vastu',
    title: 'Business Vastu',
    icon: <GiModernCity size={24} className="text-mystic-gold" />,
    link: '/vastu'
  }
];

interface NumerologyIconGridProps {
  columns?: number;
  showTitle?: boolean;
  iconSize?: number;
  className?: string;
  filter?: 'all' | 'numerology' | 'vastu';
}

const NumerologyIconGrid: React.FC<NumerologyIconGridProps> = ({
  columns = 4,
  showTitle = true,
  iconSize = 24,
  className = '',
  filter = 'all'
}) => {
  // Filter services based on the filter prop
  const filteredServices = filter === 'all'
    ? numerologyServices
    : numerologyServices.filter(service =>
        filter === 'numerology'
          ? service.link === '/numerology'
          : service.link === '/vastu'
      );

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} gap-4 ${className}`}>
      {filteredServices.map((service) => (
        <Link
          key={service.id}
          to={service.link}
          className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="h-16 w-16 rounded-full bg-dusty-lavender/10 flex items-center justify-center mb-2">
            {React.cloneElement(service.icon as React.ReactElement, { size: iconSize })}
          </div>
          {showTitle && (
            <span className="text-center text-sm font-medium text-cool-gray">{service.title}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default NumerologyIconGrid;
