import { useState } from 'react';
import { Calendar, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Dashboard from '@/components/Dashboard';
import MemberCounter from '@/components/MemberCounter';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-mystic-gold/20 to-dusty-lavender/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in opacity-0">
                Admin <span className="text-mystic-gold">Dashboard</span>
              </h1>
              <p className="text-cool-gray max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
                Monitor your business metrics and member activity
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 animate-fade-in opacity-0" style={{ animationDelay: '450ms' }}>
              <MemberCounter className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="p-6 bg-mystic-gold text-white">
                  <h3 className="font-semibold">Admin Panel</h3>
                </div>
                
                <nav className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeTab === 'dashboard' 
                            ? 'bg-mystic-gold/10 text-mystic-gold' 
                            : 'text-charcoal hover:bg-gray-100'
                        }`}
                      >
                        <BarChart3 size={18} className="mr-3" />
                        <span>Dashboard</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('members')}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeTab === 'members' 
                            ? 'bg-mystic-gold/10 text-mystic-gold' 
                            : 'text-charcoal hover:bg-gray-100'
                        }`}
                      >
                        <Users size={18} className="mr-3" />
                        <span>Members</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('appointments')}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeTab === 'appointments' 
                            ? 'bg-mystic-gold/10 text-mystic-gold' 
                            : 'text-charcoal hover:bg-gray-100'
                        }`}
                      >
                        <Calendar size={18} className="mr-3" />
                        <span>Appointments</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')}
                        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                          activeTab === 'settings' 
                            ? 'bg-mystic-gold/10 text-mystic-gold' 
                            : 'text-charcoal hover:bg-gray-100'
                        }`}
                      >
                        <Settings size={18} className="mr-3" />
                        <span>Settings</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <button className="w-full flex items-center p-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                      <LogOut size={18} className="mr-3" />
                      <span>Logout</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-9 lg:col-span-10">
              {activeTab === 'dashboard' && (
                <Dashboard />
              )}
              
              {activeTab === 'members' && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Member Management</h2>
                  <p className="text-charcoal/70">
                    This section will display member management functionality.
                  </p>
                  
                  <div className="mt-8 h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Users size={40} className="text-charcoal/30 mx-auto mb-2" />
                      <p className="text-charcoal/50">Member list will be displayed here</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'appointments' && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Appointment Calendar</h2>
                  <p className="text-charcoal/70">
                    This section will display appointment management functionality.
                  </p>
                  
                  <div className="mt-8 h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Calendar size={40} className="text-charcoal/30 mx-auto mb-2" />
                      <p className="text-charcoal/50">Appointment calendar will be displayed here</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                  <p className="text-charcoal/70">
                    This section will display account settings functionality.
                  </p>
                  
                  <div className="mt-8 h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Settings size={40} className="text-charcoal/30 mx-auto mb-2" />
                      <p className="text-charcoal/50">Settings options will be displayed here</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardPage;
