import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ServiceFeature {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

interface ServiceTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  link: string;
}

interface ServiceComparisonTableProps {
  serviceType: 'numerology' | 'vastu' | 'astrology';
  features: ServiceFeature[];
  tiers: ServiceTier[];
}

const ServiceComparisonTable = ({
  serviceType,
  features,
  tiers
}: ServiceComparisonTableProps) => {
  // Color mapping based on service type
  const colorMap = {
    numerology: 'from-mystic-gold/20 to-dusty-lavender/20',
    vastu: 'from-teal-500/20 to-celestial-blue/20',
    astrology: 'from-dusty-lavender/20 to-celestial-blue/20'
  };

  const buttonColorMap = {
    numerology: 'bg-mystic-gold hover:bg-mystic-gold/90',
    vastu: 'bg-teal-500 hover:bg-teal-600',
    astrology: 'bg-dusty-lavender hover:bg-dusty-lavender/90'
  };

  return (
    <div className="w-full overflow-auto">
      <div className="min-w-[640px]">
        {/* Service tiers */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="col-span-1"></div>
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`col-span-1 rounded-lg p-4 text-center relative ${
                tier.recommended 
                  ? `bg-gradient-to-br ${colorMap[serviceType]} border border-mystic-gold/30` 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-max px-3 py-1 bg-mystic-gold text-white text-xs rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold mb-2">{tier.price}</p>
              <p className="text-sm text-charcoal/70 mb-4">{tier.description}</p>
              <Button 
                className={`w-full ${buttonColorMap[serviceType]} text-white`}
                asChild
              >
                <Link to={tier.link}>Select</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Features comparison table */}
        <Table className="border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader className={`bg-gradient-to-r ${colorMap[serviceType]}`}>
            <TableRow>
              <TableHead className="w-[300px] font-medium">Features</TableHead>
              {tiers.map((tier, index) => (
                <TableHead key={index} className="text-center font-medium">
                  {tier.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell className="text-center">
                  {feature.basic ? (
                    <Check className="mx-auto h-5 w-5 text-green-500" />
                  ) : (
                    <X className="mx-auto h-5 w-5 text-red-300" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.standard ? (
                    <Check className="mx-auto h-5 w-5 text-green-500" />
                  ) : (
                    <X className="mx-auto h-5 w-5 text-red-300" />
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {feature.premium ? (
                    <Check className="mx-auto h-5 w-5 text-green-500" />
                  ) : (
                    <X className="mx-auto h-5 w-5 text-red-300" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceComparisonTable;
