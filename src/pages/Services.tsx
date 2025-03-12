
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { 
  Stethoscope, 
  Scissors, 
  Baby, 
  Building2, 
  Heart, 
  Baby as BabyIcon, 
  Calendar, 
  Flower2, 
  Microscope, 
  Pill, 
  Scan, 
  Bone, 
  Ear, 
  ScanSearch, 
  FileImage, 
  FlaskConical, 
  Brain, 
  Tooth, 
  ActivitySquare,
  Briefcase
} from 'lucide-react';

const servicesData = [
  { name: "General Medical Practice", icon: Stethoscope },
  { name: "General Surgery & Subspecialist Services", icon: Scissors },
  { name: "Paediatrics", icon: Baby },
  { name: "Neonatal Intensive Care Unit", icon: BabyIcon },
  { name: "Intensive Care Unit", icon: Building2 },
  { name: "Obstetrics & Gynaecology", icon: Heart },
  { name: "Family Planning", icon: Calendar },
  { name: "Assisted Reproductive Technology", icon: Flower2 },
  { name: "Laparoscopic Surgery", icon: Microscope },
  { name: "Internal Medicine", icon: Pill },
  { name: "Dermatology", icon: Scan },
  { name: "Orthopaedics", icon: Bone },
  { name: "ENT", icon: Ear },
  { name: "Ultra Sound Scan", icon: ScanSearch },
  { name: "X-ray", icon: FileImage },
  { name: "Laboratory & Diagnostics", icon: FlaskConical },
  { name: "Psychiatry", icon: Brain },
  { name: "Dentistry", icon: Tooth },
  { name: "Physiotherapy", icon: ActivitySquare },
  { name: "Work & School Fitness", icon: Briefcase }
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
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center text-pmc-blue">
                <IconComponent size={32} />
              </div>
              <h3 className="text-xs text-center font-medium text-pmc-dark">
                {service.name}
              </h3>
            </div>
          );
        })}
      </div>
    </MobileLayout>
  );
};

export default Services;
