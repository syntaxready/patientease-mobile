
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import TestResultCard from '@/components/TestResultCard';

const TestResults = () => {
  const navigate = useNavigate();
  
  const testResults = [
    {
      id: 1,
      testName: 'Complete Blood Count (CBC)',
      date: 'Aug 12, 2023',
      status: 'normal' as const,
      department: 'Laboratory & Diagnostics',
      hasReport: true
    },
    {
      id: 2,
      testName: 'Lipid Panel',
      date: 'Aug 12, 2023',
      status: 'abnormal' as const,
      department: 'Laboratory & Diagnostics',
      hasReport: true
    },
    {
      id: 3,
      testName: 'Chest X-ray',
      date: 'Jul 28, 2023',
      status: 'normal' as const,
      department: 'X-ray',
      hasReport: true
    },
    {
      id: 4,
      testName: 'Urinalysis',
      date: 'Jul 20, 2023',
      status: 'pending' as const,
      department: 'Laboratory & Diagnostics',
      hasReport: false
    }
  ];

  return (
    <MobileLayout title="Test Results">
      <div className="space-y-4">
        {testResults.map((result) => (
          <TestResultCard
            key={result.id}
            testName={result.testName}
            date={result.date}
            status={result.status}
            department={result.department}
            hasReport={result.hasReport}
            onClick={() => navigate(`/test-results/${result.id}`)}
          />
        ))}
      </div>
    </MobileLayout>
  );
};

export default TestResults;
