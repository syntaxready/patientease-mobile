
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface PrescriptionCardProps {
  medication: string;
  dosage: string;
  frequency: string;
  prescribedDate: string;
  refills: number;
  onClick?: () => void;
}

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
  medication,
  dosage,
  frequency,
  prescribedDate,
  refills,
  onClick
}) => {
  return (
    <div className="card cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <h3 className="font-semibold text-pmc-blue mb-1">{medication}</h3>
      <p className="text-gray-800 mb-3">{dosage}</p>
      
      <div className="flex items-center text-sm text-gray-600 mb-1">
        <Clock size={16} className="mr-1" />
        <span>{frequency}</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Calendar size={16} className="mr-1" />
        <span>Prescribed: {prescribedDate}</span>
      </div>
      
      <div className="mt-2 pt-2 border-t">
        <span className={`text-sm font-medium ${refills > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {refills > 0 ? `Refills remaining: ${refills}` : 'No refills remaining'}
        </span>
      </div>
    </div>
  );
};

export default PrescriptionCard;
