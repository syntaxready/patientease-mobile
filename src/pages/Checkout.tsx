
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';

interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiry: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const serviceDetails = location.state?.serviceDetails || {
    name: 'Health Check - Standard',
    price: 99.99,
    description: 'Comprehensive health assessment including vital signs, blood work, and physician consultation.'
  };

  const [paymentMethods] = useState<PaymentMethod[]>([
    { id: 1, type: 'Visa', last4: '4242', expiry: '04/25' },
    { id: 2, type: 'Mastercard', last4: '5555', expiry: '07/24' }
  ]);
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<number>(1);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePay = () => {
    setProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentComplete(true);
      toast.success('Payment successful');
      
      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        navigate('/payment-confirmation', { 
          state: { 
            paymentDetails: {
              service: serviceDetails.name,
              amount: serviceDetails.price,
              date: new Date().toISOString(),
              paymentMethod: paymentMethods.find(m => m.id === selectedPaymentMethod)
            } 
          }
        });
      }, 2000);
    }, 2000);
  };

  if (paymentComplete) {
    return (
      <MobileLayout title="Payment Complete" showBackButton onBack={() => navigate('/')}>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-green-500" size={40} />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Payment Successful</h2>
          <p className="text-gray-600 text-center mb-8">
            Your payment of ${serviceDetails.price} has been processed successfully.
          </p>
          <Button 
            className="w-full bg-pmc-blue hover:bg-pmc-blue/90 mb-4"
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout title="Checkout" showBackButton onBack={() => navigate(-1)}>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h3 className="font-medium text-pmc-dark mb-3">Service Details</h3>
          <div className="space-y-2">
            <p className="text-lg font-medium">{serviceDetails.name}</p>
            <p className="text-gray-600">{serviceDetails.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h3 className="font-medium text-pmc-dark mb-3">Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className={`flex items-center p-3 rounded-lg border ${selectedPaymentMethod === method.id ? 'border-pmc-blue bg-blue-50' : 'border-gray-200'} cursor-pointer`}
                onClick={() => setSelectedPaymentMethod(method.id)}
              >
                <input 
                  type="radio" 
                  checked={selectedPaymentMethod === method.id}
                  onChange={() => setSelectedPaymentMethod(method.id)}
                  className="mr-3 text-pmc-blue"
                />
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <CreditCard className="text-pmc-blue" size={20} />
                </div>
                <div>
                  <p className="font-medium">{method.type} •••• {method.last4}</p>
                  <p className="text-xs text-gray-500">Expires {method.expiry}</p>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full mt-2"
              onClick={() => navigate('/payment-methods')}
            >
              Add New Payment Method
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h3 className="font-medium text-pmc-dark mb-3">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>${serviceDetails.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${(serviceDetails.price * 0.08).toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>${(serviceDetails.price * 1.08).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg flex items-start">
          <AlertCircle className="text-yellow-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
          <p className="text-sm text-yellow-700">
            By proceeding with this payment, you agree to our Terms of Service and acknowledge that some services may require additional in-person follow-up.
          </p>
        </div>

        <Button 
          className="w-full bg-pmc-blue hover:bg-pmc-blue/90"
          onClick={handlePay}
          disabled={processingPayment}
        >
          {processingPayment ? 'Processing...' : `Pay $${(serviceDetails.price * 1.08).toFixed(2)}`}
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Checkout;
