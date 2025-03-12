
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import PrescriptionCard from '@/components/PrescriptionCard';

const Prescriptions = () => {
  const navigate = useNavigate();
  
  const prescriptions = [
    {
      id: 1,
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Take 1 capsule 3 times a day',
      prescribedDate: 'Aug 10, 2023',
      refills: 2
    },
    {
      id: 2,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Take 1 tablet daily in the morning',
      prescribedDate: 'Jul 15, 2023',
      refills: 5
    },
    {
      id: 3,
      medication: 'Ibuprofen',
      dosage: '600mg',
      frequency: 'Take 1 tablet every 6 hours as needed for pain',
      prescribedDate: 'Aug 5, 2023',
      refills: 0
    }
  ];

  return (
    <MobileLayout title="Prescriptions">
      <div className="space-y-4">
        {prescriptions.map((prescription) => (
          <PrescriptionCard
            key={prescription.id}
            medication={prescription.medication}
            dosage={prescription.dosage}
            frequency={prescription.frequency}
            prescribedDate={prescription.prescribedDate}
            refills={prescription.refills}
            onClick={() => navigate(`/prescriptions/${prescription.id}`)}
          />
        ))}
      </div>
    </MobileLayout>
  );
};

export default Prescriptions;
