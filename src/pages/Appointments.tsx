
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import AppointmentCard from '@/components/AppointmentCard';
import { Plus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Appointments = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [filterStatus, setFilterStatus] = useState<'all' | 'upcoming' | 'completed' | 'canceled'>('all');

  const appointments = [
    {
      id: 1,
      date: 'Aug 15, 2023',
      time: '10:30 AM',
      doctor: 'Jane Smith',
      department: 'Cardiology',
      status: 'upcoming' as const
    },
    {
      id: 2,
      date: 'Aug 10, 2023',
      time: '09:00 AM',
      doctor: 'Michael Johnson',
      department: 'General Practice',
      status: 'completed' as const
    },
    {
      id: 3,
      date: 'Jul 28, 2023',
      time: '02:15 PM',
      doctor: 'Sarah Williams',
      department: 'Dermatology',
      status: 'completed' as const
    },
    {
      id: 4,
      date: 'Jul 15, 2023',
      time: '11:45 AM',
      doctor: 'Robert Brown',
      department: 'Orthopedics',
      status: 'canceled' as const
    }
  ];

  const filteredAppointments = filterStatus === 'all' 
    ? appointments 
    : appointments.filter(appointment => appointment.status === filterStatus);

  return (
    <MobileLayout title="Appointments">
      {/* Responsive filter buttons */}
      <div className="flex mb-6 border rounded-lg overflow-hidden flex-wrap sm:flex-nowrap">
        {(['all', 'upcoming', 'completed', 'canceled'] as const).map((status) => (
          <button 
            key={status}
            className={`py-2 text-sm ${isMobile ? 'flex-1 min-w-[25%]' : 'flex-1'} ${
              filterStatus === status 
                ? 'bg-pmc-blue text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setFilterStatus(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Responsive appointment list */}
      <div className="space-y-4 pb-20">
        {filteredAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            date={appointment.date}
            time={appointment.time}
            doctor={appointment.doctor}
            department={appointment.department}
            status={appointment.status}
            onClick={() => navigate(`/appointments/details/${appointment.id}`)}
          />
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No {filterStatus} appointments found</p>
        </div>
      )}

      {/* Floating action button - positioned better for mobile */}
      <div className="fixed bottom-20 right-4 z-10">
        <button 
          className="h-14 w-14 rounded-full bg-pmc-blue text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors"
          onClick={() => navigate('/appointments/new')}
          aria-label="Add new appointment"
        >
          <Plus size={24} />
        </button>
      </div>
    </MobileLayout>
  );
};

export default Appointments;
