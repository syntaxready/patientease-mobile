
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Appointments from "./pages/Appointments";
import NewAppointment from "./pages/NewAppointment";
import Prescriptions from "./pages/Prescriptions";
import TestResults from "./pages/TestResults";
import History from "./pages/History";
import Services from "./pages/Services";
import HealthCheck from "./pages/HealthCheck";
import SymptomsReport from "./pages/SymptomsReport";
import NotFound from "./pages/NotFound";
import SplashScreen from "./pages/SplashScreen";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings";
import PaymentMethods from "./pages/PaymentMethods";
import Checkout from "./pages/Checkout";
import Help from "./pages/Help";

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return children;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/help" element={<Help />} />
          <Route path="/services" element={<Services />} />
          
          {/* Protected routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          } />
          <Route path="/appointments" element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          } />
          <Route path="/appointments/new" element={
            <ProtectedRoute>
              <NewAppointment />
            </ProtectedRoute>
          } />
          <Route path="/prescriptions" element={
            <ProtectedRoute>
              <Prescriptions />
            </ProtectedRoute>
          } />
          <Route path="/test-results" element={
            <ProtectedRoute>
              <TestResults />
            </ProtectedRoute>
          } />
          <Route path="/history" element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          } />
          <Route path="/health-check" element={
            <ProtectedRoute>
              <HealthCheck />
            </ProtectedRoute>
          } />
          <Route path="/report-symptoms" element={
            <ProtectedRoute>
              <SymptomsReport />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="/payment-methods" element={
            <ProtectedRoute>
              <PaymentMethods />
            </ProtectedRoute>
          } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
