import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Film, ThumbsUp, Calendar } from 'lucide-react';

function MoviePage() {
  const { id } = useParams();

  // In a real app, fetch movie details based on id
  const movie = {
    id: 1,
    title: "Dune: Part Two",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=450&fit=crop",
    rating: 4.5,
    duration: "2h 46m",
    language: "English",
    genre: "Sci-Fi, Adventure",
    certificate: "UA",
    releaseDate: "March 1, 2024",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 h-96 rounded-lg shadow-lg object-cover"
            />
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-lg">{movie.rating}/5</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={18} />
                  <span>{movie.duration}</span>
                </div>
                <span>•</span>
                <span>{movie.certificate}</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-gray-400 mb-1">Language</p>
                    <p>{movie.language}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Genre</p>
                    <p>{movie.genre}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Release Date</p>
                    <p>{movie.releaseDate}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Director</p>
                  <p>{movie.director}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 mb-1">Cast</p>
                  <p>{movie.cast.join(", ")}</p>
                </div>
              </div>
              
              <Link
                to={`/theaters/${movie.id}`}
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <Film size={20} />
                Book Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Synopsis */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About the movie</h2>
        <p className="text-gray-600 leading-relaxed">{movie.synopsis}</p>
        
        {/* Show Dates */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={20} className="text-gray-500" />
            <h3 className="text-lg font-semibold">Show Dates</h3>
          </div>
          
          <div className="flex gap-3">
            {['Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18'].map((date) => (
              <button
                key={date}
                className="px-6 py-3 rounded-lg text-sm font-medium bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;