
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import AppointmentCard from '@/components/AppointmentCard';
import { Plus } from 'lucide-react';

const Appointments = () => {
  const navigate = useNavigate();
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
      <div className="flex mb-6 border rounded-lg overflow-hidden">
        {(['all', 'upcoming', 'completed', 'canceled'] as const).map((status) => (
          <button 
            key={status}
            className={`flex-1 py-2 text-sm ${filterStatus === status 
              ? 'bg-pmc-blue text-white' 
              : 'bg-white text-gray-600'}`}
            onClick={() => setFilterStatus(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
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

      <div className="fixed bottom-20 right-4">
        <button 
          className="h-12 w-12 rounded-full bg-pmc-blue text-white flex items-center justify-center shadow-lg"
          onClick={() => navigate('/appointments/new')}
        >
          <Plus />
        </button>
      </div>
    </MobileLayout>
  );
};

export default Appointments;
