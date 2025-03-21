import React from 'react';
import { Link } from 'react-router-dom';
import { Film, MapPin } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-red-600 font-bold text-xl">
            <Film />
            <span>MovieTime</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <select className="border-none bg-transparent text-sm focus:ring-0">
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Chennai</option>
              </select>
            </div>
            
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;