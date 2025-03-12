
import React from 'react';
import BottomNavbar from './BottomNavbar';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

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
    <div className="min-h-screen bg-white md:bg-gray-50 flex flex-col items-center">
      <div className="pmc-container pb-16 md:pb-8 md:my-6 md:rounded-xl md:shadow-md md:max-w-4xl md:w-full">
        {title && (
          <header className="sticky top-0 z-10 bg-white border-b border-gray-100 p-4 md:p-6">
            <div className="flex items-center">
              {showBackButton && (
                <button 
                  onClick={onBack} 
                  className="mr-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
              )}
              <h1 className="page-title flex-1">{title}</h1>
              {!isMobile && !title && (
                <Logo size="small" className="md:hidden" />
              )}
            </div>
          </header>
        )}
        <main className="p-4 md:p-6">
          {children}
        </main>
        <BottomNavbar />
      </div>
    </div>
  );
};

export default MobileLayout;
