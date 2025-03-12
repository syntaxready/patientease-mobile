
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { CreditCard, Plus, Trash2 } from 'lucide-react';

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '4242', expiry: '04/25', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '5555', expiry: '07/24', isDefault: false }
  ]);

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate adding a new card
    const newCard = {
      id: Date.now(),
      type: 'Visa',
      last4: '1234',
      expiry: '01/28',
      isDefault: false
    };
    
    setPaymentMethods([...paymentMethods, newCard]);
    setShowAddCard(false);
    toast.success('Payment method added successfully');
  };

  const handleRemoveCard = (id: number) => {
    setPaymentMethods(paymentMethods.filter(card => card.id !== id));
    toast.success('Payment method removed');
  };

  const handleSetDefault = (id: number) => {
    setPaymentMethods(paymentMethods.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
    toast.success('Default payment method updated');
  };

  return (
    <MobileLayout title="Payment Methods" showBackButton onBack={() => navigate('/settings')}>
      <div className="space-y-6">
        {paymentMethods.map((card) => (
          <div 
            key={card.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="text-pmc-blue" size={24} />
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">{card.type} •••• {card.last4}</span>
                    {card.isDefault && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">Expires {card.expiry}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {!card.isDefault && (
                  <>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleSetDefault(card.id)}
                      className="text-xs"
                    >
                      Set Default
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleRemoveCard(card.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}

        {showAddCard ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
            <h3 className="font-medium text-pmc-dark mb-4">Add New Card</h3>
            <form onSubmit={handleAddCard} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Card Number</label>
                <Input placeholder="1234 5678 9012 3456" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Expiry Date</label>
                  <Input placeholder="MM/YY" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">CVC</label>
                  <Input placeholder="123" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name on Card</label>
                <Input placeholder="John Doe" required />
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="setDefault" />
                <label htmlFor="setDefault" className="text-sm text-gray-600">
                  Set as default payment method
                </label>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  type="submit" 
                  className="flex-1 bg-pmc-blue hover:bg-pmc-blue/90"
                >
                  Add Card
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowAddCard(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <Button 
            onClick={() => setShowAddCard(true)}
            className="w-full border-dashed border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-600"
          >
            <Plus size={16} className="mr-2" />
            Add Payment Method
          </Button>
        )}

        <div className="mt-6">
          <h3 className="font-medium text-pmc-dark mb-4">Payment History</h3>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Health Check - Premium</p>
                  <p className="text-sm text-gray-500">Aug 15, 2023</p>
                </div>
                <p className="font-medium">$149.99</p>
              </div>
            </div>
            <div className="p-4 border-b">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Telemedicine Consultation</p>
                  <p className="text-sm text-gray-500">Jul 28, 2023</p>
                </div>
                <p className="font-medium">$49.99</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Prescription Refill</p>
                  <p className="text-sm text-gray-500">Jul 10, 2023</p>
                </div>
                <p className="font-medium">$25.00</p>
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4"
            onClick={() => navigate('/payment-history')}
          >
            View All Transactions
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default PaymentMethods;
