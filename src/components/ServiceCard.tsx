
import React from 'react';

interface ServiceCardProps {
  title: string;
  icon: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center p-4 md:p-6 border rounded-lg hover:shadow-md transition-all cursor-pointer bg-white"
      onClick={onClick}
    >
      <img src={icon} alt={title} className="w-12 h-12 md:w-16 md:h-16 mb-3 object-contain" />
      <h3 className="text-xs md:text-sm text-center font-medium text-pmc-dark">{title}</h3>
    </div>
  );
};

export default ServiceCard;
