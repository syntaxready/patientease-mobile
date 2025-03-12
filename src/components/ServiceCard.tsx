
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-2" />
      <h3 className="text-xs text-center font-medium text-pmc-dark">{title}</h3>
    </div>
  );
};

export default ServiceCard;
