
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { ServiceCard } from '@/components/ServiceCard';

const servicesData = [
  { name: "General Medical Practice", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=130&y=160" },
  { name: "General Surgery & Subspecialist Services", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=340&y=160" },
  { name: "Paediatrics", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=520&y=160" },
  { name: "Neonatal Intensive Care Unit", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=700&y=160" },
  { name: "Intensive Care Unit", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=140&y=320" },
  { name: "Obstetrics & Gynaecology", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=340&y=320" },
  { name: "Family Planning", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=520&y=320" },
  { name: "Assisted Reproductive Technology", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=700&y=320" },
  { name: "Laparoscopic Surgery", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=140&y=460" },
  { name: "Internal Medicine", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=340&y=460" },
  { name: "Dermatology", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=520&y=460" },
  { name: "Orthopaedics", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=700&y=460" },
  { name: "ENT", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=140&y=600" },
  { name: "Ultra Sound Scan", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=340&y=600" },
  { name: "X-ray", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=520&y=600" },
  { name: "Laboratory & Diagnostics", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=700&y=600" },
  { name: "Psychiatry", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=140&y=730" },
  { name: "Dentistry", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=340&y=730" },
  { name: "Physiotherapy", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=520&y=730" },
  { name: "Work & School Fitness", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=700&y=730" },
  { name: "Malaria Control Programme", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=140&y=870" },
  { name: "Emergency & Ambulance service", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=340&y=870" },
  { name: "Domiciliary Services", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=520&y=870" },
  { name: "Dietetics/Dietician", icon: "/lovable-uploads/41eda7a1-34d8-46da-8e61-e83d1d667f65.png#x=700&y=870" }
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.name}
            icon={service.icon}
          />
        ))}
      </div>
    </MobileLayout>
  );
};

export default Services;
