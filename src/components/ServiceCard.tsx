
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="w-16 h-16 mb-2 flex items-center justify-center">
        <img 
          src={icon} 
          alt={title} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="text-xs text-center font-medium text-pmc-dark">
        {title}
      </h3>
    </div>
  );
};
