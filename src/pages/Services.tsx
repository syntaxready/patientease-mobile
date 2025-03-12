
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { useIsMobile } from '@/hooks/use-mobile';

const servicesData = [
  { name: "General Medical Practice", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "0 0" },
  { name: "General Surgery & Subspecialist Services", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "16.6% 0" },
  { name: "Paediatrics", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "33.3% 0" },
  { name: "Neonatal Intensive Care Unit", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "50% 0" },
  { name: "Intensive Care Unit", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "0 25%" },
  { name: "Obstetrics & Gynaecology", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "16.6% 25%" },
  { name: "Family Planning", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "33.3% 25%" },
  { name: "Assisted Reproductive Technology (ART)", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "50% 25%" },
  { name: "Laparoscopic Surgery", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "0 50%" },
  { name: "Internal Medicine", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "16.6% 50%" },
  { name: "Dermatology", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "33.3% 50%" },
  { name: "Orthopaedics", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "50% 50%" },
  { name: "ENT", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "0 75%" },
  { name: "Ultra Sound Scan", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "16.6% 75%" },
  { name: "X-ray", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "33.3% 75%" },
  { name: "Laboratory & Diagnostics", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "50% 75%" },
  { name: "Psychiatry", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "0 100%" },
  { name: "Dentistry", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "16.6% 100%" },
  { name: "Physiotherapy", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "33.3% 100%" },
  { name: "Work & School Fitness Certific", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "50% 100%" },
  { name: "Malaria Control Programme", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "66.6% 0" },
  { name: "Emergency & Ambulance service", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "66.6% 25%" },
  { name: "Domiciliary Services", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "66.6% 50%" },
  { name: "Dietetics/Dietician", icon: "/lovable-uploads/8a08f15e-3f38-4519-a1c3-a2a5d40b7b13.png", iconPosition: "66.6% 75%" }
];

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <MobileLayout 
      title="Our Services" 
      showBackButton 
      onBack={() => navigate('/')}
    >
      <h1 className="text-xl font-semibold text-pmc-blue mb-6 text-center">EXPLORE OUR SEVERAL TREATMENTS</h1>
      
      <div className={`services-grid`}>
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer transition-all"
          >
            <img 
              src={service.icon} 
              alt={service.name} 
              className="w-16 h-16 mb-3 object-contain"
            />
            <h3 className={`${isMobile ? 'text-xs' : 'text-sm'} text-center font-medium text-pmc-dark`}>
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default Services;
