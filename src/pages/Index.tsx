
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import Logo from '@/components/Logo';
import AppointmentCard from '@/components/AppointmentCard';
import { Calendar, FileText, Pill, ClipboardList, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

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

  return (
    <MobileLayout>
      {isMobile && (
        <div className="flex items-center justify-between mb-6">
          <Logo />
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-pmc-dark font-medium">JD</span>
          </div>
        </div>
      )}

      <div className={`mt-${isMobile ? '0' : '20'}`}>
        <h2 className="text-xl font-semibold text-pmc-dark mb-3">Welcome Back, John</h2>
        <p className="text-gray-600 mb-6">How can we help you today?</p>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-4' : 'grid-cols-4 md:grid-cols-8'} gap-3 mb-8`}>
        {quickActions.map((action) => (
          <div 
            key={action.title}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(action.path)}
          >
            <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mb-1`}>
              <action.icon className="text-pmc-blue" size={20} />
            </div>
            <span className="text-xs text-center">{action.title}</span>
          </div>
        ))}
      </div>

      <div className={`grid ${isMobile ? '' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
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

        <div className="mt-8 md:mt-0">
          <h3 className="font-medium text-pmc-dark mb-3">Medical Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div onClick={() => navigate('/services')} className="bg-blue-50 rounded-lg p-4 flex items-center cursor-pointer">
              <img 
                src="/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png" 
                alt="Medical Services" 
                className="w-16 h-16 mr-3 object-contain" 
              />
              <div>
                <h4 className="font-medium text-pmc-dark">Explore Our Services</h4>
                <p className="text-xs text-gray-600">View all available treatments</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 flex items-center cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3">
                <Calendar className="text-pmc-blue" size={24} />
              </div>
              <div>
                <h4 className="font-medium text-pmc-dark">Book a Health Check</h4>
                <p className="text-xs text-gray-600">Preventive care options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Index;
