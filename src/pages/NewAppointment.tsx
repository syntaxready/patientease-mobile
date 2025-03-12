
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const NewAppointment = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [reason, setReason] = useState('');

  const departments = [
    "General Medical Practice",
    "General Surgery",
    "Paediatrics",
    "Neonatal Intensive Care Unit",
    "Intensive Care Unit",
    "Obstetrics & Gynaecology",
    "Family Planning",
    "Assisted Reproductive Technology",
    "Laparoscopic Surgery",
    "Internal Medicine",
    "Dermatology",
    "Orthopaedics",
    "ENT",
    "Ultra Sound Scan",
    "X-ray",
    "Laboratory & Diagnostics",
    "Psychiatry",
    "Dentistry",
    "Physiotherapy",
    "Work & School Fitness"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !department) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Here would be the API call to book the appointment
    toast.success("Appointment request submitted successfully!");
    setTimeout(() => {
      navigate('/appointments');
    }, 1500);
  };

  return (
    <MobileLayout 
      title="Book Appointment" 
      showBackButton 
      onBack={() => navigate('/appointments')}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Department <span className="text-pmc-red">*</span>
          </label>
          <Select 
            value={department} 
            onValueChange={setDepartment}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Preferred Date <span className="text-pmc-red">*</span>
          </label>
          <div className="relative">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10"
              min={new Date().toISOString().split('T')[0]}
            />
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Reason for Visit
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pmc-blue"
            placeholder="Please describe your symptoms or reason for the appointment"
          />
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full bg-pmc-blue hover:bg-pmc-blue/90 text-white"
          >
            Request Appointment
          </Button>
        </div>
      </form>
    </MobileLayout>
  );
};

export default NewAppointment;
