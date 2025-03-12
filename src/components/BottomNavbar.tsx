
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Home, Pill, FileText, ClipboardList } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

const BottomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: Home 
    },
    { 
      path: '/appointments', 
      label: 'Appointments', 
      icon: Calendar 
    },
    { 
      path: '/prescriptions', 
      label: 'Prescriptions', 
      icon: Pill 
    },
    { 
      path: '/test-results', 
      label: 'Results', 
      icon: FileText 
    },
    { 
      path: '/history', 
      label: 'History', 
      icon: ClipboardList 
    }
  ];

  if (!isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-3 px-6 bg-white border-b border-gray-200">
        <div className="flex items-center">
          <Logo size="small" className="mr-6" />
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button 
                key={item.path}
                className={`flex items-center space-x-1 font-medium ${location.pathname === item.path ? 'text-pmc-blue' : 'text-gray-600'}`}
                onClick={() => navigate(item.path)}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-pmc-dark font-medium">JD</span>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button 
          key={item.path}
          className={`bottom-nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <item.icon className="bottom-nav-icon" size={20} />
          <span className="bottom-nav-text">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavbar;
