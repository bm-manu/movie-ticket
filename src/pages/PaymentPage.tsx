import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Wallet, Ban as Bank, Clock } from 'lucide-react';

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const handlePayment = () => {
    // In a real app, handle payment processing here
    navigate('/confirmation/123');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Payment</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            
            <div className="space-y-4">
              <label className="flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer hover:border-red-600 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-red-600 focus:ring-red-600"
                />
                <CreditCard size={20} className="text-gray-600" />
                <div>
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-gray-500">All major cards accepted</div>
                </div>
              </label>

              <label className="flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer hover:border-red-600 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-red-600 focus:ring-red-600"
                />
                <Wallet size={20} className="text-gray-600" />
                <div>
                  <div className="font-medium">UPI</div>
                  <div className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</div>
                </div>
              </label>

              <label className="flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer hover:border-red-600 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="netbanking"
                  checked={paymentMethod === 'netbanking'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-red-600 focus:ring-red-600"
                />
                <Bank size={20} className="text-gray-600" />
                <div>
                  <div className="font-medium">Net Banking</div>
                  <div className="text-sm text-gray-500">All major banks supported</div>
                </div>
              </label>
            </div>
          </div>

          {/* Card Details (shown only if card is selected) */}
          {paymentMethod === 'card' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Card Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-600 focus:border-red-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tickets (2)</span>
              <span>₹800</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Convenience Fee</span>
              <span>₹28</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total Amount</span>
              <span className="text-red-600">₹828</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock size={16} />
            <span>Complete payment within 10:00 minutes</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Pay ₹828
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;