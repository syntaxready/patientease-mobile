
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
      <img src={icon} alt={title} className="w-16 h-16 mb-3 object-contain" />
      <h3 className="text-sm text-center font-medium text-pmc-dark">{title}</h3>
    </div>
  );
};

export default ServiceCard;
