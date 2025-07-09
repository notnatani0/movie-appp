import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { searchMovies, getTrendingMovies } from "../services/api";
import "../styles/Home.css";

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
};

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    async function loadTrending() {
      try {
        const trending = await getTrendingMovies();
        setMovies(trending || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch trending movies.");
      } finally {
        setLoading(false);
      }
    }

    loadTrending();
  }, []);
  
  // Auto-search with debounced query
  useEffect(() => {
    const performSearch = async () => {
      if (debouncedSearchQuery.trim()) {
        setLoading(true);
        try {
          const results = await searchMovies(debouncedSearchQuery);
          setMovies(results || []);
          setError(null);
        } catch (err) {
          console.error(err);
          setError("Failed to search movies.");
        } finally {
          setLoading(false);
        }
      } else {
        // Load trending movies when search is empty
        const trending = await getTrendingMovies();
        setMovies(trending || []);
      }
    };
    
    performSearch();
  }, [debouncedSearchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Form submission is now handled by auto-search via debounced query
    // This just prevents the default form submission
  };

  return (
    <section className="home">
      <form onSubmit={handleSearch} className="movie-search">
        <input
          type="text"
          placeholder="Search movies..."
          className="movie-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="loading">Loading movies...</p>
      ) : movies && movies.length > 0 ? (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="empty">No movies found. Try a different search.</p>
      )}
    </section>
  );
}

export default Home;
