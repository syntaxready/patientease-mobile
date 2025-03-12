
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';

const servicesData = [
  { name: "General Medical Practice", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "General Surgery & Subspecialist Services", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Paediatrics", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Neonatal Intensive Care Unit", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Intensive Care Unit", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Obstetrics & Gynaecology", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Family Planning", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Assisted Reproductive Technology", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Laparoscopic Surgery", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Internal Medicine", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Dermatology", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Orthopaedics", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "ENT", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Ultra Sound Scan", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "X-ray", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Laboratory & Diagnostics", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Psychiatry", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Dentistry", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Physiotherapy", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" },
  { name: "Work & School Fitness", icon: "/lovable-uploads/659e8f81-c51f-4839-87ca-51cd9813a152.png" }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout 
      title="Our Services" 
      showBackButton 
      onBack={() => navigate('/')}
    >
      <h1 className="text-xl font-semibold text-pmc-blue mb-6 text-center">EXPLORE OUR SEVERAL TREATMENTS</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md"
          >
            <img 
              src={service.icon} 
              alt={service.name} 
              className="w-12 h-12 mb-2"
            />
            <h3 className="text-xs text-center font-medium text-pmc-dark">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default Services;
