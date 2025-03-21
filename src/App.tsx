import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import TheaterPage from './pages/TheaterPage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/theaters/:movieId" element={<TheaterPage />} />
        <Route path="/booking/:showId" element={<BookingPage />} />
        <Route path="/payment/:bookingId" element={<PaymentPage />} />
        <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default App;