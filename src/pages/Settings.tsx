
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { 
  Bell, 
  ChevronRight, 
  CreditCard, 
  HelpCircle, 
  Lock, 
  LogOut, 
  Mail, 
  ShieldCheck, 
  Smartphone, 
  User 
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    appointments: true,
    reminders: true,
    results: true,
    marketing: false
  });

  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };

  const handleSignOut = () => {
    // Clear authentication data
    localStorage.removeItem('isAuthenticated');
    toast.success('Signed out successfully');
    navigate('/auth');
  };

  return (
    <MobileLayout title="Settings" showBackButton onBack={() => navigate('/')}>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-2">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-pmc-dark text-xl font-medium">JD</span>
          </div>
          <div>
            <h2 className="text-lg font-medium text-pmc-dark">John Doe</h2>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => navigate('/profile')}
          >
            <div className="flex items-center">
              <User size={20} className="text-pmc-blue mr-3" />
              <span>Personal Information</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          <Separator />
          
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => navigate('/payment-methods')}
          >
            <div className="flex items-center">
              <CreditCard size={20} className="text-pmc-blue mr-3" />
              <span>Payment Methods</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          <Separator />
          
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => navigate('/security')}
          >
            <div className="flex items-center">
              <Lock size={20} className="text-pmc-blue mr-3" />
              <span>Security</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-pmc-dark">Notifications</h3>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bell size={20} className="text-pmc-blue mr-3" />
                <span>Appointment Reminders</span>
              </div>
              <Switch 
                checked={notifications.appointments} 
                onCheckedChange={(checked) => setNotifications({...notifications, appointments: checked})} 
              />
            </div>
            
            <Separator />
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Smartphone size={20} className="text-pmc-blue mr-3" />
                <span>Medication Reminders</span>
              </div>
              <Switch 
                checked={notifications.reminders} 
                onCheckedChange={(checked) => setNotifications({...notifications, reminders: checked})} 
              />
            </div>
            
            <Separator />
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Mail size={20} className="text-pmc-blue mr-3" />
                <span>Test Results Available</span>
              </div>
              <Switch 
                checked={notifications.results} 
                onCheckedChange={(checked) => setNotifications({...notifications, results: checked})} 
              />
            </div>
            
            <Separator />
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Mail size={20} className="text-pmc-blue mr-3" />
                <span>Marketing & Promotions</span>
              </div>
              <Switch 
                checked={notifications.marketing} 
                onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})} 
              />
            </div>
          </div>
          
          <Button 
            onClick={handleSaveSettings}
            className="w-full bg-pmc-blue hover:bg-pmc-blue/90"
          >
            Save Settings
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => navigate('/help')}
          >
            <div className="flex items-center">
              <HelpCircle size={20} className="text-pmc-blue mr-3" />
              <span>Help & Support</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          
          <Separator />
          
          <div 
            className="p-4 flex items-center justify-between cursor-pointer"
            onClick={() => navigate('/privacy')}
          >
            <div className="flex items-center">
              <ShieldCheck size={20} className="text-pmc-blue mr-3" />
              <span>Privacy Policy</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        <Button 
          variant="destructive" 
          className="w-full" 
          onClick={handleSignOut}
        >
          <LogOut size={16} className="mr-2" />
          Sign Out
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Settings;
