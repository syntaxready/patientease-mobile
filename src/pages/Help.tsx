
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Phone, Mail, MessageSquare } from 'lucide-react';

const Help = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)} 
            className="mr-2"
          >
            <ChevronLeft size={24} />
          </Button>
          <h1 className="text-xl font-bold">Help & Support</h1>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-3">How can we help you?</h2>
            <p className="text-gray-600 mb-4">
              Get support for your PatientEase account, appointments, prescriptions, and other services.
            </p>
            
            <div className="grid gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium flex items-center">
                  <Phone size={18} className="mr-2 text-pmc-blue" />
                  Call us
                </h3>
                <p className="text-sm text-gray-600 mt-1">Available Mon-Fri, 8am-6pm</p>
                <Button 
                  className="w-full mt-3" 
                  variant="outline"
                  onClick={() => window.location.href = 'tel:1-800-123-4567'}
                >
                  1-800-123-4567
                </Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium flex items-center">
                  <Mail size={18} className="mr-2 text-pmc-blue" />
                  Email Support
                </h3>
                <p className="text-sm text-gray-600 mt-1">24/7 response within 24 hours</p>
                <Button 
                  className="w-full mt-3" 
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:support@patientease.com'}
                >
                  support@patientease.com
                </Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium flex items-center">
                  <MessageSquare size={18} className="mr-2 text-pmc-blue" />
                  Live Chat
                </h3>
                <p className="text-sm text-gray-600 mt-1">Chat with our support team</p>
                <Button className="w-full mt-3">
                  Start Chat
                </Button>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">How do I reschedule an appointment?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Go to the Appointments section, select the appointment you want to change, and tap the "Reschedule" button.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">How do I request a prescription refill?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Navigate to the Prescriptions section, select the prescription you need refilled, and tap "Request Refill".
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Can I use insurance for my appointments?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Yes. You can add your insurance information in the Settings section and it will automatically be applied to eligible appointments.
                </p>
              </div>
            </div>
            
            <Button 
              variant="link" 
              className="mt-4 text-pmc-blue"
              onClick={() => navigate('/services')}
            >
              View all services
            </Button>
          </section>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Help;
