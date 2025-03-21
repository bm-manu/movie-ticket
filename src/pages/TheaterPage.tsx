import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock } from 'lucide-react';

interface Theater {
  id: number;
  name: string;
  location: string;
  rating: number;
  facilities: string[];
  shows: {
    id: number;
    time: string;
    screen: string;
    price: number;
  }[];
}

function TheaterPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [selectedDate] = useState('2024-03-14');

  const theaters: Theater[] = [
    {
      id: 1,
      name: "INOX: Nexus Mall",
      location: "Koramangala, Bangalore",
      rating: 4.5,
      facilities: ["Parking", "Food Court", "Wheelchair Accessible"],
      shows: [
        { id: 101, time: "10:30 AM", screen: "IMAX", price: 350 },
        { id: 102, time: "1:45 PM", screen: "Regular", price: 250 },
        { id: 103, time: "4:30 PM", screen: "4DX", price: 450 },
      ]
    },
    {
      id: 2,
      name: "PVR: Forum Mall",
      location: "Adugodi, Bangalore",
      rating: 4.3,
      facilities: ["Parking", "Dolby Atmos", "Recliner"],
      shows: [
        { id: 201, time: "11:00 AM", screen: "Regular", price: 250 },
        { id: 202, time: "2:15 PM", screen: "IMAX", price: 350 },
        { id: 203, time: "5:30 PM", screen: "Regular", price: 250 },
      ]
    },
    {
      id: 3,
      name: "Cinepolis: Royal Meenakshi",
      location: "Bannerghatta Road, Bangalore",
      rating: 4.4,
      facilities: ["Parking", "Food Court", "Dolby Atmos"],
      shows: [
        { id: 301, time: "12:30 PM", screen: "Regular", price: 250 },
        { id: 302, time: "3:45 PM", screen: "IMAX", price: 350 },
        { id: 303, time: "7:00 PM", screen: "4DX", price: 450 },
      ]
    }
  ];

  const handleShowSelect = (showId: number) => {
    navigate(`/booking/${showId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Select Theater</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span>Bangalore</span>
        </div>
      </div>

      <div className="space-y-6">
        {theaters.map((theater) => (
          <div key={theater.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">{theater.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{theater.location}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{theater.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    {theater.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <Clock size={16} />
                <span>Cancellation available</span>
              </div>
            </div>

            <div className="flex gap-4">
              {theater.shows.map((show) => (
                <button
                  key={show.id}
                  onClick={() => handleShowSelect(show.id)}
                  className="flex-1 p-4 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-colors group"
                >
                  <div className="text-lg font-semibold mb-1 group-hover:text-red-600">
                    {show.time}
                  </div>
                  <div className="text-sm text-gray-600">{show.screen}</div>
                  <div className="text-sm text-gray-500">₹{show.price}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheaterPage;