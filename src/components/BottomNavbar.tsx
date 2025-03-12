
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Home, Pill, FileText, ClipboardList } from 'lucide-react';

const BottomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
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
