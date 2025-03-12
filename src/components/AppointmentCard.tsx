
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppointmentProps {
  date: string;
  time: string;
  doctor: string;
  department: string;
  status: 'upcoming' | 'completed' | 'canceled';
  onClick?: () => void;
}

const AppointmentCard: React.FC<AppointmentProps> = ({
  date,
  time,
  doctor,
  department,
  status,
  onClick
}) => {
  const isMobile = useIsMobile();
  
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    canceled: 'bg-red-100 text-red-800'
  };

  const statusLabels = {
    upcoming: 'Upcoming',
    completed: 'Completed',
    canceled: 'Canceled'
  };

  return (
    <div 
      className="card cursor-pointer hover:shadow-lg transition-shadow active:bg-gray-50" 
      onClick={onClick}
    >
      <div className={`flex ${isMobile ? 'flex-col' : 'justify-between items-start'} mb-2`}>
        <div className={isMobile ? 'mb-2' : ''}>
          <p className="font-semibold text-pmc-dark">{date}</p>
          <p className="text-gray-600">{time}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]} ${isMobile ? 'self-start' : ''}`}>
          {statusLabels[status]}
        </span>
      </div>
      <div className="mt-2">
        <p className="font-medium">Dr. {doctor}</p>
        <p className="text-sm text-gray-600">{department}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
