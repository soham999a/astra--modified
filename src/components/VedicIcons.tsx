import React from 'react';
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
  FaChartLine,
  FaChild,
  FaHandHoldingHeart
} from 'react-icons/fa';
import {
  MdGridOn,
  MdPhoneAndroid,
  MdOutlineLocationOn,
  MdOutlineAnalytics,
  MdBusinessCenter,
  MdOutlineHomeWork
} from 'react-icons/md';
import { BsGrid3X3, BsCalendarDate } from 'react-icons/bs';
import { GiCrystalBall, GiHouse } from 'react-icons/gi';
import { RiNumber2, RiNumber5, RiNumber8 } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// Define all the Vedic Numerology service icons
export const vedicIcons = {
  // Numerology Icons
  om: <FaOm />,
  nameCorrection: <FaPencilAlt />,
  futureForecasts: <GiCrystalBall />,
  babyNames: <FaChild />,
  businessName: <MdBusinessCenter />,
  compatibilityChecking: <FaRegHeart />,
  personalYear: <BsCalendarDate />,
  luckyNumbers: <FaRegStar />,
  phoneNumbers: <MdPhoneAndroid />,
  personalityAnalysis: <FaRegUser />,
  destinyReading: <FaRegCompass />,
  gridAnalysis: <MdGridOn />,
  dashaCalculation: <FaRegClock />,
  bankNumbers: <FaRegCreditCard />,
  remedialMeasures: <MdOutlineAnalytics />,

  // Vastu Icons
  plotSelection: <FaMapMarkerAlt />,
  homeVastu: <FaHome />,
  businessVastu: <FaBuilding />,
  factoryVastu: <FaIndustry />,
  onSiteVisit: <MdOutlineLocationOn />,
  plotAdvice: <FaChartLine />,

  // Lo Shu Grid
  loShuGrid: <BsGrid3X3 />,
};

// Icon sizes
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

// Convert size string to number
export const getIconSize = (size: IconSize): number => {
  switch (size) {
    case 'xs': return 16;
    case 'sm': return 20;
    case 'md': return 24;
    case 'lg': return 32;
    case 'xl': return 48;
    default: return typeof size === 'number' ? size : 24;
  }
};

// Colors for different icon types
export const iconColors = {
  numerology: 'text-mystic-gold',
  vastu: 'text-teal-500',
  personality: 'text-blue-500',
  destiny: 'text-red-500',
  grid: 'text-purple-500',
  remedial: 'text-green-500',
  default: 'text-cool-gray'
};

// Border colors for different icon types
export const iconBorderColors = {
  numerology: 'border-mystic-gold/30',
  vastu: 'border-teal-500/30',
  personality: 'border-blue-500/30',
  destiny: 'border-red-500/30',
  grid: 'border-purple-500/30',
  remedial: 'border-green-500/30',
  default: 'border-cool-gray/30'
};

// Icon component props
interface VedicIconProps {
  icon: keyof typeof vedicIcons;
  size?: IconSize;
  color?: keyof typeof iconColors | string;
  className?: string;
}

// Reusable Vedic Icon component
export const VedicIcon: React.FC<VedicIconProps> = ({
  icon,
  size = 'md',
  color = 'default',
  className = ''
}) => {
  const iconSize = getIconSize(size);
  const iconColor = color in iconColors
    ? iconColors[color as keyof typeof iconColors]
    : color;

  return (
    <span className={`inline-flex ${iconColor} ${className}`}>
      {React.cloneElement(vedicIcons[icon], { size: iconSize })}
    </span>
  );
};

// Icon with circle background props
interface VedicIconCircleProps extends VedicIconProps {
  borderColor?: keyof typeof iconBorderColors | string;
  onClick?: () => void;
}

// Icon with circle background
export const VedicIconCircle: React.FC<VedicIconCircleProps> = ({
  icon,
  size = 'md',
  color = 'default',
  borderColor,
  className = '',
  onClick
}) => {
  const iconSize = getIconSize(size);
  const actualSize = typeof size === 'string' ? getIconSize(size) : size;
  const containerSize = Math.max(actualSize * 2, 40); // Ensure minimum size

  const iconColor = color in iconColors
    ? iconColors[color as keyof typeof iconColors]
    : color;

  const borderCol = borderColor
    ? (borderColor in iconBorderColors
        ? iconBorderColors[borderColor as keyof typeof iconBorderColors]
        : borderColor)
    : (color in iconBorderColors
        ? iconBorderColors[color as keyof typeof iconBorderColors]
        : iconBorderColors.default);

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border ${borderCol} ${className}`}
      style={{ width: containerSize, height: containerSize }}
      onClick={onClick}
    >
      <span className={iconColor}>
        {React.cloneElement(vedicIcons[icon], { size: iconSize })}
      </span>
    </div>
  );
};

// Icon with title props
interface VedicIconWithTitleProps extends VedicIconCircleProps {
  title: string;
  link?: string;
  titleClassName?: string;
}

// Icon with title component
export const VedicIconWithTitle: React.FC<VedicIconWithTitleProps> = ({
  icon,
  title,
  link,
  size = 'md',
  color = 'default',
  borderColor,
  className = '',
  titleClassName = '',
  onClick
}) => {
  const content = (
    <div className={`flex flex-col items-center ${className}`}>
      <VedicIconCircle
        icon={icon}
        size={size}
        color={color}
        borderColor={borderColor}
        className="mb-2"
        onClick={onClick}
      />
      <span className={`text-center text-sm font-medium ${titleClassName}`}>
        {title}
      </span>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="hover:-translate-y-1 transition-transform duration-300">
        {content}
      </Link>
    );
  }

  return content;
};

export default {
  VedicIcon,
  VedicIconCircle,
  VedicIconWithTitle,
  vedicIcons,
  iconColors,
  iconBorderColors,
  getIconSize
};
