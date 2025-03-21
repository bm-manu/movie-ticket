import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop",
    rating: 4.5,
    language: "English",
    genre: "Sci-Fi, Adventure"
  },
  {
    id: 2,
    title: "Poor Things",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    rating: 4.3,
    language: "English",
    genre: "Drama, Comedy"
  },
  {
    id: 3,
    title: "Kung Fu Panda 4",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    rating: 4.1,
    language: "English",
    genre: "Animation, Action"
  },
  {
    id: 4,
    title: "Drive",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300&h=450&fit=crop",
    rating: 4.4,
    language: "Hindi",
    genre: "Action, Thriller"
  }
];

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Now Showing</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-1 text-white">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{movie.rating}/5</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h2 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-600">{movie.language}</p>
              <p className="text-sm text-gray-500">{movie.genre}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Coming Soon Movies */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-75">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=300&h=450&fit=crop"
                alt="Coming Soon"
                className="w-full aspect-[2/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-1 text-white">
                  <Clock size={16} />
                  <span className="text-sm">March 28</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-gray-800 mb-1">Godzilla x Kong</h2>
              <p className="text-sm text-gray-600">English</p>
              <p className="text-sm text-gray-500">Action, Sci-Fi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;