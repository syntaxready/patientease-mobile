
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, Upload, Clock } from 'lucide-react';
import { toast } from 'sonner';

const History = () => {
  const navigate = useNavigate();
  
  const handleUpload = () => {
    // This would trigger file selection in a real app
    toast.success("File upload feature would open here");
  };

  const medicalRecords = [
    { id: 1, name: 'Vaccination Record', date: 'Jun 15, 2023', type: 'PDF' },
    { id: 2, name: 'Allergy Test Results', date: 'Mar 10, 2023', type: 'PDF' },
    { id: 3, name: 'Previous Surgery Report', date: 'Dec 05, 2022', type: 'PDF' },
  ];

  const surgicalHistory = [
    { procedure: 'Appendectomy', date: 'Dec 05, 2022', hospital: 'PMC Hospital' },
  ];

  const medicalConditions = [
    { condition: 'Hypertension', diagnosedDate: 'Jan 2020', status: 'Ongoing' },
    { condition: 'Allergic Rhinitis', diagnosedDate: 'Mar 2019', status: 'Managed' }
  ];

  return (
    <MobileLayout title="Medical History">
      <Tabs defaultValue="records">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="records">Records</TabsTrigger>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
          <TabsTrigger value="surgical">Surgical</TabsTrigger>
        </TabsList>
        
        <TabsContent value="records" className="space-y-4">
          <div className="flex justify-end">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-pmc-blue text-pmc-blue"
              onClick={handleUpload}
            >
              <Upload size={16} />
              Upload Record
            </Button>
          </div>
          
          {medicalRecords.map((record) => (
            <div 
              key={record.id}
              className="flex items-center p-4 border rounded-lg"
            >
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <File className="text-pmc-blue" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{record.name}</h3>
                <p className="text-sm text-gray-600">{record.date} · {record.type}</p>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="conditions" className="space-y-4">
          {medicalConditions.map((condition, index) => (
            <div 
              key={index}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-medium text-pmc-dark">{condition.condition}</h3>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <Clock size={16} className="mr-1" />
                <span>Diagnosed: {condition.diagnosedDate}</span>
              </div>
              <div className="mt-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  condition.status === 'Ongoing' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {condition.status}
                </span>
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="surgical" className="space-y-4">
          {surgicalHistory.map((surgery, index) => (
            <div 
              key={index}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-medium text-pmc-dark">{surgery.procedure}</h3>
              <p className="text-sm text-gray-600 mt-1">{surgery.date}</p>
              <p className="text-sm mt-1">{surgery.hospital}</p>
            </div>
          ))}
          
          {surgicalHistory.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No surgical history available</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </MobileLayout>
  );
};

export default History;
