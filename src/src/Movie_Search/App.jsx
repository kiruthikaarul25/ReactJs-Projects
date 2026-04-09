
import React, { useState } from 'react';
import './App.css'; 

const API_KEY = "62b6342c";
const BASE_URL = 'https://www.omdbapi.com/';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'No movies found');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1> Movie Search</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

function MovieCard({ movie }) {
  const posterUrl =
    movie.Poster !== 'N/A'
      ? movie.Poster
      : 'https://your-custom-image-url.jpg';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <RatingIndicator imdbID={movie.imdbID} />
      </div>
    </div>
  );
}

function RatingIndicator({ imdbID }) {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`
        );
        const data = await res.json();
        setRating(data.imdbRating !== 'N/A' ? data.imdbRating : 'N/A');
      } catch {
        setRating('N/A');
      } finally {
        setLoading(false);
      }
    };
    fetchRating();
  }, [imdbID]);

  if (loading) return <span>⭐ loading...</span>;
  return <span>⭐ {rating !== 'N/A' ? `${rating}/10` : 'No rating'}</span>;
}

export default App;