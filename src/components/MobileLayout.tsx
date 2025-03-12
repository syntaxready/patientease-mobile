
import React from 'react';
import BottomNavbar from './BottomNavbar';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ 
  children, 
  title, 
  showBackButton = false,
  onBack
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`${isMobile ? 'pmc-container' : 'pmc-desktop-container'} pb-16`}>
      {title && (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4">
          <div className="flex items-center">
            {showBackButton && (
              <button 
                onClick={onBack} 
                className="mr-2 p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
            )}
            <h1 className="page-title flex-1">{title}</h1>
          </div>
        </header>
      )}
      <main className={`p-4 ${!isMobile && 'max-w-7xl mx-auto'}`}>
        {children}
      </main>
      <BottomNavbar />
    </div>
  );
};

export default MobileLayout;
