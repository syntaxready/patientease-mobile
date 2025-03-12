
import React from 'react';
import { FileText, Calendar, Download } from 'lucide-react';

interface TestResultCardProps {
  testName: string;
  date: string;
  status: 'normal' | 'abnormal' | 'pending';
  department: string;
  hasReport: boolean;
  onClick?: () => void;
}

const TestResultCard: React.FC<TestResultCardProps> = ({
  testName,
  date,
  status,
  department,
  hasReport,
  onClick
}) => {
  const statusColors = {
    normal: 'text-green-600',
    abnormal: 'text-red-600',
    pending: 'text-yellow-600'
  };

  return (
    <div className="card cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <div className="flex justify-between">
        <h3 className="font-semibold text-pmc-dark">{testName}</h3>
        <span className={`font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 mt-2">
        <Calendar size={16} className="mr-1" />
        <span>{date}</span>
      </div>
      
      <p className="text-sm text-gray-600 mt-1">{department}</p>
      
      {hasReport && (
        <div className="mt-3 flex items-center text-pmc-blue">
          <Download size={16} className="mr-1" />
          <span className="text-sm font-medium">Download Report</span>
        </div>
      )}
    </div>
  );
};

export default TestResultCard;
