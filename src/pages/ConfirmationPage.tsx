import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Download, MapPin, Calendar, Clock } from 'lucide-react';

function ConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Check size={32} className="text-green-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600">Booking ID: MOVIE123456</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start gap-4 pb-6 border-b">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=150&h=225&fit=crop"
            alt="Movie Poster"
            className="w-24 h-36 rounded object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Dune: Part Two</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Thu, 14 Mar 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>10:30 AM • IMAX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>INOX: Nexus Mall, Koramangala</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-b">
          <h3 className="font-semibold mb-3">Seat Details</h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded text-sm">A4</span>
            <span className="px-3 py-1 bg-gray-100 rounded text-sm">A5</span>
          </div>
        </div>

        <div className="py-6">
          <h3 className="font-semibold mb-3">Payment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Ticket Price</span>
              <span>₹800</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Convenience Fee</span>
              <span>₹28</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Total Amount</span>
              <span>₹828</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
          <Download size={20} />
          Download Ticket
        </button>
        <Link
          to="/"
          className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;