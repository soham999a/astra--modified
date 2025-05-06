import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaOm, 
  FaPencilAlt, 
  FaRegCalendarAlt, 
  FaRegStar, 
  FaBuilding,
  FaRegHeart,
  FaRegUser,
  FaRegCompass,
  FaRegClock,
  FaRegCreditCard,
  FaMapMarkerAlt,
  FaHome,
  FaIndustry,
  FaChartLine
} from 'react-icons/fa';
import { 
  MdGridOn, 
  MdPhoneAndroid, 
  MdOutlineLocationOn,
  MdOutlineAnalytics
} from 'react-icons/md';
import { BsGrid3X3, BsCalendarDate } from 'react-icons/bs';
import { GiCrystalBall, GiHouse } from 'react-icons/gi';
import { RiNumber2, RiNumber5, RiNumber8 } from 'react-icons/ri';

interface ServiceIconProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  color?: string;
  borderColor?: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ 
  icon, 
  title, 
  link, 
  color = 'text-mystic-gold', 
  borderColor = 'border-mystic-gold/30',
  className = ''
}) => {
  return (
    <Link 
      to={link} 
      className={`flex flex-col items-center justify-center ${className}`}
    >
      <div className={`w-14 h-14 rounded-full ${borderColor} border flex items-center justify-center mb-2 ${color}`}>
        {icon}
      </div>
      <span className="text-xs text-center text-cool-gray font-medium max-w-[80px]">{title}</span>
    </Link>
  );
};

const LoShuGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1 w-24 h-24 border border-mystic-gold/30 rounded-md">
      <div className="flex items-center justify-center text-lg font-semibold">4</div>
      <div className="flex items-center justify-center text-lg font-semibold">9</div>
      <div className="flex items-center justify-center text-lg font-semibold">2</div>
      <div className="flex items-center justify-center text-lg font-semibold">3</div>
      <div className="flex items-center justify-center text-lg font-semibold bg-mystic-gold/10">5</div>
      <div className="flex items-center justify-center text-lg font-semibold">7</div>
      <div className="flex items-center justify-center text-lg font-semibold">8</div>
      <div className="flex items-center justify-center text-lg font-semibold">1</div>
      <div className="flex items-center justify-center text-lg font-semibold">6</div>
    </div>
  );
};

const VedicNumerologyGrid: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with Om symbol and Lo-Shu grid */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <div className="w-24 h-24 rounded-full border-2 border-mystic-gold/30 flex items-center justify-center mb-2">
            <FaOm size={48} className="text-mystic-gold" />
          </div>
          <h3 className="text-xl font-semibold">Vedic Numerology</h3>
        </div>
        
        <div className="flex flex-col items-center">
          <LoShuGrid />
          <h3 className="text-xl font-semibold mt-2">Lo-Shu Grid</h3>
        </div>
      </div>
      
      {/* Main services grid - top row */}
      <div className="border-2 border-blue-500/30 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <ServiceIcon 
            icon={<FaPencilAlt size={24} />} 
            title="Name Correction" 
            link="/numerology" 
          />
          <ServiceIcon 
            icon={<GiCrystalBall size={24} />} 
            title="Future Forecasts" 
            link="/numerology" 
          />
          <ServiceIcon 
            icon={<FaRegHeart size={24} />} 
            title="Baby Names" 
            link="/numerology" 
          />
          <ServiceIcon 
            icon={<FaBuilding size={24} />} 
            title="Business Name" 
            link="/numerology" 
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceIcon 
            icon={<FaRegHeart size={24} />} 
            title="Compatibility Checking" 
            link="/numerology" 
          />
          <ServiceIcon 
            icon={<BsCalendarDate size={24} />} 
            title="Personal Year" 
            link="/numerology" 
          />
          <ServiceIcon 
            icon={<FaRegStar size={24} />} 
            title="Lucky Numbers" 
            link="/numerology" 
          />
          <ServiceIcon 
            icon={<MdPhoneAndroid size={24} />} 
            title="Phone Numbers" 
            link="/numerology" 
          />
        </div>
      </div>
      
      {/* Bottom grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <ServiceIcon 
          icon={<FaRegUser size={24} />} 
          title="Personality Analysis" 
          link="/numerology" 
          color="text-teal-500"
          borderColor="border-teal-500/30"
        />
        <ServiceIcon 
          icon={<FaRegCompass size={24} />} 
          title="Destiny Number Reading" 
          link="/numerology" 
          color="text-red-500"
          borderColor="border-red-500/30"
        />
        <ServiceIcon 
          icon={<MdGridOn size={24} />} 
          title="Grid Analysis" 
          link="/numerology" 
          color="text-blue-500"
          borderColor="border-blue-500/30"
        />
        <ServiceIcon 
          icon={<MdOutlineLocationOn size={24} />} 
          title="On-Site Visits" 
          link="/numerology" 
          color="text-purple-500"
          borderColor="border-purple-500/30"
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <ServiceIcon 
          icon={<FaRegClock size={24} />} 
          title="Dasha Calculation" 
          link="/numerology" 
        />
        <ServiceIcon 
          icon={<FaRegCreditCard size={24} />} 
          title="Mobile/Bank/Car Numbers" 
          link="/numerology" 
        />
        <ServiceIcon 
          icon={<MdOutlineAnalytics size={24} />} 
          title="Remedial Measures" 
          link="/numerology" 
        />
        <ServiceIcon 
          icon={<FaMapMarkerAlt size={24} />} 
          title="Plot Selection Vastu" 
          link="/vastu" 
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ServiceIcon 
          icon={<FaHome size={24} />} 
          title="Home Vastu" 
          link="/vastu" 
        />
        <ServiceIcon 
          icon={<FaBuilding size={24} />} 
          title="Business Vastu" 
          link="/vastu" 
        />
        <ServiceIcon 
          icon={<FaIndustry size={24} />} 
          title="Factory/Industrial Vastu" 
          link="/vastu" 
        />
        <ServiceIcon 
          icon={<FaChartLine size={24} />} 
          title="Plot Selection Advice" 
          link="/vastu" 
        />
      </div>
    </div>
  );
};

export default VedicNumerologyGrid;
