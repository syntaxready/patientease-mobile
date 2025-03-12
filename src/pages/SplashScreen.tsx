
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to auth page after 2 seconds
    const timer = setTimeout(() => {
      // Check if user is authenticated, otherwise go to auth
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      navigate(isAuthenticated ? '/' : '/auth');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-pmc-blue flex flex-col items-center justify-center">
      <div className="animate-pulse">
        <Logo className="text-white" size="large" />
      </div>
      
      <div className="mt-8 text-white text-xl font-semibold">
        PatientEase
      </div>
      
      <div className="mt-4 text-white/80 text-sm">
        Your health, simplified
      </div>
      
      <div className="mt-16">
        <div className="w-16 h-1 bg-white/20 rounded-full">
          <div className="h-full bg-white rounded-full animate-[loading_2s_ease-in-out]"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
