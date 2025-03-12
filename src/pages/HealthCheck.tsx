
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Calendar, Heart, Stethoscope, Clipboard, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const HealthCheck = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [packageType, setPackageType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const healthPackages = [
    { id: 'basic', name: 'Basic Health Check', price: '$50', icon: Stethoscope, description: 'General physical examination, blood pressure, and basic blood work.' },
    { id: 'comprehensive', name: 'Comprehensive Checkup', price: '$150', icon: Clipboard, description: 'Complete physical, blood tests, vision, hearing tests, and ECG.' },
    { id: 'premium', name: 'Premium Executive', price: '$300', icon: Activity, description: 'All comprehensive tests plus cancer screenings and advanced cardiac assessment.' },
    { id: 'cardiac', name: 'Cardiac Evaluation', price: '$200', icon: Heart, description: 'Focused cardiac assessment with stress test, ECG, and cholesterol panel.' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !packageType || !name || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Here would be the API call to book the health check
    toast.success("Health check booking request submitted!");
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <MobileLayout 
      title="Book a Health Check" 
      showBackButton 
      onBack={() => navigate('/')}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-pmc-blue mb-2">Preventive Health Checkups</h2>
        <p className="text-gray-600">Regular health checkups help detect health issues before they become problematic.</p>
      </div>

      <Tabs defaultValue="packages" className="w-full mb-6">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="packages">Health Packages</TabsTrigger>
          <TabsTrigger value="booking">Book Appointment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="packages" className="space-y-4 mt-4">
          {healthPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => {
                setPackageType(pkg.id);
                document.querySelector('[data-value="booking"]')?.dispatchEvent(
                  new Event('click', { bubbles: true })
                );
              }}
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <pkg.icon className="text-pmc-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-pmc-dark">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                  <p className="text-pmc-blue font-semibold">{pkg.price}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="booking" className="space-y-6 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Package <span className="text-pmc-red">*</span>
                </label>
                <Select 
                  value={packageType} 
                  onValueChange={setPackageType}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Package" />
                  </SelectTrigger>
                  <SelectContent>
                    {healthPackages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-pmc-red">*</span>
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-pmc-red">*</span>
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-pmc-red">*</span>
                </label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
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
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full bg-pmc-blue hover:bg-pmc-blue/90 text-white"
              >
                Book Health Check
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </MobileLayout>
  );
};

export default HealthCheck;
