
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { AtSign, KeyRound, ArrowLeft, HelpCircle, Info } from 'lucide-react';
import Logo from '@/components/Logo';

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isAuthenticated', 'true');
      toast.success('Successfully signed in');
      navigate('/');
    }, 1500);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isAuthenticated', 'true');
      toast.success('Account created successfully');
      navigate('/');
    }, 1500);
  };

  const handleGuestAccess = () => {
    localStorage.setItem('isAuthenticated', 'true');
    toast.success('Signed in as guest');
    navigate('/');
  };

  return (
    <MobileLayout>
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-full px-4 mb-4">
          <button 
            onClick={() => navigate('/splash')} 
            className="flex items-center text-pmc-blue"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back
          </button>
        </div>
        
        <Logo className="mb-8" />
        
        <Tabs defaultValue="signin" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin">
            <div className="space-y-4 px-4">
              <h1 className="text-2xl font-bold text-center text-pmc-dark">Welcome Back</h1>
              <p className="text-center text-gray-500">Sign in to your PatientEase account</p>
              
              <form onSubmit={handleSignIn} className="space-y-4 mt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <a href="#" className="text-sm text-pmc-blue hover:underline">Forgot Password?</a>
                  </div>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-pmc-blue hover:bg-pmc-blue/90" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
              
              <div className="text-center">
                <button 
                  onClick={handleGuestAccess}
                  className="text-pmc-blue hover:underline text-sm mt-4"
                >
                  Continue as guest
                </button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="signup">
            <div className="space-y-4 px-4">
              <h1 className="text-2xl font-bold text-center text-pmc-dark">Create Account</h1>
              <p className="text-center text-gray-500">Join PatientEase for better healthcare management</p>
              
              <form onSubmit={handleSignUp} className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="rounded text-pmc-blue focus:ring-pmc-blue"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-pmc-blue hover:underline">Terms of Service</a> and <a href="#" className="text-pmc-blue hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-pmc-blue hover:bg-pmc-blue/90" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Footer navigation links */}
        <div className="mt-8 w-full max-w-md flex justify-center space-x-6 px-4">
          <Link to="/services" className="flex items-center text-sm text-gray-600 hover:text-pmc-blue">
            <Info size={16} className="mr-1" />
            Services
          </Link>
          <Link to="/help" className="flex items-center text-sm text-gray-600 hover:text-pmc-blue">
            <HelpCircle size={16} className="mr-1" />
            Help
          </Link>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Auth;
