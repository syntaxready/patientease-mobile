
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import Logo from '@/components/Logo';
import AppointmentCard from '@/components/AppointmentCard';
import { Calendar, FileText, Pill, ClipboardList, ChevronRight, Heart, AlertTriangle, Settings, User } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const quickActions = [
    { 
      title: 'Book Appointment', 
      icon: Calendar, 
      path: '/appointments/new',
      color: 'bg-blue-100'
    },
    { 
      title: 'View Prescriptions', 
      icon: Pill, 
      path: '/prescriptions',
      color: 'bg-green-100'
    },
    { 
      title: 'Test Results', 
      icon: FileText, 
      path: '/test-results',
      color: 'bg-purple-100'
    },
    { 
      title: 'Medical History', 
      icon: ClipboardList, 
      path: '/history',
      color: 'bg-orange-100'
    },
  ];

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // Close the dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#profile-button') && !target.closest('#profile-dropdown')) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MobileLayout>
      <div className="flex items-center justify-between mb-6">
        <Logo />
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => navigate('/settings')} 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-pmc-dark hover:bg-gray-200 transition-colors"
          >
            <Settings size={20} />
          </button>
          <div className="relative">
            <button 
              id="profile-button"
              onClick={toggleProfileDropdown} 
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-pmc-dark hover:bg-gray-300 transition-colors"
              aria-expanded={showProfileDropdown}
              aria-haspopup="true"
            >
              <span className="text-pmc-dark font-medium">JD</span>
            </button>

            {showProfileDropdown && (
              <div 
                id="profile-dropdown"
                className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50 overflow-hidden"
              >
                <div className="p-4 border-b">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">John Doe</h4>
                      <p className="text-sm text-gray-600">john.doe@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-b">
                  <h5 className="text-xs uppercase text-gray-500 font-medium mb-2">Patient Information</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date of Birth:</span>
                      <span className="font-medium">04/12/1985</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Patient ID:</span>
                      <span className="font-medium">PMC-12345</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Blood Type:</span>
                      <span className="font-medium">O+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Primary Care:</span>
                      <span className="font-medium">Dr. Smith</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button 
                    onClick={() => navigate('/profile')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
                  >
                    <User size={16} className="mr-2" />
                    View Full Profile
                  </button>
                  <button 
                    onClick={() => {
                      localStorage.removeItem('isAuthenticated');
                      navigate('/auth');
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-pmc-dark mb-3">Welcome Back, John</h2>
      <p className="text-gray-600 mb-6">How can we help you today?</p>

      <div className="grid grid-cols-4 gap-3 mb-8">
        {quickActions.map((action) => (
          <div 
            key={action.title}
            className="flex flex-col items-center"
            onClick={() => navigate(action.path)}
          >
            <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mb-1`}>
              <action.icon className="text-pmc-blue" size={20} />
            </div>
            <span className="text-xs text-center">{action.title}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-pmc-dark">Upcoming Appointments</h3>
          <button 
            className="flex items-center text-pmc-blue text-sm"
            onClick={() => navigate('/appointments')}
          >
            View All <ChevronRight size={16} />
          </button>
        </div>

        <AppointmentCard
          date="Aug 15, 2023"
          time="10:30 AM"
          doctor="Jane Smith"
          department="Cardiology"
          status="upcoming"
          onClick={() => navigate('/appointments/details')}
        />
      </div>

      <div 
        onClick={() => navigate('/report-symptoms')}
        className="bg-red-50 rounded-lg p-4 mb-6 flex items-center cursor-pointer hover:shadow-md transition-shadow"
      >
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
          <AlertTriangle className="text-red-500" size={24} />
        </div>
        <div>
          <h4 className="font-medium text-pmc-dark">Not Feeling Well?</h4>
          <p className="text-xs text-gray-600">Click here to report your symptoms to our medical team</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-medium text-pmc-dark mb-3">Medical Services</h3>
        <div className="grid grid-cols-2 gap-4">
          <div onClick={() => navigate('/services')} className="bg-blue-50 rounded-lg p-4 flex items-center">
            <img 
              src="/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" 
              alt="Medical Services" 
              className="w-16 h-16 mr-3 object-contain" 
            />
            <div>
              <h4 className="font-medium text-pmc-dark">Explore Our Services</h4>
              <p className="text-xs text-gray-600">View all available treatments</p>
            </div>
          </div>
          <div 
            onClick={() => navigate('/health-check')} 
            className="bg-green-50 rounded-lg p-4 flex items-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3">
              <Heart className="text-pmc-blue" size={24} />
            </div>
            <div>
              <h4 className="font-medium text-pmc-dark">Book a Health Check</h4>
              <p className="text-xs text-gray-600">Preventive care options</p>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;
