
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeartPulse, 
  Thermometer, 
  Pill, 
  Calendar, 
  Clock,
  Send
} from 'lucide-react';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

const SymptomsReport = () => {
  const navigate = useNavigate();
  const [symptomType, setSymptomType] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('');
  const [description, setDescription] = useState('');
  const [temperature, setTemperature] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const symptomTypes = [
    "Fever", 
    "Pain", 
    "Breathing Issues", 
    "Digestive Problems", 
    "Skin Issues", 
    "Mental Health", 
    "Injury", 
    "Other"
  ];

  const durations = [
    "Less than 24 hours",
    "1-3 days",
    "4-7 days",
    "More than a week",
    "More than a month"
  ];

  const severityLevels = [
    "Mild - Doesn't affect daily activities",
    "Moderate - Slightly affects daily activities",
    "Severe - Significantly affects daily activities",
    "Very Severe - Cannot perform daily activities"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!symptomType || !severity || !description) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      toast.success("Your symptoms have been reported. A healthcare professional will contact you soon.");
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <MobileLayout 
      title="Report Symptoms" 
      showBackButton 
      onBack={() => navigate('/')}
    >
      <div className="bg-red-50 p-4 rounded-lg mb-6 flex items-start">
        <HeartPulse className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
        <p className="text-sm text-gray-700">
          Report your symptoms for our medical team to review. If you're experiencing a medical emergency, please call emergency services immediately.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Type of Symptom <span className="text-red-500">*</span>
          </label>
          <Select 
            value={symptomType} 
            onValueChange={setSymptomType}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select symptom type" />
            </SelectTrigger>
            <SelectContent>
              {symptomTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <Select 
              value={duration} 
              onValueChange={setDuration}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How long?" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Temperature (°F)
            </label>
            <div className="relative">
              <Input
                type="number"
                placeholder="98.6"
                min="95"
                max="110"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="pl-10"
              />
              <Thermometer className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Severity <span className="text-red-500">*</span>
          </label>
          <Select 
            value={severity} 
            onValueChange={setSeverity}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="How severe is it?" />
            </SelectTrigger>
            <SelectContent>
              {severityLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Please describe your symptoms in detail. Include when they started, what makes them better or worse, and any other relevant information."
            className="w-full resize-none"
          />
        </div>

        <div className="pt-4 flex gap-4">
          <Button 
            type="button" 
            onClick={handleCancel}
            variant="outline"
            className="w-1/2"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="w-1/2 bg-pmc-blue hover:bg-pmc-blue/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                <Send size={16} className="mr-1" /> Submit Report
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="bg-blue-50 p-4 rounded-lg flex items-start">
          <Calendar className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-medium text-pmc-dark">Need an appointment?</h4>
            <p className="text-sm text-gray-600 mb-2">Based on your symptoms, you might want to see a doctor.</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-pmc-blue border-pmc-blue"
              onClick={() => navigate('/appointments/new')}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default SymptomsReport;
