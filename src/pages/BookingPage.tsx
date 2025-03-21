import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();
  const { showId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const seatsPerRow = 12;
  const bookedSeats = ['A1', 'A2', 'B5', 'C8', 'D4', 'E10']; // Simulated booked seats

  const handleSeatClick = (seat: string) => {
    if (bookedSeats.includes(seat)) return;
    
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else if (selectedSeats.length < 10) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length > 0) {
      navigate(`/payment/${showId}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Select Seats</h1>

      {/* Movie & Show Info */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">Dune: Part Two</h2>
        <div className="text-sm text-gray-600">
          <p>INOX: Nexus Mall, Koramangala</p>
          <p>Today, 10:30 AM • IMAX</p>
        </div>
      </div>

      {/* Screen */}
      <div className="relative mb-12">
        <div className="h-4 bg-gray-300 rounded-lg mb-2"></div>
        <p className="text-center text-sm text-gray-500">SCREEN</p>
      </div>

      {/* Seat Layout */}
      <div className="space-y-4 mb-8">
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-4">
            <span className="w-6 text-center text-gray-500">{row}</span>
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: seatsPerRow }, (_, i) => {
                const seatNumber = `${row}${i + 1}`;
                const isSelected = selectedSeats.includes(seatNumber);
                const isBooked = bookedSeats.includes(seatNumber);

                return (
                  <button
                    key={seatNumber}
                    onClick={() => handleSeatClick(seatNumber)}
                    disabled={isBooked}
                    className={`
                      w-8 h-8 rounded-t-lg text-xs font-medium transition-colors
                      ${isBooked ? 'bg-gray-200 cursor-not-allowed' : 
                        isSelected ? 'bg-red-600 text-white' : 
                        'bg-white border-2 border-gray-300 hover:border-red-600'}
                    `}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Seat Legend */}
      <div className="flex items-center gap-8 justify-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded border-2 border-gray-300"></div>
          <span className="text-sm text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-red-600"></div>
          <span className="text-sm text-gray-600">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gray-200"></div>
          <span className="text-sm text-gray-600">Booked</span>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">
              {selectedSeats.length} Seats Selected: {selectedSeats.join(', ')}
            </p>
            <p className="font-semibold">Total: ₹{selectedSeats.length * 350}</p>
          </div>
          <button
            onClick={handleProceedToPayment}
            disabled={selectedSeats.length === 0}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;