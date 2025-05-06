import { useState } from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Star, 
  Home, 
  Calculator, 
  BarChart3, 
  Activity 
} from 'lucide-react';
import MemberCounter from './MemberCounter';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  color?: string;
}

const StatCard = ({ title, value, icon, trend, color = 'bg-mystic-gold' }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-charcoal/60 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-charcoal">{value}</h3>
          
          {trend !== undefined && (
            <div className={`flex items-center mt-2 text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              <span className="mr-1">{trend >= 0 ? '+' : ''}{trend}%</span>
              <TrendingUp size={14} className={trend >= 0 ? '' : 'rotate-180'} />
            </div>
          )}
        </div>
        
        <div className={`${color} text-white p-3 rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface DashboardProps {
  className?: string;
}

const Dashboard = ({ className = '' }: DashboardProps) => {
  // Placeholder data - in a real app, this would come from your backend
  const [stats] = useState({
    consultations: 128,
    consultationTrend: 12,
    revenue: '₹45,800',
    revenueTrend: 8,
    ratings: 4.8,
    ratingTrend: 2,
    numerologyClients: 76,
    vastuClients: 52
  });

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Member Counter Card */}
        <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-charcoal/60 text-sm font-medium mb-1">Total Members</p>
              <MemberCounter showIcon={false} />
            </div>
            
            <div className="bg-mystic-gold text-white p-3 rounded-lg">
              <Users size={20} />
            </div>
          </div>
        </div>
        
        {/* Consultations Card */}
        <StatCard 
          title="Consultations" 
          value={stats.consultations} 
          icon={<Calendar size={20} />}
          trend={stats.consultationTrend}
        />
        
        {/* Revenue Card */}
        <StatCard 
          title="Revenue" 
          value={stats.revenue} 
          icon={<BarChart3 size={20} />}
          trend={stats.revenueTrend}
          color="bg-teal-500"
        />
        
        {/* Ratings Card */}
        <StatCard 
          title="Avg. Rating" 
          value={stats.ratings} 
          icon={<Star size={20} />}
          trend={stats.ratingTrend}
          color="bg-dusty-lavender"
        />
      </div>
      
      {/* Service Distribution */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Service Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-mystic-gold/20 flex items-center justify-center text-mystic-gold mr-4">
              <Calculator size={24} />
            </div>
            <div>
              <p className="text-sm text-charcoal/60">Numerology</p>
              <p className="text-xl font-bold">{stats.numerologyClients} clients</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500 mr-4">
              <Home size={24} />
            </div>
            <div>
              <p className="text-sm text-charcoal/60">Vastu</p>
              <p className="text-xl font-bold">{stats.vastuClients} clients</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-dusty-lavender/20 flex items-center justify-center text-dusty-lavender mr-4">
              <Star size={24} />
            </div>
            <div>
              <p className="text-sm text-charcoal/60">Astrology</p>
              <p className="text-xl font-bold">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Activity Chart Placeholder */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Monthly Activity</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-mystic-gold/10 text-mystic-gold rounded-md">This Month</button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-charcoal/70 rounded-md">Last Month</button>
          </div>
        </div>
        
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <Activity size={40} className="text-charcoal/30 mx-auto mb-2" />
            <p className="text-charcoal/50">Activity chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
