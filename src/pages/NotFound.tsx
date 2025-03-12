
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useIsMobile } from "@/hooks/use-mobile";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <Logo size={isMobile ? "medium" : "large"} className="mb-6" />
      <div className="text-center">
        <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold mb-4 text-pmc-blue`}>404</h1>
        <p className={`${isMobile ? 'text-xl' : 'text-2xl'} text-gray-600 mb-6`}>Oops! Page not found</p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-pmc-blue hover:bg-pmc-blue/90"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
